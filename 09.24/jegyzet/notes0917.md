Link JS
head-be
weboldal a body utan toltse be: defer

``` html
<script src="js/script.js" defer></script>
```

``` html
<a href="#main" class="skip-link"> Ugras a tartalomra</a>
```


header.header>div.container.header-bar>a.logo+nav>ul.nav-list>(li>a)*2
">": leszarmazot
"+": testver
"()*2": szorozza ami a zarojelben van
".": class

minen aria-lebelnek kell nev

``` html
    <header class="header">
        <div class="container header-bar">
            <a href="" class="logo"></a>
            <nav>
                <ul class="nav-list">
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </nav>
        </div>
    </header>
```

main.container#main

``` html
<main class="container" id="main"></main>
```

hero a weboldalon tartsa a felhasznalot

ha egy cimsor (h) kap egy id-t (#) aria-labelled by

role kell a divnek (group)
    mert se szerepe
    se jelentese
    ha van szerepe el kell nevezeni
        aria-label

assertive: alerteknel
aria-live="polite": amikor a js vegzett utanna olvassa be mi van


# CSS

:root{} - pszeudo class
egy helyen atirod es csak itt kell modositani
"*" - MINDEN

| Size    | Content Box | Border Box |
| ------- | ----------- | ---------- |
| padding | 2           | x          |
| margin  | 2           | x          |
| border  | 1           | x          |
| Width   | 200+4+4+2   | 200        |


font-size: clamp(1.8rem, 1.2rem + 2.5vw, 3rem);
min: 1.8 rem
skalazodik: 1.2rem + 2,5%vw-kent skalazza
max: 3rem