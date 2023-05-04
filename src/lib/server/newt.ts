// src/lib/server/newt.ts

import { NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from "$env/static/private";
import { createClient } from "newt-client-js";

export type Article = {
  _id: string;
  meta: Meta;
  title: string;
  slug: string;
  body: string;
  coverImage: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: 600;
    height: 400;
  };
};

type Meta = {
  title: "text";
  description: "text";
  ogImage: {
    _id: "imageId";
    src: "imageUrl";
    fileType: "image/png";
    fileSize: 12345678;
    fileName: "image.png";
    width: 600;
    height: 400;
  };
};

export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export async function getArticleList(): Promise<Article[]> {
  const response = await newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "meta", "title", "body", "slug", "coverImage"],
    },
  });
  return response;
}

export async function getArticle({
  contentId,
}: {
  contentId: string;
}): Promise<Article> {
  const article = await newtClient.getContent<Article>({
    appUid: "blog",
    modelUid: "article",
    contentId,
    query: {
      select: ["title", "meta", "body", "coverImage"],
    },
  });
  return article;
}
