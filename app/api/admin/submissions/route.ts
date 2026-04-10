import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { submissions } from "@/lib/db/schema"
import { eq, sql, and, desc } from "drizzle-orm"

export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const status = searchParams.get("status")
  const instrument = searchParams.get("instrument")
  const search = searchParams.get("q")
  const offset = (page - 1) * limit

  const conditions = []

  if (status && status !== "all") {
    conditions.push(eq(submissions.status, status as typeof submissions.status.enumValues[number]))
  }

  if (instrument && instrument !== "all") {
    conditions.push(eq(submissions.instrumentType, instrument as typeof submissions.instrumentType.enumValues[number]))
  }

  if (search) {
    conditions.push(
      sql`(${submissions.name} ILIKE ${"%" + search + "%"} OR ${submissions.phone} ILIKE ${"%" + search + "%"} OR ${submissions.email} ILIKE ${"%" + search + "%"})`
    )
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined

  const [data, countResult] = await Promise.all([
    db
      .select()
      .from(submissions)
      .where(where)
      .orderBy(desc(submissions.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)::int` })
      .from(submissions)
      .where(where),
  ])

  return NextResponse.json({
    submissions: data,
    total: countResult[0]?.count || 0,
    page,
    limit,
    totalPages: Math.ceil((countResult[0]?.count || 0) / limit),
  })
}
