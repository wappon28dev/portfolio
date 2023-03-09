import { goto } from "$app/navigation";
import { base } from "$app/paths";
import { get } from "svelte/store";
import { currentPath } from "./store";

type valueOf<T> = T[keyof T];
type PickType<T, K extends keyof T> = T[K];

const PathId = {
  HOME: "/",
} as const;

type PathId = valueOf<typeof PathId>;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const runTransition = (path: PathId) => {
  if (get(currentPath) === path) return;
  void goto(base + path);
};

function isLandscapeDetect(): boolean {
  return (
    !navigator.userAgent.match(/iPhone|Android.+Mobile/) &&
    window.innerWidth > 730
  );
}

export type { valueOf, PickType };
export { PathId, runTransition, wait, isLandscapeDetect };
