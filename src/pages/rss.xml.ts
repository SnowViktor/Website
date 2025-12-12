import rss from "@astrojs/rss";
import { sortCollection } from "@utils/collection";
import { SITE_TITLE, SITE_DESCRIPTION } from "src/consts";

export async function GET(context: { site: any }) {
  const articles = await sortCollection("articles");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    trailingSlash: false,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.published_at,
      description: article.data.description,
      link: `/articles/${article.id}/`, // Ensure trailing slash consistency if needed, or stick to flat
    })),
  });
}
