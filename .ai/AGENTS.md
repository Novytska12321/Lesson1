# .ai/ — Agent Entry Point

This folder contains project instructions for AI assistants and editor-integrated agents.

This is a small one-page landing page created as a learning project. It presents a handcrafted Ukrainian embroidery theme with a short intro and section-based content such as About us, Our collection, and Testimonials. The site is meant for practicing HTML, CSS, and JavaScript rather than building a fully interactive production app.

## Purpose

- Provide a single source of truth for working conventions in this project.
- Help AI assistants understand the project structure, code style, and preferred workflows.
- Keep instructions close to the codebase so they are easy to update.

## Project Type

- Frontend learning project
- One-page landing page
- Built with Vite, Bootstrap, and SCSS

## Folder Structure
```
.ai/
├── AGENTS.md
└── architecture/
    └── frontend/
        ├── tech-stack.md
        ├── how-to.md
        └── rules/
            ├── styling.mdc
            └── html-structure.mdc
```





Odpowiadam na pytania:


# Zakres projektu

Tak, to będzie czysty statyczny landing-page (służy do nauki prawidłowego używania znaczników HTML, nauki CSS, Responsive Web Design, wykorzystania zewnętrznych narzędzi takich jak Bootstrap, czy FontAwesome).

Tak, to będzie jeden ekran i jeden plik HTML. Z funkcjonalności które wymieniłeś będzie jedynie: mobile menu i smooth scroll.


# Użycie Bootstrap

Opiszę tutaj na jakie podejście się zdecydowałem w projekcie landing-page, a Ciebie poproszę o "wyciągnięcie" z tego tylko tego co uznasz za istotne i proszę o propozycję opisu dla tech-stack.md oraz  styling.mdc . 

Po pierwsze, tak jak w projekcie PPM korzystamy z prefiksu "sp-" dla klas CSS, tak w projekcie landing-page używam konsekwentnie prefiksu "y-" we wszystkich swoich klasach CSS, m.in. po to aby odróżnić moje klasy od klas zewnętrznych bibliotek.

Nie nadpisuję styli Bootstrap.

Staram się wykorzystywać tak dużo z Bootstrap jak to tylko możliwe, czyli używam zarówno styli z "Layout" (np. Containers, Grid), "Content" (np. Reboot, Typography), "Forms", "Components" (np. Buttons, Navbar, Navs), "Helpers" jak i "Utilities" (np. Display, Flex).


# Organizacja plików SCSS

Głównym plikiem jest styles.scss , a pozostałe pliki są na tym samym poziomie. Kolejne pliki reprezentują kolejne elementy layout'u jak "header", "footer" czy "hero section", komponenty typu "buttons" jak i własny plik  konfiguracji (_variables.scss). Docelowo jednak chciałbym rozdzielić pliki na poszczególne katalogi wg. "The 7-1 pattern" (https://sass-guidelin.es/#the-7-1-pattern) chociaż nie wiem czy to nadal stosowany pattern. Jeżeli tak to stwórzmy opis tak jakby taka architektura była już stosowana w projekcie (utworzę wówczas katalogi /base, /components, /layout, /abstract z konfiguracją oraz /vendors importujący nieistniejące jeszcze pliki 1. "bootstrap.scss", który będzie importował odpowiednie pliki SCSS z Bootstrap oraz 2. font-awesome.scss który będzie wykorzystywał `@use "@fortawesome/fontawesome-free...` do zaimportowania odpowiednich plików z tej biblioteki).


# Łączenie własnych styli z Bootstrap

Importuję tylko te pliki SCSS z Bootstrap, które faktycznie chcę używać, aby wynikowy plik CSS był jak najmniejszy.

Mam stworzony własny plik /src/_variables.scss w którym nadpisuję i zmieniam domyślą konfigurację styli Bootstrap (np. `$body-bg`, `$font-family-base`, czy `$container-max-widths`), ale też tworzę tu własne zmienne (np. `$hero-font-size` lub `$order-form-height`). 

Gdyby nie ograniczenia, o których zaraz napiszę, gdybym chciał użyć klasy `btn-outline-primary` z Bootstrap, stworzyłbym własną klasę `y-btn-outline-primary`, a w odpowiednim pliku zaimplementowałbym style w sposób:
```scss
.y-btn-outline-primary {
    @apply btn-outline-primary;
    // dalej moje własne style, które nadpiszą bądź rozszerzą style dla .btn-outline-primary
}
```
Jednak Bootstrap nie wspiera `@use` i nie mogłem użyć `@use "buttons";` w swoim styles.scss (zamiast tego użyłem `@import "buttons";` dla plików SCSS z Bootstrap), a co za tym idzie nie mogłem używać `@apply` w stylach dla poszczególnych grup/plików styli. W konsekwencji w pliku HTML chcąc stylować np. przyciski stosuję podwójną konwencję używania styli, czyli używam klasy z Bootstrap, a gdy potrzebuję daną klasę rozszerzyć tworzę odpowiadającą jej własną klasę z prefiksem `y-` np. 
```html
<a class="btn y-btn btn-outline-primary y-btn-outline-primary">button</a>
```

Reasumując: NIE NADPISUJĘ styli Bootstrap, a w gdy potrzebuję to zrobić używam do tego "odpowiedników" z własnym.

Używam semantyki BEM, jednak uproszczonej, taką jaką stosuje Bootstrap, czyli NIE STOSUJĘ np. `.navbar__nav` czy `.button--outline` tylko `.navbar-nav` czy `.button-primary-outline`.


# Standard nazewnictwa klas CSS

Aby to wyjaśnić, może po prostu wkleję fragment kodu HTML wraz z klasami:
```html
  <section class="y-hero">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img class="y-hero-img" src="/desctop-img/girl2.jpg" alt="" />
        </div>
        <div class="col-6">
          <p class="y-hero-lead-text my-5">
            Reviving the traditional
            <span class="text-secondary">Ukrainian</span> artistry in every
            stitch.
          </p>
          <a class="btn y-btn y-btn-with-icon btn-outline-primary y-btn-outline-primary y-hero-btn" href="#">
            Order
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <!-- ... -->
```

# main.ts

Podobnie jak styles.scss dla styli, to będzie główny plik związany z logiką tworzoną w TypeScript i będzie jedynie importował pliki w których będę implementował logikę dla poszczególnych akcji np. otwieranie/zamykanie mobilnego menu. Plik ten nie będzie odpowiedzialny za bootstrap strony.


Stwórz teraz na bazie powyższych informacji wstępną wersję pliku tech-stack.md oraz styling.mdc . Chyba, że potrzebujesz więcej informacji. W takij sytuacji zadaj mi kolejne pytania.


PS 1
Czy będziemy tu też pisali o użyciu w projekcie Google Fonts (w HTML dołączam po prostu `<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet" />` a w _variables.scss mam `$font-family-base: "Manrope", sans-serif;`)

PS 2
Czy będziemy tu pisali o tym, że projekt zawiera konfigurację pipeline w github, czyli /.github/workflows/main.yml napisany w oparciu przykład z dokumentacji Vite: https://vite.dev/guide/static-deploy#github-pages
