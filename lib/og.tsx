import { ImageResponse } from "next/og"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f6f1ea 0%, #e9dfd1 50%, #d9c6a7 100%)",
          color: "#2c1f13",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#5c3d2e",
              color: "#f6f1ea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            ES
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#5c3d2e",
            }}
          >
            ES Müzik Atölyesi
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#8a6b4f",
              textTransform: "uppercase",
              letterSpacing: "4px",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#2c1f13",
              letterSpacing: "-1px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#5c3d2e",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #8a6b4f",
            paddingTop: "24px",
            fontSize: "22px",
            color: "#5c3d2e",
          }}
        >
          <div>Piyano · Yaylı · Gitar</div>
          <div>İzmir · Konak</div>
        </div>
      </div>
    ),
    OG_SIZE
  )
}
