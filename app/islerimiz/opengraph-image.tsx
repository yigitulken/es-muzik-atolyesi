import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const runtime = "edge"
export const alt = "ES Müzik Atölyesi — Piyano, yaylı ve gitar onarım örnekleri"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "İşlerimiz",
    title: "Atölyeden Örnek İşler",
    subtitle:
      "Piyano akort ve mekanik onarım, yaylı köprü ayarı, arşe kıl değişimi, gitar tamiri — gerçek örneklerle.",
  })
}
