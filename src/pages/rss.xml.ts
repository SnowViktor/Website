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
      pubDate: article.data.pub_date,
      description: article.data.description,
      link: `/articles/${article.id}`,
    })),
  });
}
