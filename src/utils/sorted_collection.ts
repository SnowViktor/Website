import { type CollectionKey, getCollection } from "astro:content";

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
