# Meta adatok

### Charset

- 1024
- utf-8

### Metaadat

- MPA – Multi Page Application: tobb lapbool allo weboldal
- Title: 50-60 karakter, keresesnel jelenik meg

### Property+Content

- SEO: Kereso Motor Optimalizalo
- Follow
  - Og: url
  - Og: type
  - Og: local
  - Og: site-map
    - Twitternek sajat tagek


# ARIA: Akadalymentesitett weboldalak

DOM tree – HTML felepitese

Render tree – megjelenes

Accessibility tree:

- Name - Neve
- Role - Szerep
- State – JS vezérli
- Value - Érték

Header, nav, main, article stb.

Ha van native szemantikus elem azt hasznaljuk ARIA helyett

Ne irjuk felul a native szemantikat

Minden interaktiv ARIA vezerlo legyen billenytuvel elerheto (TAB index)

Index:

- 1 – prio
- 0 – sima
- -1 – kimarad

Ne rejtsetek el fokuszalhato elemet

Minden interkativ elemnek elerheto neve legyen


## Role

```html
<div role="alert"> A jelszo nem megfelelo </div>

<div role="navigation"> </div>
<!-- Nincs ertelme -->

<div role="dialog" aria-modal="true" aria-labelledby="cim"> </div>
