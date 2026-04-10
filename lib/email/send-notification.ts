import { Resend } from "resend"
import { instrumentTypeLabels } from "@/lib/validations/submission"

const resend = new Resend(process.env.RESEND_API_KEY)

interface SubmissionData {
  name: string
  phone: string
  email?: string | null
  instrumentType: string
  description: string
  photos: string[]
  source: string
}

export async function sendSubmissionNotification(data: SubmissionData) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL
  if (!notificationEmail || !process.env.RESEND_API_KEY) {
    console.warn("E-posta ayarlari eksik, bildirim gonderilmedi")
    return
  }

  const instrumentLabel =
    instrumentTypeLabels[
      data.instrumentType as keyof typeof instrumentTypeLabels
    ] || data.instrumentType

  const sourceLabel =
    data.source === "photo_upload" ? "Fotograf Gonderimi" : "Iletisim Formu"

  const photoLinks =
    data.photos.length > 0
      ? data.photos.map((url, i) => `<a href="${url}">Fotograf ${i + 1}</a>`).join(" | ")
      : "Fotograf yuklenmedi"

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5c3d2e;">Yeni Basvuru - ES Atolye</h2>
      <p style="color: #666;">Kaynak: ${sourceLabel}</p>
      <hr style="border: 1px solid #eee;" />
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #888; width: 140px;">Ad Soyad</td>
          <td style="padding: 8px 0; font-weight: 600;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888;">Telefon</td>
          <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>
        ${
          data.email
            ? `<tr>
          <td style="padding: 8px 0; color: #888;">E-posta</td>
          <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding: 8px 0; color: #888;">Enstruman</td>
          <td style="padding: 8px 0;">${instrumentLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888;">Fotograflar</td>
          <td style="padding: 8px 0;">${photoLinks}</td>
        </tr>
      </table>
      <hr style="border: 1px solid #eee;" />
      <h3 style="color: #5c3d2e;">Aciklama</h3>
      <p style="white-space: pre-wrap; color: #333;">${data.description}</p>
      <hr style="border: 1px solid #eee;" />
      <p style="color: #999; font-size: 12px;">
        Bu e-posta ES Atolye web sitesi uzerinden otomatik olarak gonderilmistir.
      </p>
    </div>
  `

  try {
    await resend.emails.send({
      from: "ES Atolye <onboarding@resend.dev>",
      to: notificationEmail,
      subject: `Yeni Basvuru: ${data.name} - ${instrumentLabel}`,
      html,
    })
  } catch (error) {
    console.error("E-posta gonderim hatasi:", error)
  }
}
