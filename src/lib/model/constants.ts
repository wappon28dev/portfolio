import { goto } from "$app/navigation";
import { base } from "$app/paths";
import { page } from "$app/stores";
import { get } from "svelte/store";
import type { PageManifest } from "./manifests";

type valueOf<T> = T[keyof T];
type PickType<T, K extends keyof T> = T[K];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const runTransition = (to: PageManifest) => {
  const path = to.path;
  if (get(page).url.pathname === path) return;
  void goto(base + path);
};

function isLandscapeDetect(): boolean {
  return (
    !navigator.userAgent.match(/iPhone|Android.+Mobile/) &&
    window.innerWidth > 730
  );
}

export type { valueOf, PickType };
export { runTransition, wait, isLandscapeDetect };
