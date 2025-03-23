import type { CollectionKey } from "astro:content";

export function collectionKeyToPath(collectionKey: CollectionKey | string) {
    return collectionKey
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}
