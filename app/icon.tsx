import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  // Simple brand-initial icon to satisfy /icon requests; uses primary brand blue
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: "#0078D4",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: -0.5,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        S
      </div>
    ),
    size
  );
}
