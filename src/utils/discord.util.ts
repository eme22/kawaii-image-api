import axios from "axios";

export interface RefreshUrlsResponse {
    refreshed_urls: Array<{
        original: string;
        refreshed: string;
    }>;
}

/**
 * Refreshes Discord CDN URLs using the Discord API.
 * This is necessary because Discord CDN links now expire after 24 hours.
 */
export async function refreshDiscordUrl(url: string[]): Promise<string[]> {
    const token = process.env.DISCORD_TOKEN;
    if (!token) {
        console.warn("DISCORD_TOKEN not found, skipping URL refresh.");
        return url;
    }

    // Handle bot token prefix if missing
    const authHeader = token.startsWith("Bot ") ? token : `Bot ${token}`;

    try {
        const { data } = await axios.post<RefreshUrlsResponse>(
            "https://discord.com/api/v9/attachments/refresh-urls",
            {
                attachment_urls: url
            },
            {
                headers: {
                    Authorization: authHeader,
                    "Content-Type": "application/json"
                }
            }
        );

        return data.refreshed_urls.map(item => item.refreshed);
    } catch (error: any) {
        console.error("Failed to refresh Discord URLs:", error.response?.data || error.message);
        return url; // Fallback to original URLs if refresh fails
    }
}
