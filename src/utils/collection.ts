import {
  type CollectionEntry,
  type CollectionKey,
  getCollection,
} from "astro:content";

export async function sortCollection(
  collection: CollectionKey
): Promise<CollectionEntry<CollectionKey>[]> {
  return (await getCollection(collection)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
