import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { submissions } from "@/lib/db/schema"
import { sql } from "drizzle-orm"

export async function GET() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const [statusCounts, instrumentCounts, recentSubmissions] = await Promise.all([
    // Count by status
    db
      .select({
        status: submissions.status,
        count: sql<number>`count(*)::int`,
      })
      .from(submissions)
      .groupBy(submissions.status),

    // Count by instrument type
    db
      .select({
        instrumentType: submissions.instrumentType,
        count: sql<number>`count(*)::int`,
      })
      .from(submissions)
      .groupBy(submissions.instrumentType),

    // Recent 5 submissions
    db
      .select({
        id: submissions.id,
        name: submissions.name,
        instrumentType: submissions.instrumentType,
        status: submissions.status,
        createdAt: submissions.createdAt,
      })
      .from(submissions)
      .orderBy(sql`${submissions.createdAt} desc`)
      .limit(5),
  ])

  const statusMap: Record<string, number> = {
    new: 0,
    reviewed: 0,
    contacted: 0,
    completed: 0,
  }
  for (const row of statusCounts) {
    statusMap[row.status] = row.count
  }

  return NextResponse.json({
    statusCounts: statusMap,
    instrumentCounts,
    recentSubmissions,
    total:
      statusMap.new +
      statusMap.reviewed +
      statusMap.contacted +
      statusMap.completed,
  })
}
