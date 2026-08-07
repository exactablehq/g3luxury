import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "G3 Luxury Massage & Wellness Spa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [heroBg, wordmark] = await Promise.all([
    readFile(join(process.cwd(), "public/hero-bg.png")),
    readFile(join(process.cwd(), "public/g3wordmark.png")),
  ]);

  const heroBgSrc = `data:image/png;base64,${heroBg.toString("base64")}`;
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#000000",
        }}
      >
        <img
          src={heroBgSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={wordmarkSrc} alt="" width={420} style={{ objectFit: "contain" }} />
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#E5A93B",
            }}
          >
            Massage &amp; Wellness Spa
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
