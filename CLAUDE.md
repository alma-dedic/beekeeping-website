# Pčelarstvo Dedić – statična web stranica

## O projektu
Statična web stranica (samo frontend) za Porodično pčelarstvo Dedić iz Pobuđa kod Bratunca.
Jezik stranice je bosanski (ijekavica, latinica). Sav tekst mora ostati na bosanskom.

## Polazna tačka
U folderu `referenca/` nalazi se fajl `pcelarstvo-dedic-referenca.html`. To je GOTOVA stranica
s kojom je vlasnica zadovoljna. Izgled, boje, fontovi, raspored i tekstovi moraju ostati ISTI.
Ne mijenjaj dizajn i ne izmišljaj novi sadržaj.

Problem referentnog fajla: sve je u jednom HTML-u, a slike su ugrađene kao base64 (fajl ima ~3.6 MB).

## Zadatak
Pretvori referentni fajl u uredan statični projekat:

```
index.html
css/style.css
js/main.js
slike/            (slike su već tu, vidi tabelu ispod)
```

1. Prebaci CSS iz `<style>` u `css/style.css`, a JavaScript iz `<script>` u `js/main.js`.
2. Svaku base64 sliku (`src="data:image/jpeg;base64,..."`) zamijeni putanjom do fajla u `slike/`.
   Slike prepoznaj po `alt` tekstu:

   | alt tekst u referenci | fajl |
   |---|---|
   | Pčele na satonošama u otvorenoj košnici | slike/pocetna-pcele-na-satonosama.jpg |
   | Pčelar Asim Dedić pregleda ram s pčelama / Asim Dedić u pčelarskom odijelu s ramom | slike/asim-dedic.jpg |
   | Ram s medom iznad zelene doline | slike/ram-iznad-doline.jpg |
   | Pčele na saću, u pozadini košnice | slike/pcele-na-sacu.jpg |
   | Ram s pčelama na pčelinjaku u Pobuđu | slike/ram-ispred-kosnica.jpg |
   | Košnice na prikolici, spremne za selidbu | slike/kosnice-na-prikolici.jpg |
   | Tegla livadskog meda | slike/livadski-med.jpg |
   | Tegle bagremovog meda | slike/bagremov-med.jpg |
   | Tegla meda sa saćem | slike/med-u-sacu.jpg |
   | Cvjetni polen | slike/polen.jpg |
   | Bočice propolis kapi | slike/propolis.jpg |
   | Tegle s borovim iglicama u medu | slike/borove-iglice-u-medu.jpg |
   | Tegle s koprivom u medu | slike/kopriva-u-medu.jpg |

   Ako neka slika iz reference nije u tabeli, izvuci je iz base64 u `slike/` s opisnim imenom.
   Slike dodaj s `loading="lazy"` (osim glavne slike na Početnoj) i s `width`/`height` atributima.
3. Ilustracije (inline SVG) za Matičnu mliječ, Imuno mix i Zeleni orah u medu ostaju kao SVG,
   dok vlasnica ne pošalje fotografije.
4. Zadrži navigaciju između stranica (Početna, O nama, Proizvodi, Pčelinjaci, Obuka i usluge, Kontakt)
   i kartice na stranici Proizvodi (Med, Pčelinji proizvodi, Med s dodacima) da rade isto kao u referenci.
5. Na stranici Kontakt, ispod liste kontakt podataka ili ispod obje sekcije, dodaj ugrađenu
   Google mapu (`<iframe>`) za lokaciju 44.214656, 19.139113, sa zaobljenim uglovima kao ostali okviri.
   Postojeći linkovi "Otvorite mapu" i "Upute za dolazak" ostaju.
6. Dodaj `favicon` (crni šestougao sa zlatnom kapi, isti kao logo u zaglavlju) kao SVG fajl.
7. Dodaj osnovne SEO meta tagove (description, Open Graph naslov, opis i slika).

## Kontakt podaci (ne mijenjati)
- Telefon i Viber: 065 886 093
- E-mail: pcelarstvo.d@gmail.com
- Adresa: Pobuđe bb, Bratunac
- YouTube: https://www.youtube.com/@AsimDedic
- Facebook: https://www.facebook.com/profile.php?id=100064362235460

## Provjera na kraju
- Otvori `index.html` u pregledniku i uporedi s referencom: izgled mora biti isti, i na računaru i na mobitelu.
- Provjeri da sve slike rade, da navigacija i kartice proizvoda rade, i da dugme "Naruči" popunjava formu.
- Napravi git commit s kratkim opisom promjena.

## Stvari koje će se kasnije mijenjati
- Kartice nagrada za 2021–2024 (Medena Tuzla) su privremene; vlasnica će javiti tačne godine.
- Fotografije za Matičnu mliječ, Imuno mix i Zeleni orah u medu stižu naknadno.
- Forma trenutno otvara e-mail program (mailto). Kasnije je možda povezati s Web3Forms ili Formspree.
