import type { valueOf } from "./constants";

type PageManifest = {
  path: string;
  meta: {
    title: string | undefined;
    description: string | undefined;
    ogp: {
      img: string;
    };
  };
};

const HOME: PageManifest = {
  path: "/",
  meta: {
    title: undefined,
    description: undefined,
    ogp: {
      img: "/assets/ogt/home.png",
    },
  },
};

const pageManifests = {
  HOME,
} as const;

type PageManifests = valueOf<typeof pageManifests>;

export { pageManifests };
export type { PageManifest, PageManifests };
