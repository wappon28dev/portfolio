import { LocalStorage, localStorageKey } from "./localstorage";

export class ThemeProvider extends LocalStorage<boolean> {
  constructor() {
    super(localStorageKey.isPreferredDark);
  }

  private readonly isUserPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  public isDark = this.get() ?? this.isUserPrefersDark;

  public update(): void {
    let smuiLink = document.head.querySelector<HTMLLinkElement>("#smui");
    let colorLink = document.head.querySelector<HTMLLinkElement>("#color");
    if (smuiLink == null) {
      smuiLink = document.createElement("link");
      smuiLink.rel = "stylesheet";
      smuiLink.id = "theme";
    }
    if (colorLink == null) {
      colorLink = document.createElement("link");
      colorLink.rel = "stylesheet";
      colorLink.id = "color";
    }

    smuiLink.href = `/styles/smui${this.isDark ? "-dark" : ""}.css`;
    colorLink.href = `/styles/variables${this.isDark ? "-dark" : ""}.css`;
    document.head
      .querySelector<HTMLLinkElement>('link[href$="/styles/smui-dark.css"]')
      ?.insertAdjacentElement("afterend", smuiLink);
    document.head
      .querySelector<HTMLLinkElement>(
        'link[href$="/styles/variables-dark.css"]'
      )
      ?.insertAdjacentElement("afterend", colorLink);
  }
}
