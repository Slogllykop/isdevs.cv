import { ImageResponse } from "next/og";
import { PROFILE_NAME, SITE_URL } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${PROFILE_NAME} - Frontend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    const domain = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");

    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "#0a0a0a",
                padding: "80px",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <span
                    style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#666",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                    }}
                >
                    Portfolio
                </span>
                <h1
                    style={{
                        fontSize: "72px",
                        fontWeight: 700,
                        color: "#fafafa",
                        lineHeight: 1.1,
                        margin: 0,
                        letterSpacing: "-2px",
                    }}
                >
                    {PROFILE_NAME}
                </h1>
                <p
                    style={{
                        fontSize: "28px",
                        fontWeight: 400,
                        color: "#888",
                        margin: 0,
                        marginTop: "8px",
                    }}
                >
                    Frontend Engineer
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "80px",
                    left: "80px",
                    gap: "24px",
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        fontWeight: 400,
                    }}
                >
                    {domain}
                </span>
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "#333",
                    }}
                />
                <span
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        fontWeight: 400,
                    }}
                >
                    Pune, India
                </span>
            </div>

            {/* Decorative corner accent - Dot Grid */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "40px",
                    right: "40px",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                {[0, 1, 2, 3, 4].map((row) => (
                    <div key={row} style={{ display: "flex", gap: "12px" }}>
                        {[0, 1, 2, 3, 4].map((col) => (
                            <div
                                key={col}
                                style={{
                                    width: "3px",
                                    height: "3px",
                                    borderRadius: "1px",
                                    backgroundColor: "#222",
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>,
        { ...size },
    );
}
