export function load({ url: { pathname } }): { pathname: string } {
  return { pathname };
}

export const prerender = true;
