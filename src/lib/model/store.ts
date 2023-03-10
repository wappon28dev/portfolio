import { writable } from "svelte/store";

const isLoading = writable(true);
const isBusy = writable(false);
const isLandscape = writable(false);

export { isLoading, isBusy, isLandscape };
