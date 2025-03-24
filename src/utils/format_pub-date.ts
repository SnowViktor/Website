export function formatPubDate(pubDate: Date, spacing: boolean) {
    return pubDate
        .toISOString()
        .substring(0, 10)
        .replace(/-/g, `${spacing ? " / " : "/"}`);
}
