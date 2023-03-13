// src/lib/server/newt.ts

import { createClient } from "newt-client-js";
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from "$env/static/private";

export interface Article {
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
}

interface Meta {
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
      select: ["_id", "meta", "title", "body", "slug", "coverImage"],
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
      select: ["title", "meta", "body", "coverImage"],
    },
  });
  return article;
};
