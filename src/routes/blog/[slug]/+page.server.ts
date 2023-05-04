import { waitMs } from "$lib/model/constants";
import { getArticle } from "$lib/server/newt";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  await waitMs(1000);
  const contentId = params.slug;
  return await getArticle({ contentId });
};

export const prerender = true;
