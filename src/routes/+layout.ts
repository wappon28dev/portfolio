import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url: { pathname } }) => {
  {
    pathname;
  }
};

export const prerender = true;
