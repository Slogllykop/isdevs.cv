import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/constants";

export async function GET(request: NextRequest) {
    const authHeader = request.headers.get("authorization");

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const response = await fetch(`${SITE_URL}/blogs`, {
            cache: "no-store",
        });

        if (response.ok) {
            return Response.json({
                ok: true,
                revalidated: true,
                timestamp: new Date().toISOString(),
            });
        }

        return Response.json(
            {
                ok: false,
                error: `Blog fetch returned status ${response.status}`,
            },
            { status: 500 },
        );
    } catch (error) {
        return Response.json(
            {
                ok: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown error occurred",
            },
            { status: 500 },
        );
    }
}
