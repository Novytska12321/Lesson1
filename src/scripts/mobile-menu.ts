export function initMobileMenu(): void {
  const menuBtn = document.querySelector<HTMLButtonElement>(".y-navbar-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuLinks = menu?.querySelectorAll<HTMLAnchorElement>(".y-mobile-menu-link");
  const closeBtn = menu?.querySelector<HTMLButtonElement>(".y-mobile-menu-close-btn");

  if (!menuBtn || !menu) {
    return;
  }

  const setMenuOpen = (isOpen: boolean): void => {
    menu.classList.toggle("is-open", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("y-mobile-menu-open", isOpen);
  };

  menuBtn.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("is-open"));
  });

  closeBtn?.addEventListener("click", () => {
    setMenuOpen(false);
  });

  menuLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setMenuOpen(false);
    }
  });
}
