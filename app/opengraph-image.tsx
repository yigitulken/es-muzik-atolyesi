import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const runtime = "edge"
export const alt = "ES Müzik Atölyesi — Piyano, Yaylı ve Gitar Bakım, Onarım, Akort"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "İzmir · Konak",
    title: "ES Müzik Atölyesi",
    subtitle:
      "Piyano, yaylı çalgılar ve gitar için bakım, onarım, ayar ve akort — titiz işçilik, güvenilir süreç.",
  })
}
