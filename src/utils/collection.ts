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

export async function filterAndSortArticlesByCategories(
  categories: string | string[]
): Promise<CollectionEntry<"articles">[]> {
  const articles = await getCollection("articles");
  const categoryArr = Array.isArray(categories) ? categories : [categories];

  return articles
    .filter((article) =>
      article.data.categories.some((category) => categoryArr.includes(category))
    )
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAdjacentArticles(currentId: string): Promise<{
  prev: CollectionEntry<"articles"> | undefined;
  next: CollectionEntry<"articles"> | undefined;
}> {
  const articles = await sortCollection("articles");
  const currentIndex = articles.findIndex(
    (article) => article.id === currentId
  );

  if (currentIndex === -1) {
    return { prev: undefined, next: undefined };
  }

  const prevArticle = articles[currentIndex + 1];
  const nextArticle = articles[currentIndex - 1];

  return { prev: prevArticle, next: nextArticle };
}
