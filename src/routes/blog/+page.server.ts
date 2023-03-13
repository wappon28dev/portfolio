import { getArticleList } from "$lib/server/newt";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getArticleList();
};

export const prerender = true;
