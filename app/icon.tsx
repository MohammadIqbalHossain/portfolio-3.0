import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "white",
          fontWeight: "bolder",
          fontStyle: "italic",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        IH
      </div>
    ),
    // ImageResponse options
    {
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
