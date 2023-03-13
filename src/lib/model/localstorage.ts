import type { valueOf } from "./constants";

const localStorageKey = {
  isPreferredDark: "is_preferred_dark",
} as const;
type LocalStorageKey = valueOf<typeof localStorageKey>;

class LocalStorage<T> {
  constructor(private key: LocalStorageKey) {}

  public get(): T | undefined {
    const data = localStorage.getItem(this.key);
    return data ? (JSON.parse(data) as T) : undefined;
  }

  public set(data: T) {
    if (data === undefined) return;
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public clear() {
    localStorage.removeItem(this.key);
  }
}

export { LocalStorage, localStorageKey };
export type { LocalStorageKey };
