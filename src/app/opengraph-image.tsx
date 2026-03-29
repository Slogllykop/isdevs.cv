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
                padding: "5rem",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <span
                    style={{
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "#666",
                        letterSpacing: "0.25rem",
                        textTransform: "uppercase",
                    }}
                >
                    Portfolio
                </span>
                <h1
                    style={{
                        fontSize: "4.5rem",
                        fontWeight: 700,
                        color: "#fafafa",
                        lineHeight: 1.1,
                        margin: 0,
                        letterSpacing: "-0.125rem",
                    }}
                >
                    {PROFILE_NAME}
                </h1>
                <p
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: 400,
                        color: "#888",
                        margin: 0,
                        marginTop: "0.5rem",
                    }}
                >
                    Frontend Engineer
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "5rem",
                    left: "5rem",
                    gap: "1.5rem",
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        fontSize: "1.125rem",
                        color: "#555",
                        fontWeight: 400,
                    }}
                >
                    {domain}
                </span>
                <div
                    style={{
                        width: "0.25rem",
                        height: "0.25rem",
                        borderRadius: "50%",
                        backgroundColor: "#333",
                    }}
                />
                <span
                    style={{
                        fontSize: "1.125rem",
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
                    top: "2.5rem",
                    right: "2.5rem",
                    flexDirection: "column",
                    gap: "0.75rem",
                }}
            >
                {[0, 1, 2, 3, 4].map((row) => (
                    <div key={row} style={{ display: "flex", gap: "0.75rem" }}>
                        {[0, 1, 2, 3, 4].map((col) => (
                            <div
                                key={col}
                                style={{
                                    width: "0.1875rem",
                                    height: "0.1875rem",
                                    borderRadius: "0.0625rem",
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
