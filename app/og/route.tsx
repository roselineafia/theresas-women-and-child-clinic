import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFF8FC",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 72, height: 16, background: "#FF7EB3", borderRadius: 99 }} />
          <div style={{ width: 72, height: 16, background: "#7A2E9B", borderRadius: 99 }} />
          <div style={{ width: 72, height: 16, background: "#FFE566", borderRadius: 99 }} />
          <div style={{ width: 72, height: 16, background: "#7DDE9A", borderRadius: 99 }} />
          <div style={{ width: 72, height: 16, background: "#7ED6F5", borderRadius: 99 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 3, color: "#1B7A46" }}>
            ASHONGMAN ESTATE · WOMEN · CHILDREN
          </div>
          <div style={{ fontSize: 68, color: "#7A2E9B", lineHeight: 1.05, marginTop: 18 }}>
            Theresa’s Women and Child Clinic
          </div>
          <div style={{ fontSize: 32, color: "#332638", marginTop: 18 }}>A place to grow, heal and thrive.</div>
        </div>
        <div style={{ fontSize: 26, color: "#5E5664" }}>Care for her. Care for them. Care for every tomorrow.</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
