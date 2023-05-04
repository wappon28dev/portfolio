import type { valueOf } from "./constants";

const localStorageKey = {
  isPreferredDark: "is_preferred_dark",
} as const;
type LocalStorageKey = valueOf<typeof localStorageKey>;

class LocalStorage<T> {
  constructor(private readonly key: LocalStorageKey) {}

  public get(): T | undefined {
    const data = localStorage.getItem(this.key);
    return data != null ? (JSON.parse(data) as T) : undefined;
  }

  public set(data: T): void {
    if (data === undefined) return;
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public clear(): void {
    localStorage.removeItem(this.key);
  }
}

export { LocalStorage, localStorageKey };
export type { LocalStorageKey };
