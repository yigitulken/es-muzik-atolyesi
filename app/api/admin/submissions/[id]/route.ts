import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { submissions, notes } from "@/lib/db/schema"
import { eq, desc } from "drizzle-orm"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params

  const [submission] = await db
    .select()
    .from(submissions)
    .where(eq(submissions.id, id))
    .limit(1)

  if (!submission) {
    return NextResponse.json({ error: "Bulunamadi" }, { status: 404 })
  }

  const submissionNotes = await db
    .select()
    .from(notes)
    .where(eq(notes.submissionId, id))
    .orderBy(desc(notes.createdAt))

  return NextResponse.json({ ...submission, notes: submissionNotes })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()

  const updateData: Record<string, unknown> = { updatedAt: new Date() }

  if (body.status) updateData.status = body.status
  if (body.priority) updateData.priority = body.priority
  if (body.estimatedCost !== undefined)
    updateData.estimatedCost = body.estimatedCost

  if (body.status === "completed") {
    updateData.completedAt = new Date()
  }

  const [updated] = await db
    .update(submissions)
    .set(updateData)
    .where(eq(submissions.id, id))
    .returning()

  if (!updated) {
    return NextResponse.json({ error: "Bulunamadi" }, { status: 404 })
  }

  return NextResponse.json(updated)
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params

  await db.delete(submissions).where(eq(submissions.id, id))

  return NextResponse.json({ success: true })
}
