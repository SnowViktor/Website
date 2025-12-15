import {
  type CollectionEntry,
  type CollectionKey,
  getCollection,
} from "astro:content";

export async function sortCollection(
  collection: CollectionKey,
): Promise<CollectionEntry<CollectionKey>[]> {
  return (await getCollection(collection)).sort(
    (a, b) => b.data.pub_date.valueOf() - a.data.pub_date.valueOf(),
  );
}

export async function filterAndSortArticlesByCategory(
  category?: string | string[],
): Promise<CollectionEntry<"articles">[]> {
  const articles = await getCollection("articles");
  if (!category) {
    return articles.sort((a, b) => b.data.pub_date.valueOf() - a.data.pub_date.valueOf());
  }
  const tagsArr = Array.isArray(category) ? category : [category];

  return articles
    .filter((article) =>
      article.data.tags.some((tag) => tagsArr.includes(tag)),
    )
    .sort((a, b) => b.data.pub_date.valueOf() - a.data.pub_date.valueOf());
}

export async function getAdjacentArticles(currentId: string): Promise<{
  prev: CollectionEntry<"articles"> | undefined;
  next: CollectionEntry<"articles"> | undefined;
}> {
  const articles = await sortCollection("articles");
  const currentIndex = articles.findIndex(
    (article) => article.id === currentId,
  );

  if (currentIndex === -1) {
    return { prev: undefined, next: undefined };
  }

  const prevArticle = articles[currentIndex + 1];
  const nextArticle = articles[currentIndex - 1];

  return { prev: prevArticle, next: nextArticle };
}
