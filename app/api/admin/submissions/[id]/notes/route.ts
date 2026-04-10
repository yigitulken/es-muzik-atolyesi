import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { notes } from "@/lib/db/schema"
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

  const result = await db
    .select()
    .from(notes)
    .where(eq(notes.submissionId, id))
    .orderBy(desc(notes.createdAt))

  return NextResponse.json(result)
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()

  if (!body.content || body.content.trim().length === 0) {
    return NextResponse.json({ error: "Not icerigi bos olamaz" }, { status: 400 })
  }

  const [note] = await db
    .insert(notes)
    .values({
      submissionId: id,
      content: body.content.trim(),
    })
    .returning()

  return NextResponse.json(note)
}
