import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const runtime = "edge"
export const alt = "Atölye — Lüthiyer Sonat Tufan ve ES Müzik Atölyesi hakkında"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "Atölye",
    title: "Lüthiyer Sonat Tufan",
    subtitle:
      "1996'dan bu yana müzik ve enstrüman bakım onarımıyla; 2026'da ES Müzik Atölyesi, İzmir Konak.",
  })
}
