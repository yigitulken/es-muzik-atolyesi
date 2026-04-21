import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const runtime = "edge"
export const alt = "ES Müzik Atölyesi Hizmetleri — Piyano akort, yaylı onarım, arşe kıl, gitar bakım"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "Hizmetler",
    title: "Piyano, Yaylı ve Gitar Bakımı",
    subtitle:
      "Akort, mekanik tamir, tel değişimi, köprü ayarı, arşe kıl değişimi, gitar setup ve daha fazlası.",
  })
}
