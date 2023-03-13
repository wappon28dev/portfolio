// src/lib/server/newt.ts

import { createClient } from "newt-client-js";
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from "$env/static/private";

export interface Article {
  _id: string;
  title: string;
  slug: string;
  body: string;
}

export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const getArticleList = async () => {
  const response = await newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "body", "slug"],
    },
  });
  return response;
};

export const getArticle = async ({ contentId }: { contentId: string }) => {
  const article = await newtClient.getContent<Article>({
    appUid: "blog",
    modelUid: "article",
    contentId: contentId,
    query: {
      select: ["title", "body"],
    },
  });
  return article;
};
