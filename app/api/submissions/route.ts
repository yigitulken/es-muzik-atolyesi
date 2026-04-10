import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { submissions } from "@/lib/db/schema"
import { photoUploadSchema, contactFormSchema } from "@/lib/validations/submission"
import { sendSubmissionNotification } from "@/lib/email/send-notification"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const schema =
      body.source === "contact_form" ? contactFormSchema : photoUploadSchema
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Gecersiz veri", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data

    const [submission] = await db
      .insert(submissions)
      .values({
        name: data.name,
        phone: data.phone,
        email: "email" in data ? data.email : null,
        instrumentType: data.instrumentType,
        description: data.description,
        photos: data.photos,
        source: data.source,
      })
      .returning()

    // E-posta bildirimi gonder (async, hata olsa bile form gonderimini engellemez)
    sendSubmissionNotification({
      name: data.name,
      phone: data.phone,
      email: "email" in data ? data.email : undefined,
      instrumentType: data.instrumentType,
      description: data.description,
      photos: data.photos,
      source: data.source,
    }).catch(console.error)

    return NextResponse.json({ success: true, id: submission.id })
  } catch {
    return NextResponse.json(
      { error: "Basvuru kaydedilirken bir hata olustu" },
      { status: 500 }
    )
  }
}
