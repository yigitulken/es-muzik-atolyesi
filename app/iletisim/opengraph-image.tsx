import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const runtime = "edge"
export const alt = "İletişim — ES Müzik Atölyesi, Kılıçreis Mah. Konak/İzmir"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "İletişim",
    title: "WhatsApp, Telefon, Form",
    subtitle:
      "Kılıçreis Mah. 320/1 Sk. No:32 Konak/İzmir · Pzt–Cmt 10:00–19:00 · +90 505 890 04 77",
  })
}
