/* ============================================================
   Themenbereich: Finanzierung & Investment
   ============================================================ */

LERN.registerArea({
  id: 'finanzierung',
  title: 'Finanzierung & Investment',
  icon: '💰',
  description: 'Baufinanzierung verstehen, Renditen professionell rechnen, Portfolio und Steuern im Griff – plus indirekte Anlagen von REITs bis Crowdinvesting.',

  subtopics: [
    {
      id: 'baufinanzierung',
      title: 'Baufinanzierung: Annuität, Zins & Tilgung',
      teaser: 'Annuitätendarlehen, Zinsbindung, Eigenkapital, KfW, Vorfälligkeit',
      lesson: `
        <p>Fast jeder deiner Kunden finanziert. Wer als Makler Finanzierung versteht, erkennt früh, welcher Interessent wirklich kaufen kann – und berät auf Augenhöhe mit Bankberatern.</p>

        <h3>Das Annuitätendarlehen – der Standard</h3>
        <div class="box box-formula">
          Jahresrate (Annuität) = Darlehenssumme × (Sollzins % + anfängliche Tilgung %)
        </div>
        <p>Die Rate bleibt während der Zinsbindung <strong>konstant</strong>. Der Trick: Mit jeder Rate sinkt die Restschuld → der <strong>Zinsanteil sinkt</strong>, der <strong>Tilgungsanteil steigt</strong> („Tilgungsturbo" zum Ende hin).</p>
        <div class="box box-example">
          <span class="box-title">💡 Beispiel</span>
          400.000 € Darlehen, 3,5 % Sollzins, 2 % anfängliche Tilgung:<br>
          Annuität = 400.000 × 5,5 % = <strong>22.000 €/Jahr</strong> (1.833 €/Monat).<br>
          Jahr 1: Zinsen 14.000 €, Tilgung 8.000 € → Restschuld Ende Jahr 1 ≈ 392.000 €.<br>
          Jahr 2: Zinsen nur noch ~13.720 €, Tilgung schon ~8.280 € – bei gleicher Rate.
        </div>

        <h3>Die wichtigsten Stellschrauben</h3>
        <ul>
          <li><strong>Sollzinsbindung:</strong> 5–30 Jahre. Lange Bindung = Planungssicherheit, meist etwas höherer Zins. <strong>Sonderkündigungsrecht:</strong> Nach 10 Jahren ab Vollauszahlung kann der Kunde immer mit 6 Monaten Frist kündigen (§ 489 BGB) – auch bei 20-jähriger Bindung!</li>
          <li><strong>Anfängliche Tilgung:</strong> mindestens 2 %, besser 2–3 %. Bei nur 1 % läuft ein Darlehen über 50 Jahre!</li>
          <li><strong>Sondertilgungen</strong> (üblich 5 % p. a. kostenfrei) und <strong>Tilgungssatzwechsel</strong> einbauen – Flexibilität kostet fast nichts.</li>
          <li><strong>Restschuld & Anschlussfinanzierung:</strong> Nach Ablauf der Bindung wird zum dann gültigen Zins verlängert (Prolongation, Umschuldung oder vorab per <strong>Forward-Darlehen</strong> sichern). Zinsänderungsrisiko!</li>
          <li><strong>Vorfälligkeitsentschädigung:</strong> Wer während der Bindung vorzeitig zurückzahlt (z. B. Verkauf), zahlt der Bank den Zinsschaden – außer nach 10 Jahren (§ 489) oder bei berechtigtem Interesse mit VFE.</li>
          <li><strong>Bereitstellungszinsen:</strong> auf noch nicht abgerufene Darlehensteile (relevant bei Neubau).</li>
        </ul>

        <h3>Eigenkapital & Budgetregeln</h3>
        <ul>
          <li>Faustregel: <strong>Kaufnebenkosten (9–12 %) + 10–20 % des Kaufpreises</strong> aus Eigenkapital. 100 %- oder 110 %-Finanzierungen gibt es nur bei Top-Bonität und mit Zinsaufschlag.</li>
          <li>Rate: max. <strong>35–40 % des Nettohaushaltseinkommens</strong> für Wohnen inkl. Nebenkosten – konservativ gerechnet mit Puffer für Zinsanstieg und Instandhaltung.</li>
          <li>Bonitätsprüfung der Bank: Einkommen, SCHUFA, Haushaltsrechnung, Objektwert (Beleihungswert!).</li>
        </ul>

        <h3>Förderung kennen = Beratungsvorsprung</h3>
        <ul>
          <li><strong>KfW-Programme:</strong> zinsgünstige Darlehen u. a. für klimafreundlichen Neubau, energetische Sanierung (mit Tilgungszuschüssen), Wohneigentum für Familien, Genossenschaftsanteile. Programme wechseln – Grundprinzip: <strong>Antrag vor Vorhabensbeginn</strong> über die Hausbank.</li>
          <li><strong>BAFA/BEG:</strong> Zuschüsse für Einzelmaßnahmen (Heizungstausch!).</li>
          <li><strong>Landesförderbanken</strong> und kommunale Programme, Wohn-Riester.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Als Makler darfst du keine Finanzierungsberatung im rechtlichen Sinn erbringen (dafür braucht es § 34i GewO), aber du musst die Mechanik verstehen und solltest 1–2 gute Finanzierungspartner im Netzwerk haben. Ein Käufer mit geprüfter Finanzierung ist Gold wert – für dich und den Verkäufer.
        </div>
      `,
    },
    {
      id: 'rendite',
      title: 'Renditeanalyse & Kennzahlen',
      teaser: 'Brutto-/Nettomietrendite, Cashflow, Eigenkapitalrendite, Leverage-Effekt',
      lesson: `
        <p>„Gute Kapitalanlage!" steht in jedem zweiten Exposé. Profis rechnen nach – mit den richtigen Kennzahlen in der richtigen Reihenfolge.</p>

        <h3>Die Kennzahlen-Pyramide</h3>
        <div class="box box-formula">
          Bruttomietrendite = Jahresnettokaltmiete ÷ Kaufpreis × 100
        </div>
        <p>Schneller Erst-Check (Kehrwert des Kaufpreisfaktors), aber grob: Nebenkosten und Bewirtschaftung fehlen.</p>
        <div class="box box-formula">
          Nettomietrendite = (Jahresmiete − nicht umlegbare Bewirtschaftungskosten) ÷ (Kaufpreis + Kaufnebenkosten) × 100
        </div>
        <p>Die ehrlichere Zahl: Verwaltung, Instandhaltungsrücklage und Mietausfallwagnis abziehen, Nebenkosten (9–12 %) in den Einsatz einrechnen. Typisch liegt sie <strong>0,5–1,5 Prozentpunkte unter</strong> der Bruttorendite.</p>

        <h3>Cashflow – die Liquiditätssicht</h3>
        <div class="box box-example">
          <span class="box-title">💡 Beispiel Monats-Cashflow</span>
          Kaltmiete 950 € − nicht umlegbare Kosten 150 € − Kreditrate 780 € = <strong>+20 €/Monat</strong>.<br>
          Der Cashflow zeigt, ob das Objekt sich selbst trägt. Negativer Cashflow heißt: Du „zahlst drauf" und wettest auf Wertsteigerung und Tilgungsaufbau.
        </div>

        <h3>Eigenkapitalrendite & Leverage-Effekt</h3>
        <div class="box box-formula">
          EK-Rendite = Jahresüberschuss nach Zinsen ÷ eingesetztes Eigenkapital × 100
        </div>
        <p>Der <strong>Leverage-Effekt</strong> (Hebeleffekt): Liegt die Gesamtkapitalrendite des Objekts <strong>über</strong> dem Fremdkapitalzins, steigert Fremdkapital die EK-Rendite.</p>
        <div class="box box-example">
          <span class="box-title">💡 Leverage durchgerechnet</span>
          Objekt 300.000 € (inkl. NK), Jahresreinertrag 12.000 € → GK-Rendite 4 %.<br>
          <strong>Ohne Kredit:</strong> EK-Rendite = 4 %.<br>
          <strong>Mit 240.000 € Kredit zu 3 %</strong> (Zins 7.200 €): Überschuss 4.800 € auf 60.000 € EK = <strong>8 % EK-Rendite</strong>.<br>
          ⚠️ Der Hebel wirkt in beide Richtungen: Steigt der Zins über die Objektrendite oder fällt Miete aus, hebelt er Verluste!
        </div>

        <h3>Weitere Profi-Kennzahlen</h3>
        <ul>
          <li><strong>Kaufpreisfaktor</strong> (= Kaufpreis ÷ Jahresmiete): Marktvergleichszahl, regional sehr unterschiedlich (15-fach ländlich bis 30-fach in Metropolen).</li>
          <li><strong>Mietrendite auf Ist vs. Potenzial:</strong> Bei Underrent beide rechnen – bezahlt wird die Gegenwart, gekauft die Zukunft.</li>
          <li><strong>Objekt-/Standortqualität schlägt Excel:</strong> Eine hohe Rendite in sterbender Lage ist keine Rendite, sondern eine Risikoprämie. Leerstandsquote, Bevölkerungsentwicklung, Arbeitsmarkt prüfen.</li>
          <li><strong>Total Return:</strong> Cashflow-Rendite + Tilgungsaufbau + Wertänderung – die vollständige Sicht über die Haltedauer.</li>
        </ul>

        <div class="box box-warn">
          <span class="box-title">⚠️ Die üblichen Rendite-Tricks in Exposés</span>
          Bruttorendite als „Rendite" verkauft, Nebenkosten ignoriert, Garagenmiete doppelt gezählt, „erzielbare" statt tatsächlicher Miete angesetzt, Instandhaltungsstau verschwiegen. Wer als Makler selbst sauber rechnet, gewinnt die Anleger-Kundschaft dauerhaft.
        </div>
      `,
    },
    {
      id: 'investment',
      title: 'Portfolioaufbau & Steuern',
      teaser: 'AfA, Spekulationsfrist, 3-Objekt-Grenze, Strategien vom Buy & Hold bis Fix & Flip',
      lesson: `
        <p>Immobilienvermögen entsteht selten durch einen Deal, sondern durch <strong>System</strong>: kaufen, optimieren, halten, refinanzieren – und die Steuerregeln für sich arbeiten lassen.</p>

        <h3>Die Steuer-Basics für Vermieter (Privatvermögen)</h3>
        <ul>
          <li>Mieteinnahmen sind Einkünfte aus <strong>Vermietung & Verpachtung</strong> (§ 21 EStG); abziehbar sind Werbungskosten: Schuldzinsen, Verwaltung, Instandhaltung, Fahrten, <strong>AfA</strong>.</li>
          <li><strong>AfA (Absetzung für Abnutzung)</strong> – nur auf den <strong>Gebäudeanteil</strong>, nie auf den Boden:
            <div class="table-wrap"><table>
              <tr><th>Gebäude</th><th>AfA-Satz (linear)</th></tr>
              <tr><td>Fertigstellung ab 2023</td><td><strong>3 %</strong></td></tr>
              <tr><td>Baujahr 1925–2022</td><td><strong>2 %</strong></td></tr>
              <tr><td>Baujahr vor 1925</td><td><strong>2,5 %</strong></td></tr>
            </table></div>
            Zusätzlich zeitweise: degressive AfA 5 % für neuen Wohnraum (Baubeginn Okt. 2023–Sep. 2029) und Sonder-AfA § 7b. Denkmal-AfA siehe Projektentwicklung.</li>
          <li><strong>Anschaffungsnahe Herstellungskosten:</strong> Renovierungen über <strong>15 % der Gebäude-Anschaffungskosten binnen 3 Jahren</strong> nach Kauf werden zu Herstellungskosten – nicht sofort absetzbar, sondern nur über die AfA! Ein teurer Klassiker-Fehler.</li>
        </ul>

        <h3>Verkauf: Spekulationsfrist & gewerblicher Grundstückshandel</h3>
        <ul>
          <li><strong>Spekulationsfrist (§ 23 EStG): 10 Jahre.</strong> Verkauf danach = Gewinn <strong>steuerfrei</strong> (Privatvermögen). Vorher: Gewinn mit persönlichem Steuersatz zu versteuern.</li>
          <li><strong>Ausnahme Eigennutzung:</strong> steuerfrei, wenn im Verkaufsjahr und den beiden Vorjahren selbst bewohnt (auch angebrochene Jahre zählen).</li>
          <li><strong>3-Objekt-Grenze:</strong> Wer <strong>mehr als 3 Objekte in 5 Jahren</strong> kauft und wieder verkauft, gilt als <strong>gewerblicher Grundstückshändler</strong> – Folgen: Gewerbesteuer, keine steuerfreien Veräußerungen, Buchführungspflichten. Für „Fix & Flip"-Strategien zentral!</li>
        </ul>

        <h3>Strategien im Vergleich</h3>
        <div class="table-wrap"><table>
          <tr><th>Strategie</th><th>Prinzip</th><th>Risikoprofil</th></tr>
          <tr><td><strong>Buy & Hold</strong></td><td>Kaufen, vermieten, langfristig halten; Tilgung + Mietsteigerung bauen Vermögen</td><td>Moderat; lebt von Lage & Management</td></tr>
          <tr><td><strong>Value-Add</strong></td><td>Objekte mit Problemen (Leerstand, Sanierungsstau, Underrent) kaufen, aufwerten, neu bewerten/refinanzieren</td><td>Höher; braucht Können & Kapitalpuffer</td></tr>
          <tr><td><strong>Fix & Flip</strong></td><td>Kaufen, sanieren, schnell verkaufen</td><td>Hoch; Steuerfallen (3-Objekt-Grenze!), Marktzyklus-Risiko</td></tr>
          <tr><td><strong>Projektbeteiligung</strong></td><td>Kapital in Entwicklungen investieren</td><td>Hoch; unternehmerisches Risiko</td></tr>
        </table></div>

        <h3>Portfolio-Prinzipien der Profis</h3>
        <ul>
          <li><strong>Liquiditätsreserve</strong> je Objekt (3–6 Monatsmieten) – Mietausfall und Reparaturen kommen garantiert.</li>
          <li><strong>Streuung:</strong> nach Lagen, Mietertypen, ggf. Nutzungsarten – Klumpenrisiken vermeiden.</li>
          <li><strong>Refinanzierungs-Zyklus:</strong> Getilgte/aufgewertete Objekte beleihen, Eigenkapital für das nächste Objekt freisetzen – kontrolliert, nicht bis zum Anschlag.</li>
          <li><strong>Exit immer mitdenken:</strong> Drittverwendungsfähigkeit, Teilbarkeit (Aufteilung in ETW?), Käuferzielgruppe.</li>
          <li>Ab gewisser Größe: <strong>Rechtsform prüfen</strong> (z. B. vermögensverwaltende GmbH) – aber nur mit Steuerberater, nie nach YouTube.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Für dich als Makler sind Anleger die wertvollste Kundengruppe: Sie kaufen wiederholt, entscheiden anhand von Zahlen und empfehlen dich weiter, wenn deine Rechnungen stimmen. Baue dir einen Anleger-Verteiler auf – und liefere zu jedem Angebot ein sauberes Zahlenblatt (Miete, Faktor, Rendite, Hausgeld, Rücklage, CapEx).
        </div>
      `,
    },
    {
      id: 'indirekt',
      title: 'Indirekte Anlagen: REITs, Fonds, Crowdinvesting',
      teaser: 'Offene & geschlossene Fonds, G-REITs, Nachrangdarlehen – Chancen und Fallstricke',
      lesson: `
        <p>Nicht jeder will (oder kann) direkt Wohnungen kaufen. Indirekte Immobilienanlagen machen den Markt mit kleinen Beträgen zugänglich – mit sehr unterschiedlichen Risikoprofilen.</p>

        <h3>Offene Immobilienfonds</h3>
        <ul>
          <li>Sondervermögen nach <strong>KAGB</strong>: Viele Anleger, breites Portfolio (oft Büro, Handel, Hotel, Wohnen), täglicher Anteilserwerb.</li>
          <li>Seit 2013 gilt für neue Anleger: <strong>Mindesthaltefrist 24 Monate</strong> + <strong>Kündigungsfrist 12 Monate</strong> – Lehre aus der Fondskrise 2008, als Fonds „eingefroren" wurden.</li>
          <li>Rendite historisch moderat (2–4 %), Risiken: Bewertungskorrekturen, Immobilienzyklen, Mittelabflüsse.</li>
        </ul>

        <h3>Geschlossene Fonds / Alternative Investmentfonds (AIF)</h3>
        <ul>
          <li>Beteiligung an <strong>konkreten Objekten/Projekten</strong> (meist KG-Anteil): unternehmerische Beteiligung mit Chancen UND Verlustrisiko bis zum Totalverlust.</li>
          <li><strong>Illiquide:</strong> Laufzeiten 10+ Jahre, Zweitmarkt schwach; hohe Weichkosten (Vertrieb, Konzeption) beachten.</li>
          <li>Reguliert über das KAGB (Publikums-AIF), aber: Regulierung ≠ Sicherheit.</li>
        </ul>

        <h3>REITs (Real Estate Investment Trusts)</h3>
        <ul>
          <li><strong>Börsennotierte</strong> Immobilien-AGs mit Sonderstatus (in Deutschland: G-REIT nach REIT-Gesetz).</li>
          <li>Kernregeln G-REIT: mind. <strong>75 %</strong> des Vermögens in Immobilien, mind. <strong>90 %</strong> des Gewinns ausschütten, dafür <strong>steuerbefreit auf Gesellschaftsebene</strong> (Besteuerung beim Anleger), Streubesitzquoten; <strong>deutsche Bestands-Wohnimmobilien</strong> (vor 2007 gebaut) sind ausgeschlossen.</li>
          <li>Vorteile: liquide (täglich handelbar), transparent, Dividenden. Nachteil: schwankt mit dem Aktienmarkt – kurzfristig mehr Aktie als Immobilie.</li>
        </ul>

        <h3>Immobilien-Crowdinvesting</h3>
        <ul>
          <li>Anleger geben Projektentwicklern über Plattformen meist <strong>Nachrangdarlehen</strong>: feste Verzinsung (oft 5–8 %), kurze Laufzeiten (1–4 Jahre).</li>
          <li><strong>Nachrang heißt:</strong> Bei Insolvenz werden erst Bank und alle anderen Gläubiger bedient – Crowd-Anleger stehen fast ganz hinten. <strong>Totalverlustrisiko</strong>, keine Einlagensicherung, keine Mitsprache.</li>
          <li>Die hohen Zinsen sind kein Geschenk, sondern der Preis des Mezzanine-Risikos: Banken finanzieren oft nur 70–80 % – die Crowd füllt die riskante Lücke.</li>
        </ul>

        <h3>Direkt vs. indirekt – die Beratungslogik</h3>
        <div class="table-wrap"><table>
          <tr><th>Kriterium</th><th>Direktkauf</th><th>Offener Fonds</th><th>REIT</th><th>Crowd</th></tr>
          <tr><td>Mindestkapital</td><td>hoch (EK + NK)</td><td>ab ~50 €</td><td>ab 1 Aktie</td><td>ab ~100–500 €</td></tr>
          <tr><td>Liquidität</td><td>niedrig</td><td>eingeschränkt (24/12)</td><td>hoch</td><td>keine (Laufzeit)</td></tr>
          <tr><td>Kontrolle</td><td>voll</td><td>keine</td><td>keine</td><td>keine</td></tr>
          <tr><td>Hebel durch Kredit</td><td>ja (Leverage)</td><td>nein</td><td>indirekt</td><td>nein</td></tr>
          <tr><td>Aufwand</td><td>hoch</td><td>minimal</td><td>minimal</td><td>minimal</td></tr>
        </table></div>

        <div class="box box-warn">
          <span class="box-title">⚠️ Kompetenz-Grenze beachten</span>
          Anlageberatung zu Fonds/Wertpapieren ist erlaubnispflichtig (§ 34f GewO / KWG) – als Immobilienmakler <strong>informierst</strong> du über Marktmechanik, du berätst nicht zu Finanzprodukten. Kenne die Instrumente trotzdem: Deine Anleger-Kunden vergleichen den Direktkauf genau damit.
        </div>
      `,
    },
  ],

  quiz: [
    // baufinanzierung
    { sub: 'baufinanzierung', q: 'Wie berechnet sich die Jahresrate eines Annuitätendarlehens?',
      options: ['Darlehenssumme × (Sollzins + anfängliche Tilgung)', 'Darlehenssumme ÷ Laufzeit', 'Kaufpreis × Zinssatz', 'Restschuld × Tilgung'], correct: 0,
      explain: 'Beispiel: 300.000 € × (3,5 % + 2 %) = 16.500 €/Jahr. Die Rate bleibt konstant, die Zusammensetzung verschiebt sich von Zins zu Tilgung.' },
    { sub: 'baufinanzierung', q: 'Was passiert im Zeitverlauf mit Zins- und Tilgungsanteil der konstanten Annuität?',
      options: ['Zinsanteil sinkt, Tilgungsanteil steigt', 'Beide bleiben konstant', 'Zinsanteil steigt', 'Die Rate sinkt jedes Jahr'], correct: 0,
      explain: 'Mit sinkender Restschuld fallen weniger Zinsen an – der frei werdende Teil der Rate tilgt zusätzlich. Deshalb beschleunigt sich die Entschuldung.' },
    { sub: 'baufinanzierung', q: 'Welches Sonderkündigungsrecht hat jeder Darlehensnehmer (§ 489 BGB)?',
      options: ['Nach 10 Jahren ab Vollauszahlung mit 6 Monaten Frist – ohne Vorfälligkeitsentschädigung', 'Jederzeit kostenlos', 'Nach 5 Jahren gegen Gebühr', 'Gar keins'], correct: 0,
      explain: 'Auch bei 15- oder 20-jähriger Zinsbindung: Nach 10 Jahren kann kostenfrei gekündigt werden – wichtig für die Beratung langer Zinsbindungen.' },
    { sub: 'baufinanzierung', q: 'Was ist eine Vorfälligkeitsentschädigung?',
      options: ['Der Ersatz des Zinsschadens der Bank bei vorzeitiger Darlehensrückzahlung', 'Eine Strafe für verspätete Raten', 'Die Gebühr für die Grundschuld', 'Ein Bonus für schnelle Tilgung'], correct: 0,
      explain: 'Relevant z. B. beim Verkauf während der Zinsbindung. Ausnahmen: nach 10 Jahren (§ 489 BGB) oder Ablauf der Bindung.' },
    { sub: 'baufinanzierung', q: 'Wie viel Eigenkapital gilt als solide Faustregel?',
      options: ['Kaufnebenkosten + 10–20 % des Kaufpreises', '0 € – Vollfinanzierung ist Standard', '50 % des Kaufpreises', 'Nur die Notarkosten'], correct: 0,
      explain: 'Die Nebenkosten (9–12 %) sind „verlorenes" Geld ohne Gegenwert für die Bank – sie sollten immer aus EK kommen. Mehr EK = besserer Beleihungsauslauf = besserer Zins.' },
    { sub: 'baufinanzierung', q: 'Was ist ein Forward-Darlehen?',
      options: ['Eine Anschlussfinanzierung, deren Zins bis zu mehrere Jahre im Voraus gesichert wird', 'Ein Kredit ohne Zinsen', 'Eine staatliche Förderung', 'Ein Darlehen nur für Neubauten'], correct: 0,
      explain: 'Gegen einen kleinen Zinsaufschlag sichert sich der Kunde heute den Zins für die Anschlussfinanzierung in 1–5 Jahren – sinnvoll bei erwartet steigenden Zinsen.' },
    { sub: 'baufinanzierung', q: 'Welche Grundregel gilt für KfW-Förderungen?',
      options: ['Antrag grundsätzlich VOR Vorhabensbeginn, meist über die Hausbank', 'Antrag nach Fertigstellung', 'Nur für Unternehmen', 'Förderung erfolgt automatisch'], correct: 0,
      explain: 'Wer erst baut/kauft und dann beantragt, geht leer aus. Programme ändern sich laufend – Prinzipien bleiben: Antrag vorher, Durchleitung über die Bank, oft mit Tilgungszuschüssen.' },
    { sub: 'baufinanzierung', q: 'Warum ist 1 % anfängliche Tilgung problematisch?',
      options: ['Die Entschuldung dauert extrem lange (Größenordnung 50+ Jahre)', 'Die Rate wird zu hoch', 'Banken verbieten es', 'Die Grundschuld verfällt'], correct: 0,
      explain: 'Bei niedriger Tilgung bleibt die Restschuld nach 10 Jahren fast unverändert – volles Zinsänderungsrisiko. Empfehlung: 2–3 % initial, plus Sondertilgungsoption.' },
    { sub: 'baufinanzierung', q: 'Welcher Anteil des Nettoeinkommens sollte maximal für die Wohnkosten (Rate + Nebenkosten) eingeplant werden?',
      options: ['Etwa 35–40 %', '70 %', '10 %', 'Es gibt keine Grenze'], correct: 0,
      explain: 'Konservative Haushaltsrechnung mit Puffer für Zinsanstieg, Instandhaltung und Lebensrisiken – Banken rechnen ähnlich (Kapitaldienstfähigkeit).' },

    // rendite
    { sub: 'rendite', q: 'Wie berechnet sich die Bruttomietrendite?',
      options: ['Jahresnettokaltmiete ÷ Kaufpreis × 100', 'Kaufpreis ÷ Jahresmiete', 'Monatsmiete × 12 ÷ Eigenkapital', 'Miete ÷ Wohnfläche'], correct: 0,
      explain: 'Der schnelle Erst-Check – Kehrwert des Kaufpreisfaktors. Beispiel: 12.000 € Miete ÷ 300.000 € = 4 %.' },
    { sub: 'rendite', q: 'Was unterscheidet die Nettomietrendite von der Bruttomietrendite?',
      options: ['Nicht umlegbare Kosten werden abgezogen und Kaufnebenkosten in den Einsatz eingerechnet', 'Nichts', 'Sie ist immer höher', 'Sie ignoriert die Miete'], correct: 0,
      explain: 'Netto = (Miete − Bewirtschaftung) ÷ (Kaufpreis + Nebenkosten). Realistisch liegt sie 0,5–1,5 Punkte unter brutto – die ehrlichere Entscheidungszahl.' },
    { sub: 'rendite', q: 'Wann wirkt der Leverage-Effekt positiv auf die EK-Rendite?',
      options: ['Wenn die Gesamtkapitalrendite über dem Fremdkapitalzins liegt', 'Immer', 'Wenn der Kredit größer als der Kaufpreis ist', 'Wenn die Bank zustimmt'], correct: 0,
      explain: 'Objektrendite 4 %, Kreditzins 3 % → jeder geliehene Euro verdient 1 Punkt für dein EK. Dreht sich das Verhältnis, hebelt es Verluste!' },
    { sub: 'rendite', q: 'Kaltmiete 900 €, nicht umlegbare Kosten 140 €, Kreditrate 700 €. Monatlicher Cashflow?',
      options: ['+60 €', '+200 €', '−60 €', '+900 €'], correct: 0,
      explain: '900 − 140 − 700 = +60 €. Der Cashflow zeigt, ob sich das Objekt selbst trägt – vor Steuern und AfA-Effekten.' },
    { sub: 'rendite', q: 'Warum ist eine sehr hohe Bruttorendite (z. B. 9 %) oft ein Warnsignal?',
      options: ['Sie ist meist eine Risikoprämie für schwache Lage, Leerstand oder Sanierungsstau', 'Hohe Renditen sind illegal', 'Die Bank finanziert dann nicht', 'Der Faktor ist dann zu hoch'], correct: 0,
      explain: 'Der Markt verschenkt nichts: 9 % in der Uckermark können riskanter sein als 3,5 % in München. Demografie, Leerstand und CapEx prüfen.' },
    { sub: 'rendite', q: 'Was gehört zum „Total Return" einer Immobilieninvestition?',
      options: ['Cashflow + Tilgungsaufbau + Wertänderung', 'Nur die Mieteinnahmen', 'Nur die Wertsteigerung', 'Die Bruttomiete mal Faktor'], correct: 0,
      explain: 'Die vollständige Renditesicht: laufender Überschuss, Vermögensaufbau durch Tilgung und Marktwertentwicklung über die Haltedauer.' },
    { sub: 'rendite', q: 'Ein Exposé wirbt: „5,2 % Rendite!" – berechnet als Kaltmiete ÷ Kaufpreis. Was fehlt für eine ehrliche Betrachtung?',
      options: ['Kaufnebenkosten, Bewirtschaftungskosten, Instandhaltung/CapEx, Mietausfallrisiko', 'Nichts, die Zahl ist vollständig', 'Nur die Maklerprovision', 'Die Wohnfläche'], correct: 0,
      explain: 'Die typische Exposé-Bruttorendite überzeichnet systematisch. Profis rechnen netto nach – und prüfen die Miete auf Marktniveau.' },

    // investment
    { sub: 'investment', q: 'Welcher lineare AfA-Satz gilt für ein vermietetes Wohngebäude mit Fertigstellung 2024?',
      options: ['3 %', '2 %', '2,5 %', '5 %'], correct: 0,
      explain: 'Fertigstellung ab 2023: 3 %. Baujahr 1925–2022: 2 %, vor 1925: 2,5 %. AfA nur auf den Gebäudeanteil, nie auf den Boden!' },
    { sub: 'investment', q: 'Nach welcher Frist ist der private Verkaufsgewinn einer vermieteten Immobilie steuerfrei?',
      options: ['10 Jahre (Spekulationsfrist § 23 EStG)', '5 Jahre', '2 Jahre', 'Nie'], correct: 0,
      explain: 'Nach 10 Jahren zwischen Anschaffung und Verkauf ist der Gewinn im Privatvermögen steuerfrei – einer der größten Steuervorteile der Direktanlage.' },
    { sub: 'investment', q: 'Wann ist der Verkauf trotz kürzerer Haltedauer steuerfrei?',
      options: ['Bei Eigennutzung im Verkaufsjahr und den beiden vorangegangenen Jahren', 'Bei Verkauf an Verwandte', 'Wenn der Gewinn unter 100.000 € liegt', 'Bei Verkauf über einen Makler'], correct: 0,
      explain: 'Die Eigennutzungs-Ausnahme des § 23 EStG – angebrochene Kalenderjahre zählen mit. Wichtig für die Beratung von Selbstnutzern.' },
    { sub: 'investment', q: 'Was besagt die 3-Objekt-Grenze?',
      options: ['Mehr als 3 An- und Verkäufe in 5 Jahren → gewerblicher Grundstückshandel (Gewerbesteuer!)', 'Man darf maximal 3 Immobilien besitzen', 'Banken finanzieren nur 3 Objekte', 'Pro Jahr sind 3 Verkäufe steuerfrei'], correct: 0,
      explain: 'Wer die Grenze reißt, verliert die Spekulationsfrist-Vorteile und zahlt Gewerbesteuer – das Damoklesschwert jeder Fix&Flip-Strategie.' },
    { sub: 'investment', q: 'Was sind „anschaffungsnahe Herstellungskosten"?',
      options: ['Renovierungskosten über 15 % der Gebäudekosten binnen 3 Jahren nach Kauf – nur über AfA absetzbar', 'Die Kaufnebenkosten', 'Kosten des Notars', 'Alle Reparaturen im ersten Jahr'], correct: 0,
      explain: '§ 6 Abs. 1 Nr. 1a EStG: Wer nach dem Kauf „zu viel" saniert, verliert den Sofortabzug. Sanierungsbudgets deshalb steuerlich vorab planen!' },
    { sub: 'investment', q: 'Worauf wird die AfA berechnet?',
      options: ['Nur auf den Gebäudeanteil der Anschaffungskosten – der Bodenanteil wird herausgerechnet', 'Auf den vollen Kaufpreis inkl. Grundstück', 'Auf den Beleihungswert', 'Auf die Jahresmiete'], correct: 0,
      explain: 'Boden nutzt sich nicht ab. Die Kaufpreisaufteilung Gebäude/Boden (z. B. per Arbeitshilfe des BMF oder Gutachten) ist bares Geld wert.' },
    { sub: 'investment', q: 'Was kennzeichnet die Value-Add-Strategie?',
      options: ['Objekte mit Problemen kaufen, aufwerten (Vermietung, Sanierung), neu bewerten/refinanzieren', 'Nur Neubauten kaufen', 'Immobilien nie besichtigen', 'Ausschließlich Erbpacht kaufen'], correct: 0,
      explain: 'Value-Add schafft Wert aktiv (Leerstand füllen, Underrent heben, sanieren) – höhere Rendite gegen höheres Umsetzungsrisiko.' },
    { sub: 'investment', q: 'Warum gehört eine Liquiditätsreserve zu jedem Objekt?',
      options: ['Mietausfall und Reparaturen kommen sicher – ohne Puffer wird jede Störung zur Krise', 'Banken schreiben es vor', 'Für die Grundsteuer', 'Zur Provisionszahlung'], correct: 0,
      explain: 'Faustwert: 3–6 Monatsmieten pro Objekt. Der häufigste Grund für Notverkäufe ist fehlende Liquidität, nicht fehlende Rendite.' },

    // indirekt
    { sub: 'indirekt', q: 'Welche Fristen gelten für Anteile offener Immobilienfonds (Kauf nach 2013)?',
      options: ['24 Monate Mindesthaltefrist + 12 Monate Kündigungsfrist', 'Täglich kündbar', '10 Jahre Sperrfrist', '6 Wochen zum Quartalsende'], correct: 0,
      explain: 'Konsequenz aus der Fondskrise 2008: Die Fristen schützen den Fonds vor plötzlichen Mittelabflüssen – Anleger müssen die Illiquidität einplanen.' },
    { sub: 'indirekt', q: 'Welche Kernpflichten hat ein deutscher G-REIT?',
      options: ['Mind. 75 % Immobilienvermögen, mind. 90 % Gewinnausschüttung, Börsennotierung', 'Nur Wohnungen kaufen', '50 % Bargeldquote', 'Gewinne thesaurieren'], correct: 0,
      explain: 'Dafür ist der REIT auf Gesellschaftsebene steuerbefreit (Besteuerung beim Anleger). Deutsche Bestands-Wohnimmobilien (vor 2007) sind ausgeschlossen.' },
    { sub: 'indirekt', q: 'Was bedeutet „Nachrangdarlehen" beim Crowdinvesting?',
      options: ['Bei Insolvenz werden erst alle anderen Gläubiger bedient – Totalverlustrisiko', 'Das Darlehen wird zuletzt ausgezahlt', 'Es ist staatlich abgesichert', 'Es hat immer den niedrigsten Zins'], correct: 0,
      explain: 'Die 5–8 % Zins sind die Prämie für die letzte Position in der Gläubigerreihe. Keine Einlagensicherung, keine Mitsprache – Mezzanine-Risiko.' },
    { sub: 'indirekt', q: 'Was ist der wichtigste strukturelle Nachteil geschlossener Fonds (AIF)?',
      options: ['Illiquidität: lange Laufzeiten, kaum Zweitmarkt, unternehmerisches Verlustrisiko', 'Zu hohe Liquidität', 'Tägliche Kursschwankungen', 'Zu breite Streuung'], correct: 0,
      explain: 'Wer zeichnet, bindet sich oft 10+ Jahre an ein konkretes Objekt – plus Weichkosten. Regulierung (KAGB) ändert daran nichts.' },
    { sub: 'indirekt', q: 'Warum verhalten sich REIT-Aktien kurzfristig „mehr wie Aktien als wie Immobilien"?',
      options: ['Sie werden börsentäglich gehandelt und schwanken mit dem Aktienmarkt-Sentiment', 'Weil sie keine Immobilien besitzen', 'Wegen der Mietpreisbremse', 'Weil sie nicht ausschütten'], correct: 0,
      explain: 'Langfristig dominiert das Immobilienportfolio, kurzfristig Zinserwartungen und Börsenstimmung – wichtig für die Erwartungssteuerung.' },
    { sub: 'indirekt', q: 'Darfst du als Immobilienmakler deinen Kunden konkrete Fonds zum Kauf empfehlen?',
      options: ['Nein – Anlageberatung zu Finanzprodukten ist erlaubnispflichtig (§ 34f GewO); du informierst nur allgemein', 'Ja, jederzeit', 'Ja, gegen Provision', 'Nur bei Beträgen unter 10.000 €'], correct: 0,
      explain: 'Kompetenzgrenzen kennen: Finanzanlagenvermittlung braucht eine eigene Erlaubnis. Marktwissen ja, Produktberatung nein.' },
  ],

  cards: [
    { sub: 'baufinanzierung', front: 'Formel Annuität?', back: 'Jahresrate = Darlehen × (Sollzins % + anfängliche Tilgung %).\nRate konstant; Zinsanteil sinkt, Tilgungsanteil steigt.' },
    { sub: 'baufinanzierung', front: '§ 489 BGB – Sonderkündigungsrecht?', back: 'Jedes Darlehen ist 10 Jahre nach Vollauszahlung mit 6 Monaten Frist kündbar – ohne Vorfälligkeitsentschädigung, auch bei längerer Zinsbindung.' },
    { sub: 'baufinanzierung', front: 'Vorfälligkeitsentschädigung?', back: 'Ersatz des Zinsschadens der Bank bei vorzeitiger Rückzahlung während der Zinsbindung (z. B. bei Verkauf). Entfällt nach 10 Jahren (§ 489 BGB).' },
    { sub: 'baufinanzierung', front: 'Eigenkapital-Faustregel?', back: 'Kaufnebenkosten (9–12 %) + 10–20 % des Kaufpreises. Nebenkosten immer aus EK – sie schaffen keinen Beleihungswert.' },
    { sub: 'baufinanzierung', front: 'Forward-Darlehen?', back: 'Anschlussfinanzierung mit heute gesichertem Zins für einen Start in 1–5 Jahren – gegen Zinsaufschlag je Vorlaufmonat. Schutz vor steigenden Zinsen.' },
    { sub: 'baufinanzierung', front: 'Budgetregel Wohnkosten?', back: 'Rate + Wohnnebenkosten max. ~35–40 % des Haushaltsnettoeinkommens, konservativ mit Puffern (Zins, Instandhaltung) gerechnet.' },
    { sub: 'baufinanzierung', front: 'KfW-Grundprinzipien?', back: 'Zinsgünstige Darlehen/Zuschüsse (Neubau, Sanierung, Familien). Antrag VOR Vorhabensbeginn, i. d. R. über die Hausbank, oft mit Tilgungszuschuss.' },
    { sub: 'baufinanzierung', front: 'Bereitstellungszinsen?', back: 'Zinsen (~3 % p. a.) auf zugesagte, noch nicht abgerufene Darlehensteile nach Ablauf der freien Zeit (6–12 Monate) – wichtig bei Neubau/Bauträgerraten.' },
    { sub: 'rendite', front: 'Formel Bruttomietrendite?', back: 'Jahresnettokaltmiete ÷ Kaufpreis × 100.\n(= Kehrwert des Kaufpreisfaktors)' },
    { sub: 'rendite', front: 'Formel Nettomietrendite?', back: '(Jahresmiete − nicht umlegbare Bewirtschaftungskosten) ÷ (Kaufpreis + Kaufnebenkosten) × 100.\nRealistisch 0,5–1,5 Punkte unter brutto.' },
    { sub: 'rendite', front: 'Leverage-Effekt – Bedingung & Risiko?', back: 'EK-Rendite steigt durch Fremdkapital, wenn Gesamtkapitalrendite > FK-Zins.\nRisiko: Der Hebel wirkt auch nach unten (Zinsanstieg, Mietausfall).' },
    { sub: 'rendite', front: 'Cashflow-Formel (monatlich)?', back: 'Kaltmiete − nicht umlegbare Kosten − Kreditrate = Cashflow.\nPositiv = Objekt trägt sich selbst.' },
    { sub: 'rendite', front: 'Total Return?', back: 'Cashflow-Rendite + Tilgungsaufbau + Wertänderung = vollständige Rendite über die Haltedauer.' },
    { sub: 'rendite', front: 'Warum ist 9 % Bruttorendite oft ein Warnsignal?', back: 'Hohe Rendite = Risikoprämie: schwache Lage, Demografie, Leerstand, Sanierungsstau. Der Markt verschenkt nichts.' },
    { sub: 'investment', front: 'Lineare AfA-Sätze Wohngebäude?', back: 'Fertigstellung ab 2023: 3 %\nBaujahr 1925–2022: 2 %\nvor 1925: 2,5 %\nImmer nur auf den Gebäudeanteil!' },
    { sub: 'investment', front: 'Spekulationsfrist § 23 EStG?', back: '10 Jahre – danach privater Veräußerungsgewinn steuerfrei.\nAusnahme: Eigennutzung im Verkaufsjahr + 2 Vorjahren (angebrochene Jahre zählen).' },
    { sub: 'investment', front: '3-Objekt-Grenze?', back: 'Mehr als 3 Objekte in ~5 Jahren gekauft und verkauft → gewerblicher Grundstückshandel: Gewerbesteuer, keine steuerfreie Veräußerung, Buchführungspflichten.' },
    { sub: 'investment', front: 'Anschaffungsnahe Herstellungskosten?', back: 'Instandsetzung/Modernisierung > 15 % der Gebäude-Anschaffungskosten (netto) in den ersten 3 Jahren → kein Sofortabzug, nur AfA. Sanierungsbudget vorab planen!' },
    { sub: 'investment', front: 'Die 4 Investment-Strategien?', back: 'Buy & Hold (halten, tilgen)\nValue-Add (aufwerten, refinanzieren)\nFix & Flip (sanieren, schnell verkaufen – Steuerfallen!)\nProjektbeteiligung (unternehmerisch).' },
    { sub: 'investment', front: 'Portfolio-Grundregeln?', back: 'Liquiditätsreserve 3–6 Monatsmieten je Objekt, Streuung (Lage/Mieter), kontrollierte Refinanzierung, Exit-Fähigkeit mitdenken, Rechtsform nur mit Steuerberater.' },
    { sub: 'indirekt', front: 'Offene Immobilienfonds – Fristen?', back: 'Mindesthaltefrist 24 Monate + Kündigungsfrist 12 Monate (seit 2013). Sondervermögen nach KAGB, breite Streuung, moderate Rendite.' },
    { sub: 'indirekt', front: 'G-REIT – Kernregeln?', back: 'Börsennotiert · ≥ 75 % Immobilienvermögen · ≥ 90 % Ausschüttung · steuerbefreit auf Gesellschaftsebene · keine dt. Bestands-Wohnimmobilien (vor 2007).' },
    { sub: 'indirekt', front: 'Crowdinvesting – Konstruktion & Risiko?', back: 'Meist Nachrangdarlehen an Projektentwickler (5–8 % Zins, 1–4 Jahre). Nachrang = fast letzte Gläubigerposition → Totalverlustrisiko, keine Einlagensicherung.' },
    { sub: 'indirekt', front: 'Geschlossener Fonds (AIF)?', back: 'Unternehmerische Beteiligung an konkreten Objekten (KG-Anteil), Laufzeit 10+ Jahre, illiquide, Weichkosten, Verlustrisiko bis Totalverlust. KAGB-reguliert.' },
    { sub: 'indirekt', front: 'Kompetenzgrenze des Maklers bei Finanzprodukten?', back: 'Anlageberatung zu Fonds/Wertpapieren erfordert § 34f GewO (bzw. KWG-Lizenz). Makler informieren über Marktmechanik – keine Produktempfehlungen.' },
  ],

  cloze: [
    { sub: 'baufinanzierung', title: 'Annuitätendarlehen verstehen',
      intro: 'Ergänze die Begriffe.',
      text: 'Die Jahresrate ergibt sich aus Darlehenssumme mal der Summe aus Sollzins und anfänglicher {{Tilgung}}. Über die Laufzeit sinkt der {{Zinsanteil|Zinsanteil der Rate}}, während der Tilgungsanteil steigt. Nach {{10|zehn}} Jahren kann jedes Darlehen mit 6 Monaten Frist gekündigt werden (§ {{489}} BGB). Bei vorzeitiger Rückzahlung verlangt die Bank sonst eine {{Vorfälligkeitsentschädigung}}. Den Zins der Anschlussfinanzierung sichert man vorab per {{Forward-Darlehen|Forward Darlehen}}.' },
    { sub: 'rendite', title: 'Kennzahlen im Griff',
      intro: 'Ergänze die Begriffe.',
      text: 'Die Bruttomietrendite ist Jahreskaltmiete geteilt durch {{Kaufpreis}}. Bei der Nettomietrendite zieht man die {{Bewirtschaftungskosten|nicht umlegbaren Kosten}} ab und rechnet die {{Kaufnebenkosten|Nebenkosten}} in den Kapitaleinsatz ein. Liegt die Objektrendite über dem Kreditzins, erhöht Fremdkapital die Eigenkapitalrendite – das ist der {{Leverage-Effekt|Leverage Effekt|Hebeleffekt}}. Miete minus Kosten minus Rate ergibt den {{Cashflow}}.' },
    { sub: 'investment', title: 'Steuern für Investoren',
      intro: 'Ergänze Zahlen und Begriffe.',
      text: 'Die lineare AfA beträgt für Neubauten ab 2023 {{3|drei}} %, für Gebäude ab 1925 {{2|zwei}} % – immer nur auf den {{Gebäudeanteil|Gebäudewert}}. Private Veräußerungsgewinne sind nach {{10|zehn}} Jahren steuerfrei ({{Spekulationsfrist}}). Wer mehr als {{3|drei}} Objekte in fünf Jahren handelt, wird zum gewerblichen {{Grundstückshändler|Grundstückshandel}}.' },
    { sub: 'indirekt', title: 'Indirekte Anlagen',
      intro: 'Ergänze die Begriffe.',
      text: 'Offene Immobilienfonds haben eine Mindesthaltefrist von {{24}} Monaten und eine Kündigungsfrist von {{12|zwölf}} Monaten. Ein G-REIT muss mindestens {{90}} % seines Gewinns ausschütten und ist dafür auf Gesellschaftsebene {{steuerbefreit|steuerfrei}}. Beim Crowdinvesting vergibt die Crowd meist {{Nachrangdarlehen}} – mit {{Totalverlustrisiko|Totalverlust-Risiko}}.' },
  ],

  calc: [
    {
      sub: 'baufinanzierung', title: 'Annuität berechnen',
      generate() {
        const darlehen = U.randInt(15, 55) * 10000;
        const zins = U.pick([3.0, 3.5, 3.8, 4.2]);
        const tilgung = U.pick([1.5, 2.0, 2.5, 3.0]);
        const answer = Math.round(darlehen * (zins + tilgung) / 100 / 12 * 100) / 100;
        return {
          text: `Darlehen: <strong>${U.eur(darlehen)}</strong>, Sollzins <strong>${U.num(zins, 1)} %</strong>, anfängliche Tilgung <strong>${U.num(tilgung, 1)} %</strong>. Wie hoch ist die <strong>Monatsrate</strong>?`,
          unit: '€', answer, tolerance: 1, decimals: 2,
          steps: [
            `Jahresrate: ${U.eur(darlehen)} × (${U.num(zins, 1)} % + ${U.num(tilgung, 1)} %) = ${U.eur(darlehen * (zins + tilgung) / 100)}`,
            `Monatsrate: ÷ 12 = <strong>${U.num(answer, 2)} €</strong>`,
          ],
        };
      },
    },
    {
      sub: 'baufinanzierung', title: 'Restschuld nach dem 1. Jahr',
      generate() {
        const darlehen = U.randInt(20, 50) * 10000;
        const zins = U.pick([3.0, 3.5, 4.0]);
        const tilgung = U.pick([2.0, 2.5, 3.0]);
        const annuitaet = darlehen * (zins + tilgung) / 100;
        const zinsJahr1 = darlehen * zins / 100;
        const answer = Math.round(darlehen - (annuitaet - zinsJahr1));
        return {
          text: `Darlehen <strong>${U.eur(darlehen)}</strong>, Sollzins <strong>${U.num(zins, 1)} %</strong>, anfängliche Tilgung <strong>${U.num(tilgung, 1)} %</strong> (jährliche Verrechnung vereinfacht). Wie hoch ist die Restschuld nach dem 1. Jahr?`,
          unit: '€', answer, tolerance: Math.max(50, answer * 0.002), decimals: 0,
          steps: [
            `Annuität: ${U.eur(darlehen)} × ${U.num(zins + tilgung, 1)} % = ${U.eur(annuitaet)}`,
            `Zinsen Jahr 1: ${U.eur(darlehen)} × ${U.num(zins, 1)} % = ${U.eur(zinsJahr1)}`,
            `Tilgung Jahr 1: ${U.eur(annuitaet)} − ${U.eur(zinsJahr1)} = ${U.eur(annuitaet - zinsJahr1)}`,
            `Restschuld: ${U.eur(darlehen)} − ${U.eur(annuitaet - zinsJahr1)} = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'rendite', title: 'Bruttomietrendite',
      generate() {
        const miete = U.randInt(500, 1500);
        const preis = U.randInt(15, 45) * 10000;
        const answer = Math.round(miete * 12 / preis * 10000) / 100;
        return {
          text: `Eine Wohnung kostet <strong>${U.eur(preis)}</strong> und bringt <strong>${U.eur(miete)}</strong> Nettokaltmiete pro Monat. Berechne die Bruttomietrendite (2 Nachkommastellen).`,
          unit: '%', answer, tolerance: 0.06, decimals: 2,
          steps: [
            `Jahresmiete: ${U.eur(miete)} × 12 = ${U.eur(miete * 12)}`,
            `Rendite: ${U.eur(miete * 12)} ÷ ${U.eur(preis)} × 100 = <strong>${U.num(answer, 2)} %</strong>`,
          ],
        };
      },
    },
    {
      sub: 'rendite', title: 'Nettomietrendite (ehrlich gerechnet)',
      generate() {
        const miete = U.randInt(80, 200) * 100;             // Jahresmiete
        const bwk = U.pick([20, 22, 25]);
        const preis = miete * U.randInt(18, 26);
        const nkQuote = U.pick([10, 11, 12]);
        const einsatz = preis * (1 + nkQuote / 100);
        const netto = miete * (1 - bwk / 100);
        const answer = Math.round(netto / einsatz * 10000) / 100;
        return {
          text: `Kaufpreis <strong>${U.eur(preis)}</strong> zzgl. <strong>${nkQuote} %</strong> Kaufnebenkosten. Jahresnettokaltmiete <strong>${U.eur(miete)}</strong>, davon gehen <strong>${bwk} %</strong> nicht umlegbare Bewirtschaftungskosten ab. Berechne die Nettomietrendite (2 Nachkommastellen).`,
          unit: '%', answer, tolerance: 0.08, decimals: 2,
          steps: [
            `Gesamteinsatz: ${U.eur(preis)} × ${U.num(1 + nkQuote / 100, 2)} = ${U.eur(Math.round(einsatz))}`,
            `Nettoertrag: ${U.eur(miete)} × (1 − ${bwk} %) = ${U.eur(Math.round(netto))}`,
            `Nettomietrendite: ${U.eur(Math.round(netto))} ÷ ${U.eur(Math.round(einsatz))} × 100 = <strong>${U.num(answer, 2)} %</strong>`,
          ],
        };
      },
    },
    {
      sub: 'rendite', title: 'Eigenkapitalrendite mit Hebel',
      generate() {
        const einsatz = U.randInt(25, 50) * 10000;          // Gesamtkosten
        const gkRendite = U.pick([4.0, 4.5, 5.0]);
        const fkZins = U.pick([3.0, 3.5]);
        const ekQuote = U.pick([20, 25, 30]);
        const ek = einsatz * ekQuote / 100;
        const fk = einsatz - ek;
        const ertrag = einsatz * gkRendite / 100;
        const zinsen = fk * fkZins / 100;
        const answer = Math.round((ertrag - zinsen) / ek * 10000) / 100;
        return {
          text: `Gesamtinvestition <strong>${U.eur(einsatz)}</strong> mit einer Objektrendite (GK-Rendite) von <strong>${U.num(gkRendite, 1)} %</strong>. Finanzierung: <strong>${ekQuote} % Eigenkapital</strong>, Rest Fremdkapital zu <strong>${U.num(fkZins, 1)} %</strong> Zins. Berechne die Eigenkapitalrendite (2 Nachkommastellen, Tilgung hier ignorieren).`,
          unit: '%', answer, tolerance: 0.1, decimals: 2,
          steps: [
            `EK: ${U.eur(ek)} · FK: ${U.eur(fk)}`,
            `Objektertrag: ${U.eur(einsatz)} × ${U.num(gkRendite, 1)} % = ${U.eur(ertrag)}`,
            `Zinsen: ${U.eur(fk)} × ${U.num(fkZins, 1)} % = ${U.eur(zinsen)}`,
            `EK-Rendite: (${U.eur(ertrag)} − ${U.eur(zinsen)}) ÷ ${U.eur(ek)} × 100 = <strong>${U.num(answer, 2)} %</strong>`,
            `Leverage: GK-Rendite ${U.num(gkRendite, 1)} % > FK-Zins ${U.num(fkZins, 1)} % → der Hebel wirkt positiv.`,
          ],
        };
      },
    },
    {
      sub: 'investment', title: 'Jährliche AfA berechnen',
      generate() {
        const preis = U.randInt(25, 60) * 10000;
        const bodenanteil = U.pick([20, 25, 30]);
        const satz = U.pick([2, 3]);
        const gebaeude = preis * (1 - bodenanteil / 100);
        const answer = Math.round(gebaeude * satz / 100);
        return {
          text: `Eine vermietete Wohnung kostet <strong>${U.eur(preis)}</strong> (Anschaffungskosten inkl. Nebenkosten). Der Bodenanteil beträgt <strong>${bodenanteil} %</strong>, der AfA-Satz <strong>${satz} %</strong>. Wie hoch ist die jährliche AfA?`,
          unit: '€', answer, tolerance: Math.max(10, answer * 0.005), decimals: 0,
          steps: [
            `Gebäudeanteil: ${U.eur(preis)} × (1 − ${bodenanteil} %) = ${U.eur(Math.round(gebaeude))}`,
            `AfA: ${U.eur(Math.round(gebaeude))} × ${satz} % = <strong>${U.eur(answer)}</strong>`,
            `Merke: AfA nur auf das Gebäude – der Boden nutzt sich nicht ab.`,
          ],
        };
      },
    },
    {
      sub: 'rendite', title: 'Monatlicher Cashflow',
      generate() {
        const miete = U.randInt(70, 160) * 10;
        const kosten = Math.round(miete * U.pick([0.12, 0.15, 0.18]));
        const rate = Math.round(miete * U.pick([0.7, 0.8, 0.9]));
        const answer = miete - kosten - rate;
        return {
          text: `Kaltmiete <strong>${U.eur(miete)}</strong>/Monat, nicht umlegbare Kosten <strong>${U.eur(kosten)}</strong>, Kreditrate <strong>${U.eur(rate)}</strong>. Wie hoch ist der monatliche Cashflow? (negativ mit Minuszeichen)`,
          unit: '€', answer, tolerance: 1, decimals: 0,
          steps: [`${U.eur(miete)} − ${U.eur(kosten)} − ${U.eur(rate)} = <strong>${U.eur(answer)}</strong>`],
        };
      },
    },
  ],

  cases: [
    {
      id: 'erste-kapitalanlage',
      title: 'Die erste Kapitalanlage-Wohnung',
      teaser: 'Eine junge Ärztin will 60.000 € investieren – berate sie wie ein Profi.',
      intro: `Dr. Lena Hoffmann (29, Assistenzärztin, 4.100 € netto) hat 60.000 € gespart und möchte
        „etwas mit Immobilien machen – Aktien sind mir zu wild". Ein Kollege hat ihr eine neue
        1-Zimmer-Wohnung „mit 4,8 % Rendite laut Vertrieb" empfohlen: 189.000 €, vermietet für 630 € kalt,
        Hausgeld 190 € (davon 60 € umlagefähig). Sie fragt dich um eine ehrliche Einschätzung.`,
      steps: [
        {
          situation: 'Zuerst prüfst du die beworbene „4,8 % Rendite" (Vertriebsrechnung: 630 € × 12 ÷ 189.000 = 4,0 %… plus „Steuervorteile").',
          question: 'Wie rechnest du seriös nach?',
          options: [
            { quality: 'best', text: 'Nettobetrachtung: Jahresmiete minus nicht umlegbare Kosten (130 €/Monat) geteilt durch Kaufpreis PLUS Nebenkosten (~10 %) – das ergibt hier nur rund 2,9 %. Die 4,8 % sind Marketing.',
              feedback: 'Genau: (630−130)×12 ÷ (189.000×1,10) ≈ 2,9 %. Die Differenz zwischen Vertriebszahl und Realität ist der Grund, warum ehrliche Berater Anleger-Kunden fürs Leben gewinnen. Steuereffekte sind individuell und gehören separat betrachtet – nie in die Objektrendite gemogelt.' },
            { quality: 'okay', text: 'Ich übernehme die 4,0 % Bruttorendite – die ist ja korrekt gerechnet.',
              feedback: 'Brutto stimmt rechnerisch, führt aber zur falschen Entscheidung: Ohne Abzug der 130 € nicht umlegbarer Kosten und ohne Nebenkosten im Nenner überschätzt Lena ihre Rendite um über einen Prozentpunkt.' },
            { quality: 'bad', text: 'Renditen unter 5 % lohnen sich nie – ich rate pauschal ab.',
              feedback: 'Pauschalurteile sind keine Beratung: Ob 2,9 % netto attraktiv sind, hängt von Lage, Wertentwicklungspotenzial, Finanzierung und Alternativen ab. Deine Aufgabe ist die ehrliche Rechnung, nicht die Bauchmeinung.' },
          ],
        },
        {
          situation: 'Lena fragt: „Soll ich die 60.000 € komplett reinstecken oder mehr finanzieren? Zinsen liegen bei 3,6 %."',
          question: 'Was erklärst du ihr zum Thema Finanzierungsstruktur?',
          options: [
            { quality: 'best', text: 'Ich erkläre den Leverage-Effekt ehrlich in beide Richtungen: Bei ~2,9–4 % Objektrendite und 3,6 % Zins ist der Hebel hier kaum positiv. Sinnvoll: Nebenkosten + Puffer aus EK, Rest so finanzieren, dass der Cashflow tragbar bleibt – und eine Liquiditätsreserve behalten.',
              feedback: 'Differenziert statt dogmatisch: Der Hebel lohnt nur, wenn die Objektrendite über dem Zins liegt – hier ist das knapp bis negativ. Und: NIE das ganze EK versenken; 3–6 Monatsmieten Reserve plus persönlicher Notgroschen sind Pflicht.' },
            { quality: 'okay', text: 'Maximal finanzieren – Fremdkapital hebelt immer die Eigenkapitalrendite.',
              feedback: '„Immer" ist falsch: Der Leverage-Effekt dreht ins Negative, sobald der Kreditzins über der Objektrendite liegt – genau das droht hier. Der Hebel ist ein Werkzeug, kein Naturgesetz.' },
            { quality: 'bad', text: 'Alles bar zahlen – Schulden sind grundsätzlich schlecht.',
              feedback: 'Das andere Extrem: Damit wäre ihr gesamtes Kapital in einem einzigen illiquiden Asset gebunden, ohne Reserve. Immobilieninvestment lebt von durchdachter (nicht maximaler) Fremdfinanzierung.' },
          ],
        },
        {
          situation: 'Beim Unterlagen-Check entdeckst du: Die WEG hat nur 15.000 € Rücklage bei 40 Einheiten, das Protokoll erwähnt „Diskussion über Fassaden- und Aufzugssanierung". Der Verkäufer will schnell abschließen.',
          question: 'Wie gehst du mit dem Befund um?',
          options: [
            { quality: 'best', text: 'Ich beziffere das Risiko: Rücklage pro Einheit ist minimal, die diskutierten Maßnahmen bedeuten absehbar eine Sonderumlage. Ich lasse Lena beim Verwalter Kostenschätzungen erfragen und preise das Risiko in Angebot und Liquiditätsplanung ein – oder rate ab, wenn der Verkäufer nicht nachlässt.',
              feedback: 'Genau das ist Due Diligence bei ETW-Kapitalanlagen: 15.000 € ÷ 40 Einheiten = 375 € pro Einheit – praktisch nichts. Wer hier blind kauft, zahlt die Sanierung später doppelt: als Sonderumlage und als Wertverlust beim Exit.' },
            { quality: 'okay', text: 'Ich erwähne es, aber der Zeitdruck des Verkäufers spricht dafür, schnell zu handeln.',
              feedback: 'Zeitdruck des Verkäufers ist SEIN Problem, nicht ihres. Wer sich von „schnell, schnell" treiben lässt, kauft die Katze im Sack – gerade der Druck kann ein Zeichen sein, dass er vor der Sonderumlage raus will.' },
            { quality: 'bad', text: 'Rücklagen sind Sache der WEG – für die Kaufentscheidung irrelevant.',
              feedback: 'Fachlich falsch: Kommende Sonderumlagen treffen den Erwerber direkt, und beschlossene Maßnahmen können vertraglich sogar noch den Verkäufer treffen (Stichtag Beschluss). Rücklage + Protokolle sind Kern jeder ETW-Prüfung.' },
          ],
        },
        {
          situation: 'Lena entscheidet sich am Ende gegen dieses Objekt. Sie fragt: „War die Idee Immobilie grundsätzlich falsch? Oder wie finde ich ein besseres Objekt?"',
          question: 'Dein Rat für ihre Investorenreise?',
          options: [
            { quality: 'best', text: 'Die Idee ist gut, das Objekt war schwach: Wir definieren Suchkriterien (Lage mit Nachfrage, Faktor/Nettorendite-Zielband, WEG-Qualität, Zustand), sie baut Reserven weiter auf, und ich nehme sie in meinen Anleger-Verteiler für passende Objekte – mit ehrlichem Zahlenblatt zu jedem Angebot.',
              feedback: 'So entsteht eine langfristige Kundenbeziehung: Der abgeratene Kauf von heute ist das Vertrauen von morgen. Klare Ankaufskriterien verhindern Emotionskäufe – und du positionierst dich als der Makler, dessen Zahlen stimmen.' },
            { quality: 'okay', text: 'Ich empfehle ihr, stattdessen einfach REIT-Aktien zu kaufen.',
              feedback: 'Vorsicht doppelt: Konkrete Wertpapierempfehlungen überschreiten deine Kompetenz (§ 34f GewO), und du gibst eine Kundin auf, die mit besserem Objekt sehr wohl direkt investieren könnte. Informieren ja, Produktberatung nein.' },
            { quality: 'bad', text: 'Ich sage ihr, sie soll beim nächsten Objekt einfach schneller zuschlagen, bevor andere es wegkaufen.',
              feedback: 'Genau die falsche Lehre: Nicht Geschwindigkeit war ihr Problem, sondern Objektqualität. „Schneller zuschlagen" ohne Kriterien produziert die Fehlkäufe, vor denen du sie gerade bewahrt hast.' },
          ],
        },
      ],
    },
    {
      id: 'familienfinanzierung',
      title: 'Traumhaus am Limit',
      teaser: 'Eine Familie will mehr Haus kaufen, als sie sich leisten kann – führe sie sicher durchs Budget.',
      intro: `Familie Yilmaz (2 Kinder, gemeinsames Nettoeinkommen 5.200 €) hat sich in ein Haus für 649.000 € verliebt,
        das du anbietest. Eigenkapital: 70.000 €. Grunderwerbsteuer im Bundesland: 6,5 %, Notar/Grundbuch 2 %,
        Käuferprovision 3,57 %. Aktueller Zins: 3,7 %, Tilgung 2 %. Herr Yilmaz: „Das muss doch irgendwie gehen!"`,
      steps: [
        {
          situation: 'Erster Realitätscheck: Du überschlägst die Zahlen im Kopf, bevor Emotionen weiter wachsen.',
          question: 'Was ergibt die Überschlagsrechnung?',
          options: [
            { quality: 'best', text: 'Nebenkosten ~12 % ≈ 78.000 € – mehr als das gesamte Eigenkapital! Es bliebe eine Finanzierung über Kaufpreis (649.000 €) plus fehlende Nebenkosten – die Rate läge bei rund 3.100–3.300 €/Monat, über 60 % des Nettoeinkommens. Das Objekt ist so nicht darstellbar.',
              feedback: 'Exakt: NK = 649.000 × 12,07 % ≈ 78.300 €. Schon die Nebenkosten übersteigen das EK; eine 110 %-Finanzierung zu diesem Einkommen scheitert an jeder Haushaltsrechnung (Faustgrenze 35–40 %). Wer das dem Kunden JETZT klar sagt, erspart allen Wochen der Enttäuschung.' },
            { quality: 'okay', text: 'Knapp, aber mit Bausparvertrag und zwei Nebenjobs könnte es klappen – ich reiche die Anfrage mal bei einer Bank ein.',
              feedback: 'Hoffnungsfinanzierung: Banken rechnen mit nachhaltigem Ist-Einkommen, nicht mit geplanten Nebenjobs. Eine absehbar aussichtslose Anfrage kostet Zeit und produziert SCHUFA-Anfragen – besser sofort ehrlich rechnen.' },
            { quality: 'bad', text: 'Finanzierung ist Sache der Bank – ich mache erstmal den Besichtigungstermin für den Notarvorlauf klar.',
              feedback: 'Ein Makler, der Kunden sehenden Auges in nicht finanzierbare Käufe laufen lässt, riskiert geplatzte Termine, wütende Verkäufer und seinen Ruf. Budget-Realismus VOR Prozessstart ist Profi-Standard.' },
          ],
        },
        {
          situation: 'Frau Yilmaz ist enttäuscht: „Und was können wir uns dann leisten?" Du willst ein seriöses Maximalbudget herleiten.',
          question: 'Wie leitest du das Budget her?',
          options: [
            { quality: 'best', text: 'Rückwärts von der tragbaren Rate: ~35 % von 5.200 € ≈ 1.800 €/Monat = 21.600 €/Jahr. Bei 5,7 % Annuität (3,7 + 2) ergibt das ein Darlehen von ~380.000 €. Plus EK minus Nebenkosten: realistisches Kaufpreisbudget ~400.000–420.000 €.',
              feedback: 'Sauber hergeleitet: Darlehen = tragbare Jahresrate ÷ Annuitätensatz (21.600 ÷ 0,057 ≈ 379.000 €). Mit 70.000 € EK, wovon ~48.000–50.000 € Nebenkosten (bei ~410.000 € Kaufpreis) abgehen, landet man bei gut 400.000 €. Diese Transparenz macht dich zum Berater statt zum Verkäufer.' },
            { quality: 'okay', text: 'Ich sage: „Ungefähr die Hälfte von dem Traumhaus" – Details soll der Bankberater klären.',
              feedback: 'Die Richtung stimmt, aber „ungefähr die Hälfte" ohne Herleitung wirkt beliebig und delegiert deine Beratungschance an die Bank. Wer die Rechnung selbst zeigen kann, gewinnt Vertrauen und steuert die Suche.' },
            { quality: 'bad', text: 'Budgets sind Psychologie – ich zeige ihnen einfach Häuser für 550.000 €, runterhandeln kann man immer.',
              feedback: 'Damit programmierst du die nächste Enttäuschung: 550.000 € sind genauso unfinanzierbar. Kunden systematisch über Budget zu führen ist Zeitverschwendung für alle – und unseriös.' },
          ],
        },
        {
          situation: 'Die Familie akzeptiert das Budget. Beim passenden Haus für 415.000 € fragt Herr Yilmaz: „10, 15 oder 20 Jahre Zinsbindung? Und die KfW – bringt die was?"',
          question: 'Deine Einordnung (ohne Finanzberatung zu ersetzen)?',
          options: [
            { quality: 'best', text: 'Ich erkläre die Mechanik: Lange Bindung = Planungssicherheit gegen Aufpreis; dank § 489 BGB ist nach 10 Jahren trotzdem kündbar – die 15–20 Jahre sind also eine Einbahn-Option zugunsten des Kunden. KfW-Programme (z. B. Familienförderung, Sanierung) je nach Objekt prüfen, Antrag VOR Kauf/Maßnahme – und für Details an meinen Finanzierungspartner verweisen.',
              feedback: 'Genau die richtige Flughöhe: Mechanik erklären (die asymmetrische Chance langer Bindungen kennen die wenigsten Kunden!), Förderprinzipien nennen, konkrete Produktberatung an den lizenzierten Profi geben. So bleibst du kompetent und rechtssicher.' },
            { quality: 'okay', text: '„Nehmen Sie 10 Jahre, das macht man so."',
              feedback: 'Pauschalrat ohne Begründung: Bei einer Familie am Budgetlimit kann Zinssicherheit über 15–20 Jahre existenziell sein – gerade weil § 489 die Flexibilität nach 10 Jahren ohnehin sichert. Mechanik erklären statt Bauchregeln.' },
            { quality: 'bad', text: 'Ich rechne ihnen ein konkretes Bankangebot mit Versicherungspaket durch und fülle den Darlehensantrag gleich mit aus.',
              feedback: 'Damit betreibst du erlaubnispflichtige Darlehensvermittlung/-beratung (§ 34i GewO) ohne Lizenz. Kompetenzgrenzen sind kein Formalismus – sie schützen dich vor Haftung und Bußgeld.' },
          ],
        },
        {
          situation: 'Finanzierung steht, Notartermin in 3 Wochen. Die Bank fordert noch die Eintragung einer Grundschuld über 350.000 €. Frau Yilmaz ruft an: „Was unterschreiben wir da eigentlich – gehört das Haus dann der Bank?"',
          question: 'Wie erklärst du die Grundschuld verständlich?',
          options: [
            { quality: 'best', text: 'Die Grundschuld ist das Pfandrecht der Bank im Grundbuch (Abt. III): Ihr bleibt Eigentümer, die Bank darf nur bei dauerhafter Nichtzahlung verwerten. Sie wird beim Notar zusammen mit dem Kauf bestellt; nach Rückzahlung könnt ihr sie löschen lassen (oder als Sicherheit für später behalten).',
              feedback: 'Perfekt erklärt: Eigentum und Sicherungsrecht sauber getrennt, der Prozess (Bestellung beim Notartermin, Zwangsvollstreckungsunterwerfung als Standard) eingeordnet und die Option „stehenlassen für künftige Finanzierungen" erwähnt – Beratungsqualität, die Kunden weitererzählen.' },
            { quality: 'okay', text: '„Reine Formalie, unterschreiben Sie einfach – das machen alle so."',
              feedback: '„Formalie" ist die falsche Botschaft für ein Dokument mit Unterwerfung unter die sofortige Zwangsvollstreckung. Kunden, die verstehen, was sie unterschreiben, sind ruhiger – und Erklären ist genau dein Mehrwert.' },
            { quality: 'bad', text: '„Ja, das Haus gehört erstmal der Bank, bis alles abbezahlt ist."',
              feedback: 'Sachlich falsch: Eigentümer wird die Familie (Abt. I), die Bank erhält nur ein Grundpfandrecht (Abt. III). Solche Fehlinformationen verunsichern Kunden und blamieren dich beim Notartermin.' },
          ],
        },
      ],
    },
  ],
});
