import { type CollectionKey, getCollection } from "astro:content";

export function collectionKeyToPath(collectionKey: CollectionKey | string) {
    return collectionKey
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}

export async function sortedCollection(collectionKey: CollectionKey | CollectionKey[]) {
    return (
        await Promise.all(
            [collectionKey].flat().map((collection) => getCollection(collection)),
        )
    ).flat().sort(
        (a, b) =>
            new Date(b.data.pubDate).getTime() -
            new Date(a.data.pubDate).getTime(),
    );
}
