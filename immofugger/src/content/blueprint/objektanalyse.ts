import type { ModuleGroup } from './types'

export const objektanalyse: ModuleGroup = {
  slug: 'objektanalyse',
  title: 'Objektanalyse',
  description:
    'Hier wird gerechnet: Exposés entschlüsseln, Renditen und Cashflow kalkulieren, Zustand und Lage prüfen — das Handwerkszeug, mit dem du gute von schlechten Deals unterscheidest.',
  lessons: [
    {
      id: 'objektanalyse-1',
      title: 'Exposés lesen wie ein Profi',
      intro:
        'Ein Exposé ist Werbung, kein Gutachten. Diese Lektion zeigt dir, wie du in zehn Minuten die relevanten Fakten herausziehst, Lücken erkennst und die Verkäufer-Rendite nachrechnest.',
      sections: [
        {
          heading: 'Die Anatomie eines Exposés',
          body: 'Kernfakten, die du suchst: Kaufpreis, Wohnfläche, Kaltmiete (Ist, nicht Soll!), Hausgeld mit Aufteilung (umlagefähig/nicht umlagefähig), Baujahr, Energieausweis-Werte, bei ETWs Angaben zur WEG (Rücklage, Einheiten), Zustand von Dach/Heizung/Fenstern und der Grund des Verkaufs.\n\nWas fehlt, ist oft wichtiger als was dasteht: Fehlt die Ist-Miete? Fehlt das Hausgeld? Steht „Rendite" ohne Rechenweg da? Jede Lücke ist eine Frage für deine erste Mail an den Makler — und die Antworten sagen dir viel über die Professionalität der Gegenseite.',
        },
        {
          heading: 'Marketing-Deutsch übersetzen',
          body: '„Handwerkerobjekt mit Potenzial" = Sanierungsfall. „Gefragte, aufstrebende Lage" = noch nicht etabliert. „Vermietung problemlos möglich" = steht leer. „Solide vermietet" = prüfe, zu welcher Miete und seit wann. „Ideal für Kapitalanleger" = für Eigennutzer unattraktiv. „Kurzfristig verfügbar" = der Verkäufer hat es eilig — dein Verhandlungshebel.\n\nDiese Übersetzungen sind keine Zynismen, sondern Erfahrungswerte. Ein Exposé will verkaufen; deine Aufgabe ist es, die Fakten von der Verpackung zu trennen.',
        },
        {
          heading: 'Die beworbene Rendite nachrechnen',
          body: 'Steht im Exposé eine Rendite, rechne sie immer nach — mit deiner Formel, nicht mit der des Verkäufers. Beliebte Tricks: Es wird mit Soll-Miete („nach Anpassung erzielbar") statt Ist-Miete gerechnet; die Kaufnebenkosten fehlen im Nenner; nicht umlagefähige Kosten werden ignoriert; bei möblierter Vermietung wird die Warmmiete angesetzt.\n\nDeine Gegenrechnung: Brutto = Ist-Jahreskaltmiete ÷ Kaufpreis. Netto = (Ist-Jahreskaltmiete − nicht umlagefähige Kosten) ÷ (Kaufpreis + Nebenkosten). Liegt deine Zahl deutlich unter der beworbenen, hast du zugleich ein Prüfergebnis und ein Verhandlungsargument.',
        },
        {
          heading: 'Der 10-Minuten-Schnellcheck',
          body: 'Ein fester Ablauf für jedes neue Exposé: (1) Kennzahlen rechnen — Bruttorendite, Faktor, Preis pro m², Vergleich mit Mietspiegel und Portal-Vergleichsangeboten. (2) K.-o.-Kriterien prüfen — Erbbaurecht? Extrem hohes Hausgeld? Mietrückstände? Standort-Warnsignale? (3) Lückenliste schreiben — was fehlt, wird angefragt.\n\nErgebnis nach zehn Minuten: „ablehnen", „anfragen" oder „besichtigen". Dieser Filter schützt deine wertvollste Ressource — Zeit — und verhindert, dass du dich in schöne Fotos verliebst, bevor die Zahlen gesprochen haben.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die 5,2 %, die keine waren',
        body: 'Exposé: „ETW, 61 m², KP 149.000 €, Rendite 5,2 %!" Die Rechnung dahinter: Soll-Miete 645 € („nach Neuvermietung erzielbar"). Ist-Miete laut Nachfrage: 545 €, Hausgeld 240 € (davon 75 € nicht umlagefähig). Nachgerechnet: Brutto = 6.540 ÷ 149.000 = 4,4 %. Netto = (6.540 − 900) ÷ 163.900 (inkl. 10 % NK) = 3,4 %. Die „5,2 %" waren eine Hoffnung des Verkäufers. Mit dieser Rechnung in der Hand verhandelt Mara den Preis auf 138.000 € — oder geht ohne schlechtes Gewissen weiter.',
      },
      note: 'Exposé = Werbung. Immer selbst rechnen (Ist-Miete, inklusive Nebenkosten und nicht umlagefähiger Kosten), Marketing-Floskeln übersetzen, Lücken anfragen. Der 10-Minuten-Schnellcheck entscheidet: ablehnen, anfragen oder besichtigen.',
      wikiRefs: ['expose', 'mietrendite', 'kaufpreisfaktor', 'hausgeld'],
      quiz: [
        {
          q: 'Mit welcher Miete rechnest du die Rendite eines vermieteten Objekts nach?',
          options: [
            'Mit der Soll-Miete aus dem Exposé',
            'Mit der tatsächlichen Ist-Kaltmiete',
            'Mit der Warmmiete',
            'Mit dem Mietspiegel-Maximum',
          ],
          correct: 1,
          explanation:
            'Zählbar ist nur, was tatsächlich vereinbart ist. Soll-Mieten sind Hoffnungswerte — nützlich fürs Potenzial, unbrauchbar für die Ankaufsrechnung.',
        },
        {
          q: 'Was bedeutet „Handwerkerobjekt mit Potenzial" üblicherweise?',
          options: ['Neubau-Standard', 'Ein Sanierungsfall', 'Besonders gute Mieter', 'Ein Objekt mit Werkstatt'],
          correct: 1,
          explanation: 'Exposé-Sprache beschönigt: „Potenzial" heißt fast immer, dass erheblicher Sanierungsaufwand nötig ist.',
        },
        {
          q: 'KP 149.000 €, Ist-Kaltmiete 545 €/Monat. Wie hoch ist die Bruttorendite?',
          options: ['5,2 %', '4,4 %', '3,7 %', '6,1 %'],
          correct: 1,
          explanation: '545 × 12 = 6.540 € Jahresmiete; 6.540 ÷ 149.000 ≈ 4,4 %.',
        },
        {
          q: 'Was ist das Ziel des 10-Minuten-Schnellchecks?',
          options: [
            'Den endgültigen Kaufpreis festlegen',
            'Schnell filtern: ablehnen, anfragen oder besichtigen — bevor Emotionen entscheiden',
            'Die Finanzierung abschließen',
            'Den Makler beeindrucken',
          ],
          correct: 1,
          explanation:
            'Der Schnellcheck ist ein Zeitfilter: Nur Objekte, die die Zahlen-Hürde nehmen, verdienen eine Besichtigung.',
        },
      ],
    },
    {
      id: 'objektanalyse-2',
      title: 'Kaufnebenkosten: Die unterschätzten Prozente',
      intro:
        'Zwischen 9 und 12 % des Kaufpreises verschwinden beim Erwerb — bevor dir ein einziger Euro Miete zufließt. Wer die Nebenkosten beherrscht, kalkuliert ehrlich und verhandelt schlauer.',
      sections: [
        {
          heading: 'Die vier Positionen',
          body: 'Grunderwerbsteuer: je nach Bundesland unterschiedlich (aktuell zwischen 3,5 % und 6,5 % — den Satz deines Bundeslandes prüfst du tagesaktuell). Notar und Grundbuch: zusammen rund 1,5–2 % für Beurkundung, Auflassungsvormerkung, Grundschuldbestellung und Eintragungen. Maklerprovision: regional verschieden; beim Verkauf an Verbraucher gilt seit 2020, dass der Käufer höchstens die Hälfte trägt — üblich sind je nach Region etwa 2–3,57 % inkl. MwSt. für den Käufer. Optional: Gutachter, Finanzierungsnebenkosten, Umzug.\n\nZusammen: ohne Makler meist 5–8 %, mit Makler 9–12 %. Bei einem 250.000-€-Objekt sind das 22.000 bis 30.000 € — echtes Geld, das sofort weg ist.',
        },
        {
          heading: 'Warum die Nebenkosten doppelt wehtun',
          body: 'Erstens: Sie sind verlorene Kosten. Der Marktwert deines Objekts ist am Tag nach dem Kauf nicht um die Nebenkosten höher — du startest buchhalterisch im Minus und musst diese Prozente erst wieder „verdienen".\n\nZweitens: Banken finanzieren sie üblicherweise nicht mit (das wäre eine 110 %-Finanzierung mit entsprechendem Zinsaufschlag). Die Nebenkosten definieren damit für die meisten Käufer das Mindest-Eigenkapital. Und drittens drücken sie die Netto-Rendite, weil sie in den Nenner der ehrlichen Rechnung gehören.',
        },
        {
          heading: 'Legale Stellschrauben',
          body: 'Bewegliches Zubehör (Einbauküche, Möbel, Sauna) kann im Kaufvertrag separat ausgewiesen werden — auf diesen Teil fällt keine Grunderwerbsteuer an. Wichtig: nur mit realistischen, belegbaren Werten; Fantasiepreise prüft das Finanzamt und gefährdet im Zweifel die Finanzierung (die Bank rechnet das Zubehör nicht zum Beleihungswert).\n\nBei der Instandhaltungsrücklage einer ETW war die Herauslösung aus der Bemessungsgrundlage lange üblich — die Rechtsprechung hat sich hier geändert; den aktuellen Stand klärt der Notar oder Steuerberater. Und natürlich: Ein Kauf ohne Makler (direkt vom Eigentümer) spart die größte Einzelposition.',
        },
        {
          heading: 'Nebenkosten in der Verhandlung nutzen',
          body: 'Denke in Gesamtinvestition, nicht in Kaufpreis: „Das Objekt kostet mich mit Nebenkosten 274.000 €" ist die Zahl, die zählt. Jede Preissenkung wirkt doppelt — sie senkt auch die prozentualen Nebenkosten mit.\n\nIm Rechner-Bereich der Plattform findest du den Kaufnebenkosten-Rechner: Kaufpreis, Bundesland, Makler ja/nein — und du siehst die Gesamtinvestition auf einen Blick. Nutze ihn bei jedem Objekt, bevor du ein Angebot abgibst.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: 250.000 € in NRW mit Makler',
        body: 'Kaufpreis 250.000 € in Nordrhein-Westfalen (Grunderwerbsteuer beispielhaft 6,5 %): Steuer 16.250 €, Notar/Grundbuch ~2 % = 5.000 €, Maklerprovision 3,57 % = 8.925 €. Nebenkosten gesamt: 30.175 € ≈ 12,1 %. Gesamtinvestition: 280.175 €. Dieselbe Wohnung in Bayern (3,5 %): 7.500 € weniger Steuer. Merke: Das Bundesland entscheidet über tausende Euro — und eine im Vertrag sauber ausgewiesene Einbauküche (hier: 8.000 €) spart zusätzlich 520 € Steuer.',
      },
      note: 'Nebenkosten = Grunderwerbsteuer (je Bundesland) + ~2 % Notar/Grundbuch + ggf. Maklerprovision → 9–12 %. Sie sind verlorene Kosten, kommen aus dem Eigenkapital und gehören in jede Rendite-Rechnung. Immer mit der Gesamtinvestition kalkulieren.',
      legalHint: true,
      wikiRefs: ['kaufnebenkosten', 'grunderwerbsteuer', 'maklerprovision', 'notar'],
      quiz: [
        {
          q: 'Welche Position gehört NICHT zu den Kaufnebenkosten?',
          options: ['Grunderwerbsteuer', 'Notar- und Grundbuchkosten', 'Die monatliche Kreditrate', 'Maklerprovision'],
          correct: 2,
          explanation: 'Die Kreditrate ist laufende Finanzierung — Nebenkosten sind die einmaligen Erwerbskosten.',
        },
        {
          q: 'Warum definieren die Nebenkosten meist dein Mindest-Eigenkapital?',
          options: [
            'Weil sie gesetzlich bar zu zahlen sind',
            'Weil Banken sie üblicherweise nicht mitfinanzieren',
            'Weil der Notar Vorkasse verlangt',
            'Weil sie steuerlich absetzbar sind',
          ],
          correct: 1,
          explanation:
            'Eine Finanzierung über den Kaufpreis hinaus (110 %) gibt es nur mit Aufschlägen und bei bester Bonität — der Standard ist: Nebenkosten aus eigener Tasche.',
        },
        {
          q: 'Wie kann bewegliches Zubehör die Nebenkosten senken?',
          options: [
            'Gar nicht',
            'Realistisch bewertetes Zubehör (z. B. Einbauküche) im Vertrag separat ausweisen — darauf fällt keine Grunderwerbsteuer an',
            'Zubehör verdoppelt die Maklerprovision',
            'Zubehör senkt die Notarkosten auf null',
          ],
          correct: 1,
          explanation:
            'Grunderwerbsteuer fällt nur auf das Grundstück samt Gebäude an. Wichtig: realistische Werte, sonst drohen Probleme mit Finanzamt und Bank.',
        },
        {
          q: 'Kaufpreis 200.000 €, Grunderwerbsteuer 5 %, Notar/Grundbuch 2 %, kein Makler. Gesamtinvestition?',
          options: ['200.000 €', '207.000 €', '214.000 €', '220.000 €'],
          correct: 2,
          explanation: 'Nebenkosten = 7 % = 14.000 €. Gesamtinvestition = 214.000 €.',
        },
      ],
    },
    {
      id: 'objektanalyse-3',
      title: 'Brutto- und Netto-Mietrendite richtig rechnen',
      intro:
        'Die Mietrendite ist die Standardgröße für den ersten Objektvergleich. Entscheidend ist, dass du Brutto und Netto sauber trennst — und weißt, was beide Zahlen können und was nicht.',
      sections: [
        {
          heading: 'Bruttorendite: Der schnelle Filter',
          body: 'Formel: Jahreskaltmiete ÷ Kaufpreis × 100. Beispiel: 9.000 € Jahresmiete auf 200.000 € Kaufpreis = 4,5 %. Der Kaufpreisfaktor ist der Kehrwert: 200.000 ÷ 9.000 = Faktor 22,2.\n\nDie Bruttorendite ist bewusst grob: keine Nebenkosten, keine Bewirtschaftung, keine Steuern. Ihr Zweck ist der schnelle Vergleich vieler Objekte und Märkte — ein Vor-Filter, mehr nicht. Wer auf Basis der Bruttorendite kauft, kauft blind.',
        },
        {
          heading: 'Nettorendite: Die ehrliche Zahl',
          body: 'Formel: (Jahreskaltmiete − nicht umlagefähige Kosten) ÷ (Kaufpreis + Kaufnebenkosten) × 100. In den Zähler gehören die Abzüge: Verwaltung, Instandhaltungsansatz, nicht umlagefähige Betriebskosten, kalkulatorischer Mietausfall. In den Nenner gehört die volle Gesamtinvestition.\n\nDadurch liegt die Nettorendite typischerweise 0,8 bis 1,5 Prozentpunkte unter der Bruttorendite. Diese Differenz ist keine Pessimisten-Kosmetik, sondern die Realität des Vermietens — Objekte, die nur brutto glänzen, entlarvt die Nettorechnung zuverlässig.',
        },
        {
          heading: 'Die richtigen Kostenansätze',
          body: 'Verwaltung: bei ETWs steht sie im Hausgeld (nicht umlagefähiger Teil); bei Selbstverwaltung eines MFH kalkuliere trotzdem einen Ansatz — deine Zeit ist nicht kostenlos. Instandhaltung: bewährte Praxisgrößen sind je nach Alter und Zustand etwa 10–15 € pro m² und Jahr (Neubau weniger, Altbau mehr) oder Ansätze in Anlehnung an die sogenannte Peterssche Formel.\n\nMietausfallwagnis: 2–4 % der Jahresmiete als kalkulatorischer Puffer für Leerstand und Ausfälle — in schwächeren Lagen mehr. Diese Ansätze sind Kalkulationsgrößen, keine exakten Prognosen; wichtig ist, dass sie überhaupt und konsistent in jeder deiner Rechnungen auftauchen.',
        },
        {
          heading: 'Rendite einordnen: Es gibt keinen Universalwert',
          body: '„Ab welcher Rendite ist ein Objekt gut?" — die ehrliche Antwort: Es kommt auf Lage, Zustand und Zinsniveau an. Eine 3,5 %-Bruttorendite in einer wachsenden Großstadt kann ein besseres Investment sein als 7 % in einer schrumpfenden Region mit Leerstandsrisiko.\n\nZwei Vergleichsmaßstäbe helfen: Erstens der lokale Markt — liegt das Objekt über oder unter dem ortsüblichen Faktor? Zweitens dein Finanzierungszins — liegt die Nettorendite spürbar über dem Darlehenszins, arbeitet der Hebel für dich; liegt sie darunter, zahlst du fürs Warten auf Wertsteigerung.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Brutto glänzt, netto entscheidet',
        body: 'Objekt: KP 180.000 €, Nebenkosten 10 % (18.000 €), Kaltmiete 750 €/Monat, nicht umlagefähig 85 €/Monat (Verwaltung + Rücklagenanteil), Instandhaltungsansatz 60 €/Monat, Mietausfall 3 % (≈ 23 €/Monat). Brutto: 9.000 ÷ 180.000 = 5,0 % — klingt stark. Netto: (9.000 − 1.020 − 720 − 270) ÷ 198.000 = 6.990 ÷ 198.000 = 3,53 %. Bei einem Darlehenszins von beispielhaft 3,8 % arbeitet der Hebel hier knapp gegen den Käufer — genau die Erkenntnis, für die es die Nettorechnung gibt.',
      },
      note: 'Brutto (Miete ÷ Kaufpreis) ist der Schnellfilter, Netto ((Miete − Kosten) ÷ Gesamtinvestition) die Entscheidungszahl. Immer mit Instandhaltung, Verwaltung und Mietausfall kalkulieren — und die Nettorendite gegen den Finanzierungszins halten.',
      wikiRefs: ['mietrendite', 'mietausfallwagnis', 'instandhaltungsruecklage', 'kaufpreisfaktor'],
      quiz: [
        {
          q: 'Was unterscheidet die Netto- von der Bruttorendite?',
          options: [
            'Netto nutzt die Warmmiete',
            'Netto zieht nicht umlegbare Kosten ab und rechnet mit der Gesamtinvestition inkl. Nebenkosten',
            'Netto ist immer höher',
            'Es gibt keinen Unterschied',
          ],
          correct: 1,
          explanation:
            'Netto = (Miete − Bewirtschaftungskosten) ÷ (Kaufpreis + Nebenkosten). Deshalb liegt sie typischerweise ~1 Punkt unter Brutto.',
        },
        {
          q: 'Welcher Instandhaltungsansatz ist für einen Altbau realistisch?',
          options: ['0 € — Reparaturen zahlt der Mieter', 'ca. 1 €/m² im Jahr', 'ca. 10–15 €/m² im Jahr', '100 €/m² im Jahr'],
          correct: 2,
          explanation:
            'Praxisgrößen liegen je nach Alter/Zustand bei etwa 10–15 €/m²/Jahr. Null anzusetzen ist Schönrechnen — Instandhaltung kommt sicher.',
        },
        {
          q: 'KP 180.000 €, NK 18.000 €, Jahreskaltmiete 9.000 €, nicht umlegbare Kosten gesamt 2.010 €/Jahr. Nettorendite?',
          options: ['5,0 %', '4,2 %', '3,5 %', '2,8 %'],
          correct: 2,
          explanation: '(9.000 − 2.010) ÷ 198.000 = 6.990 ÷ 198.000 ≈ 3,53 %.',
        },
        {
          q: 'Warum ist der Vergleich Nettorendite vs. Darlehenszins so aufschlussreich?',
          options: [
            'Er bestimmt die Grunderwerbsteuer',
            'Liegt die Nettorendite über dem Zins, arbeitet der Fremdkapital-Hebel für dich — darunter dagegen gegen dich',
            'Die Bank verlangt ihn im Kreditantrag',
            'Er ersetzt die Besichtigung',
          ],
          correct: 1,
          explanation:
            'Der Leverage-Effekt ist nur positiv, wenn das Objekt mehr erwirtschaftet, als das geliehene Geld kostet — dieser eine Vergleich zeigt es sofort.',
        },
      ],
    },
    {
      id: 'objektanalyse-4',
      title: 'Die Cashflow-Rechnung: Trägt sich das Objekt?',
      intro:
        'Die Rendite sagt, ob ein Objekt gut verzinst ist — der Cashflow sagt, ob du es dir jeden Monat leisten kannst. Beide Perspektiven gehören zu jeder Ankaufsentscheidung.',
      sections: [
        {
          heading: 'Von der Miete zur Wahrheit: Die Wasserfall-Rechnung',
          body: 'Starte mit der Ist-Kaltmiete und arbeite dich nach unten: minus nicht umlagefähiges Hausgeld bzw. Verwaltung, minus Instandhaltungsansatz, minus kalkulatorischer Mietausfall = operativer Überschuss (das „Net Operating Income"). Davon minus Kapitaldienst (Zins + Tilgung) = Cashflow vor Steuern.\n\nDiese Reihenfolge ist wichtig, weil sie zwei Fragen trennt: Ist das Objekt operativ gesund (Überschuss vor Finanzierung)? Und: Passt die Finanzierung dazu (Cashflow nach Kapitaldienst)? Ein operativ starkes Objekt mit zu aggressiver Finanzierung ist ein Finanzierungsproblem — kein Objektproblem.',
        },
        {
          heading: 'Positiver, neutraler, negativer Cashflow',
          body: 'Positiver Cashflow: Das Objekt zahlt dich monatlich — maximale Robustheit, aber in guten Lagen bei aktuellem Zinsniveau selten ohne hohen Eigenkapitaleinsatz. Neutraler Cashflow (±0): Die Mieter tragen das Objekt, dein Vermögensaufbau läuft über die Tilgung. Negativer Cashflow: Du schießt monatlich zu — akzeptabel nur, wenn bewusst kalkuliert, dauerhaft leistbar und durch Tilgung/Substanz gerechtfertigt.\n\nDie gefährliche Variante ist der ungeplante negative Cashflow: einkalkulierte 0 €, aber vergessene Instandhaltung und Mietausfall. Deshalb: Der Cashflow wird mit allen Kostenpositionen gerechnet oder gar nicht.',
        },
        {
          heading: 'Tilgung: Kosten oder Vermögensaufbau?',
          body: 'Buchhalterisch ist die Tilgung kein Aufwand — sie wandert von deinem Konto in dein Eigenkapital im Objekt. Ein Objekt mit −100 € Cashflow und 350 € monatlicher Tilgung baut netto 250 € Vermögen pro Monat auf.\n\nAber Vorsicht mit diesem Argument: Die Tilgung ist gebundenes Vermögen — sie zahlt keine Heizungsreparatur und keinen Leerstand. Liquidität und Vermögensaufbau sind zwei getrennte Konten. Der Cashflow muss zu deiner monatlichen Realität passen, der Vermögenszuwachs zu deiner Strategie.',
        },
        {
          heading: 'Szenarien statt Punktschätzung',
          body: 'Rechne jeden Cashflow dreifach: Basis (Ist-Zahlen, konservative Ansätze), Stress (2 Monate Leerstand p. a. im Wechseljahr, +2 Punkte Anschlusszins, größere Reparatur) und Chance (realistische Mietanpassung an den Spiegel, Zins bleibt).\n\nEntscheidungsregel: Das Basisszenario muss bequem tragbar sein, das Stressszenario darf dich nicht existenziell treffen, und das Chancenszenario ist der Bonus — niemals die Kaufbegründung. Der Cashflow-Schnellcheck in den Werkzeugen nimmt dir die Rechnerei ab; die Annahmen musst du selbst ehrlich wählen.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der komplette Wasserfall',
        body: 'ETW: Kaltmiete 820 €. Nicht umlagefähiges Hausgeld 95 €, Instandhaltungsansatz 55 €, Mietausfall 3 % (25 €) → operativer Überschuss 645 €/Monat. Finanzierung: 190.000 € Darlehen, beispielhaft 3,9 % Zins + 2 % Tilgung → Rate 934 €. Cashflow vor Steuern: 645 − 934 = −289 €/Monat. Davon sind aber 317 € Tilgung (Monat 1): Vermögensaufbau ≈ +28 €/Monat trotz negativem Cashflow. Entscheidung: nur kaufbar, wenn 289 € Zuschuss dauerhaft leicht leistbar sind — und mit Plan, wie Miete oder Zins sich entwickeln.',
      },
      note: 'Cashflow-Wasserfall: Kaltmiete → minus Bewirtschaftung/Ausfall → operativer Überschuss → minus Kapitaldienst → Cashflow vor Steuern. Tilgung ist Vermögensaufbau, aber keine Liquidität. Immer drei Szenarien rechnen — gekauft wird auf Basis, nicht auf Hoffnung.',
      wikiRefs: ['cashflow', 'kapitaldienst', 'mietausfallwagnis', 'tilgung'],
      quiz: [
        {
          q: 'In welcher Reihenfolge läuft die Cashflow-Wasserfall-Rechnung?',
          options: [
            'Kaltmiete − Kapitaldienst − Bewirtschaftung',
            'Kaltmiete − Bewirtschaftung/Mietausfall = operativer Überschuss; davon − Kapitaldienst = Cashflow',
            'Warmmiete − Tilgung',
            'Kaufpreis − Miete',
          ],
          correct: 1,
          explanation:
            'Erst die operative Ebene (ist das Objekt gesund?), dann die Finanzierungsebene (passt der Kapitaldienst?) — so findest du heraus, wo ein Problem liegt.',
        },
        {
          q: 'Kaltmiete 820 €, Bewirtschaftung+Ausfall 175 €, Rate 934 €. Cashflow vor Steuern?',
          options: ['+114 €', '−289 €', '−114 €', '+645 €'],
          correct: 1,
          explanation: '820 − 175 = 645 € operativer Überschuss; 645 − 934 = −289 €/Monat.',
        },
        {
          q: 'Warum ist Tilgung kein Trost bei Liquiditätsproblemen?',
          options: [
            'Weil sie steuerpflichtig ist',
            'Weil sie gebundenes Vermögen ist — sie zahlt keine Reparatur und keinen Leerstand',
            'Weil sie den Zins erhöht',
            'Tilgung ist doch frei verfügbar',
          ],
          correct: 1,
          explanation:
            'Vermögensaufbau im Objekt und verfügbares Geld auf dem Konto sind zwei verschiedene Dinge. Der Cashflow muss zur monatlichen Realität passen.',
        },
        {
          q: 'Wann ist ein bewusst negativer Cashflow vertretbar?',
          options: [
            'Nie',
            'Wenn er dauerhaft leicht leistbar, vollständig kalkuliert und durch Tilgung/Substanz gerechtfertigt ist',
            'Immer, solange die Lage gut ist',
            'Nur bei Neubauten',
          ],
          correct: 1,
          explanation:
            'Ein geplanter, tragbarer Zuschuss kann Teil einer Strategie sein. Gefährlich ist nur der ungeplante negative Cashflow aus vergessenen Kosten.',
        },
      ],
    },
    {
      id: 'objektanalyse-5',
      title: 'Bewirtschaftungskosten im Detail',
      intro:
        'Zwischen Kaltmiete und deinem Konto liegt die Bewirtschaftung: umlagefähige und nicht umlagefähige Kosten, Rücklagen, Verwaltung. Wer sie versteht, liest jede Hausgeldabrechnung wie ein Kontoauszug.',
      sections: [
        {
          heading: 'Umlagefähig vs. nicht umlagefähig — die wichtigste Trennlinie',
          body: 'Umlagefähige Betriebskosten (geregelt in der Betriebskostenverordnung) darfst du auf die Mieter umlegen: Heizung, Wasser, Müll, Hausmeister, Gebäudeversicherung, Grundsteuer, Aufzug, Gartenpflege. Sie laufen bei korrekter Abrechnung für dich neutral durch.\n\nNicht umlagefähig — und damit dauerhaft deine Kosten — sind vor allem: Verwaltung, Instandhaltung/Reparaturen, die Zuführung zur Instandhaltungsrücklage und Bankgebühren. Bei jeder ETW findest du die Aufteilung im Wirtschaftsplan bzw. der Hausgeldabrechnung — diese eine Zeile („davon nicht umlagefähig") ist die wichtigste Zahl des Dokuments.',
        },
        {
          heading: 'Das Hausgeld sezieren',
          body: 'Das Hausgeld einer ETW besteht typischerweise aus: umlagefähigen Betriebskosten (~60–75 %), Verwaltergebühr (oft 20–30 €/Einheit/Monat), Zuführung zur Rücklage und kleineren Posten. Ein Hausgeld von 280 € kann also 190 € durchlaufende Posten und 90 € echte Eigentümerkosten bedeuten.\n\nWarnsignale beim Hausgeld: auffällig niedrige Rücklagenzuführung (die Sanierung kommt trotzdem — dann als Sonderumlage), stark steigende Abrechnungen der letzten Jahre und Rückstände anderer Eigentümer (stehen im Protokoll; die Gemeinschaft haftet wirtschaftlich mit).',
        },
        {
          heading: 'Instandhaltung: Rücklage der WEG vs. eigene Reserve',
          body: 'Die WEG-Rücklage deckt nur das Gemeinschaftseigentum: Dach, Fassade, Treppenhaus, Heizungsanlage. Alles im Sondereigentum — deine Innentüren, Böden, Bad, Küchengeräte, die Etagenheizung je nach Teilungserklärung — zahlst du selbst.\n\nDeshalb brauchst du zwei Puffer: die (fremdverwaltete) WEG-Rücklage, deren Höhe pro m² du beim Kauf prüfst, und deine eigene Reserve für das Sondereigentum. Faustgröße für die WEG-Rücklage: Werte deutlich unter ~5 €/m²/Jahr Zuführung bei Altbauten sind ein Warnsignal; ein gesunder Bestand liegt oft deutlich darüber.',
        },
        {
          heading: 'Beim MFH: Alles deins — Planung ersetzt die WEG',
          body: 'Im Mehrfamilienhaus gibt es keine Gemeinschaft, die anspart: Du bist die Rücklage. Professionelle Bestandshalter führen deshalb ein eigenes Instandhaltungskonto mit fixer monatlicher Zuführung (z. B. 1 €/m²/Monat, objektabhängig) und einen Mehrjahresplan: Wann ist das Dach fällig, wann die Heizung, wann die Stränge?\n\nDazu kommt die Verwaltungsfrage: Selbst verwalten spart Geld, kostet Zeit und Nerven (Nebenkostenabrechnung, Mieterkommunikation, Handwerkersteuerung). Eine externe Mietverwaltung kostet je nach Region grob 20–30 €/Einheit/Monat — ab einer gewissen Portfoliogröße oft jeden Cent wert.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Wohnungen, gleiches Hausgeld, andere Wahrheit',
        body: 'Wohnung A: Hausgeld 260 €, davon 200 € umlagefähig, 25 € Verwaltung, 35 € Rücklage; WEG-Rücklage gesamt: 61.000 € bei 14 Einheiten, saniertes Dach 2021. Wohnung B: Hausgeld ebenfalls 260 €, aber nur 150 € umlagefähig, 30 € Verwaltung, 80 € Rücklage — klingt gut, doch die Rücklage beträgt nur 9.000 € und im Protokoll steht: „Fassadensanierung zurückgestellt, Kostenschätzung 120.000 €." B hat real ~110 € Eigentümerkosten monatlich PLUS eine wahrscheinliche Sonderumlage von ~8.500 €. Gleiches Hausgeld — völlig anderes Investment.',
      },
      note: 'Die entscheidende Trennlinie: umlagefähig (läuft durch) vs. nicht umlagefähig (deine Kosten — Verwaltung, Instandhaltung, Rücklage). Beim Hausgeld immer die Aufteilung, die Rücklagenhöhe und die Protokolle prüfen. Im MFH bist du selbst die Rücklage — mit Konto und Mehrjahresplan.',
      wikiRefs: ['betriebskosten', 'hausgeld', 'instandhaltungsruecklage', 'sonderumlage', 'hausverwaltung'],
      quiz: [
        {
          q: 'Welche Kosten sind NICHT auf Mieter umlagefähig?',
          options: ['Grundsteuer', 'Heizung und Wasser', 'Verwaltung und Instandhaltung', 'Müllabfuhr'],
          correct: 2,
          explanation:
            'Verwaltung, Reparaturen und Rücklagenzuführung trägt immer der Eigentümer — sie sind der Kern der nicht umlagefähigen Kosten.',
        },
        {
          q: 'Hausgeld 280 €, davon 190 € umlagefähig. Was bedeutet das für deine Kalkulation?',
          options: [
            '280 € Kosten pro Monat',
            '90 € echte Eigentümerkosten — die 190 € laufen über die Nebenkostenabrechnung durch',
            '0 € Kosten, alles zahlt der Mieter',
            '190 € Eigentümerkosten',
          ],
          correct: 1,
          explanation:
            'Nur der nicht umlagefähige Teil belastet deine Rechnung dauerhaft — bei korrekter Nebenkostenabrechnung.',
        },
        {
          q: 'Was deckt die Instandhaltungsrücklage der WEG ab?',
          options: [
            'Auch dein Badezimmer',
            'Nur das Gemeinschaftseigentum (Dach, Fassade, Heizungsanlage etc.)',
            'Die Mietausfälle aller Eigentümer',
            'Die Grundsteuer',
          ],
          correct: 1,
          explanation:
            'Sondereigentum (Bad, Böden, Innentüren) zahlst du selbst — dafür brauchst du eine eigene Reserve zusätzlich zur WEG-Rücklage.',
        },
        {
          q: 'Eine sehr niedrige Rücklagenzuführung bei einem Altbau bedeutet …',
          options: [
            '… niedrige Kosten für immer',
            '… ein Warnsignal: Sanierungen kommen trotzdem — dann als Sonderumlage',
            '… dass das Gebäude neuwertig ist',
            '… nichts, Rücklagen sind freiwillig',
          ],
          correct: 1,
          explanation:
            'Instandhaltung lässt sich verschieben, nicht vermeiden. Was nicht angespart wird, kommt später als Sonderumlage zurück.',
        },
      ],
    },
    {
      id: 'objektanalyse-6',
      title: 'Zustand & Sanierungsstau erkennen',
      intro:
        'Der Kaufpreis ist verhandelbar — die Bausubstanz nicht. Diese Lektion zeigt dir, wo die teuren Risiken stecken, wie du sie bei der Besichtigung findest und wie du sie einpreist.',
      sections: [
        {
          heading: 'Die großen Fünf: Wo es richtig teuer wird',
          body: 'Dach (Neueindeckung je nach Größe und Aufbau oft 20.000–60.000 € beim MFH), Heizung (Austausch je nach System 15.000–45.000 €; Alter über ~20 Jahre = Austausch einplanen, gesetzliche Anforderungen beachten), Fenster, Elektrik/Steigleitungen (alte Stränge und Stoffkabel = Kernsanierungsniveau) und Feuchtigkeit (Keller, Bad, Fassade — von harmloser Kondensation bis zum strukturellen Problem).\n\nBei ETWs zahlst du die großen Fünf über die WEG mit — deshalb Protokolle und Rücklage. Beim Haus gehören sie komplett dir. In beiden Fällen gilt: Diese Positionen entscheiden über fünfstellige Beträge, der Rest ist meist Kosmetik.',
        },
        {
          heading: 'Besichtigung mit System',
          body: 'Von außen nach innen: Dachhaut und Schornsteinköpfe (vom Gegenüber aus mit Zoom fotografieren), Fassade (Risse, abplatzender Putz, Feuchtespuren am Sockel), Fenster (Baujahr, Verglasung, Dichtungen). Im Keller: Geruch (muffig = Feuchte), Wände und Bodenkontakt, Zustand der Heizungsanlage samt Typenschild und Wartungsaufklebern. In der Wohnung: Bäder (Silikonfugen, Abwassergeruch, Wasserdruck), Fenster-Laibungen (Schimmelränder), Böden auf Ebenheit.\n\nStelle Fragen wie ein Gutachter: Wann wurde was zuletzt gemacht — mit Belegen? „Vor kurzem renoviert" ohne Rechnung ist eine Behauptung, keine Information.',
        },
        {
          heading: 'Energieausweis und energetischer Zustand',
          body: 'Der Energieausweis (Pflichtdokument!) zeigt dir Effizienzklasse und Energieträger. Schlechte Klassen (F–H) bedeuten: höhere Nebenkosten für Mieter (schwerer vermietbar), wahrscheinliche Sanierungspflichten und -kosten in der Zukunft — aber auch Einkaufschancen, wenn der Preis es abbildet und Förderung nutzbar ist.\n\nUnterscheide Bedarfs- und Verbrauchsausweis: Der Verbrauchsausweis spiegelt das Verhalten der bisherigen Bewohner (sparsame Rentner schönen die Werte), der Bedarfsausweis die Substanz. Bei alten, unsanierten Gebäuden ist der Bedarfsausweis der ehrlichere.',
        },
        {
          heading: 'Sanierungsstau bepreisen statt fürchten',
          body: 'Sanierungsstau ist kein Ausschlusskriterium — falsch bepreister Sanierungsstau ist eines. Der Dreisatz: (1) Positionen erfassen und grob schätzen (Handwerker-Richtwerte, im Zweifel Sachverständiger). (2) Puffer von 20–30 % auf die Schätzung — Baukosten überraschen fast nie nach unten. (3) Gesamtsumme vom Angebotspreis abziehen und als Verhandlungsgrundlage dokumentieren.\n\nAb ernsthaftem Kaufinteresse bei älteren Objekten: Investiere in eine Begehung mit Bausachverständigem (oft 400–800 €). Ein einziger übersehener Feuchteschaden kostet das Fünfzigfache.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die Checkliste zahlt die Küche',
        body: 'Doppelhaushälfte, Baujahr 1972, Angebotspreis 315.000 €. Befund der Besichtigung: Heizung von 2003 (Austausch fällig, geschätzt 28.000 € inkl. Umfeldmaßnahmen), Fenster zweifach verglast von 1994 (12.000 €), Dach 2015 erneuert (ok), Keller trocken. Schätzung 40.000 € + 25 % Puffer = 50.000 €. Vergleichspreise sanierter Objekte: ~340.000 €. Faires Gebot: 290.000 €. Nach Verhandlung Einigung bei 296.000 € — mit dokumentierter Begründung statt Bauchgefühl. Der Sachverständige (600 €) fand zusätzlich einen förderfähigen Sanierungsfahrplan.',
      },
      note: 'Die großen Fünf — Dach, Heizung, Fenster, Elektrik, Feuchtigkeit — entscheiden über fünfstellige Summen. Bei Besichtigungen systematisch prüfen, Belege verlangen, Energieausweis lesen. Sanierungsstau schätzen + 20–30 % Puffer = dein Verhandlungsargument.',
      wikiRefs: ['sanierungsstau', 'energieausweis', 'bausachverstaendiger'],
      quiz: [
        {
          q: 'Welche fünf Positionen verursachen die teuersten Sanierungen?',
          options: [
            'Tapeten, Teppich, Türklinken, Lampen, Briefkasten',
            'Dach, Heizung, Fenster, Elektrik, Feuchtigkeit',
            'Garten, Zaun, Garage, Keller, Dachrinne',
            'Küche, Bad, Flur, Balkon, Abstellraum',
          ],
          correct: 1,
          explanation:
            'Die „großen Fünf" bewegen jeweils fünfstellige Beträge — alles andere ist im Vergleich Kosmetik.',
        },
        {
          q: 'Warum ist bei alten, unsanierten Gebäuden der Bedarfsausweis aussagekräftiger?',
          options: [
            'Er ist billiger',
            'Der Verbrauchsausweis spiegelt nur das Verhalten der bisherigen Bewohner — der Bedarfsausweis bewertet die Substanz',
            'Er gilt länger',
            'Er enthält den Kaufpreis',
          ],
          correct: 1,
          explanation:
            'Sparsame Bewohner können einen energetisch schlechten Bau gut aussehen lassen. Der Bedarfsausweis rechnet gebäudebezogen.',
        },
        {
          q: 'Wie gehst du mit geschätzten Sanierungskosten von 40.000 € in der Verhandlung um?',
          options: [
            'Ignorieren — Sanierung ist Privatsache',
            'Plus 20–30 % Puffer rechnen und die Summe dokumentiert vom Angebotspreis abziehen',
            'Den Preis um genau 40.000 € × 3 senken',
            'Nur mündlich erwähnen',
          ],
          correct: 1,
          explanation:
            'Baukosten überraschen nach oben — der Puffer gehört dazu. Eine dokumentierte Schätzung ist das stärkste Verhandlungsargument.',
        },
        {
          q: 'Wann lohnt sich ein Bausachverständiger?',
          options: [
            'Nie — zu teuer',
            'Bei ernsthaftem Interesse an älteren Objekten mit unklarem Zustand: wenige hundert Euro gegen fünfstellige Risiken',
            'Nur bei Neubauten',
            'Nur wenn die Bank ihn verlangt',
          ],
          correct: 1,
          explanation:
            'Ein übersehener struktureller Schaden kostet ein Vielfaches des Honorars. Beim unklaren Altbau ist der Profi die günstigste Versicherung.',
        },
      ],
    },
    {
      id: 'objektanalyse-7',
      title: 'Lageanalyse in der Praxis: Daten, Tools, Begehung',
      intro:
        'In der Fundament-Gruppe hast du gelernt, was Lage bedeutet. Jetzt wird es praktisch: Mit welchen konkreten Quellen, Zahlen und Schritten analysierst du einen Standort in zwei Stunden?',
      sections: [
        {
          heading: 'Schritt 1: Der Datencheck am Schreibtisch (45 Minuten)',
          body: 'Bevölkerung & Trend: Statistisches Landesamt, Zensus-Daten, Wegweiser-Kommune-Portale — wächst der Ort über 5–10 Jahre? Wirtschaft: größte Arbeitgeber (Websuche + IHK), Arbeitslosenquote im Vergleich zum Landesschnitt, Hochschulen. Preise & Mieten: Mietspiegel der Stadt (falls vorhanden), Preisatlanten der Portale für Kauf- und Mietpreise im Zeitverlauf, Angebotsdichte.\n\nNotiere drei Zahlen pro Standort: Bevölkerungstrend in %, Mietniveau €/m², ortsüblicher Kaufpreisfaktor. Damit kannst du jedes Objekt sofort einordnen: Liegt es über oder unter Markt?',
        },
        {
          heading: 'Schritt 2: Die Karten-Analyse (30 Minuten)',
          body: 'Öffne die Online-Karte und prüfe ringförmig um das Objekt: Fußweg zu ÖPNV-Halt, Supermarkt, Grundschule, Arzt (jeweils unter ~10 Minuten = gut). Lärmquellen: Hauptstraßen, Bahntrassen, Gewerbegebiete, Einflugschneisen — Straßenansicht und Satellitenbild verraten viel. Städtische Planungsportale (Bebauungspläne, Lärmkartierung) zeigen, was sich ändern wird: Neubaugebiete, Straßenprojekte, Nachverdichtung.\n\nZukunft schlägt Gegenwart: Ein geplanter Bahnhalt oder Hochschul-Campus in 800 m Entfernung kann eine heutige B-Mikrolage in fünf Jahren aufwerten — und umgekehrt.',
        },
        {
          heading: 'Schritt 3: Die Begehung (45 Minuten + zweiter Besuch)',
          body: 'Gehe die Straße und das Viertel zu Fuß ab: Pflegezustand der Nachbargebäude, Leerstände (Wohnungen und Läden), geparkte Autos (grober Wohlstandsindikator), Sauberkeit, Lärm real erleben. Sprich mit Menschen: der Bäcker, Nachbarn, wartende Eltern — „Wie wohnt es sich hier?" liefert Informationen, die in keiner Statistik stehen.\n\nZweiter Besuch zu anderer Zeit (Werktag-Abend oder Wochenende) — Lagen haben Tagesformen. Wer 300.000 € investiert, kann zweimal hinfahren.',
        },
        {
          heading: 'Alles zusammenführen: Die Lage-Ampel',
          body: 'Fasse die Analyse in einer einfachen Ampel zusammen. Grün: wachsender/stabiler Standort, gemischte Wirtschaft, Mikrolage ohne K.-o.-Kriterium, Objekt unter oder am ortsüblichen Faktor. Gelb: einzelne Schwächen (z. B. stagnierende Stadt, aber starke Mikrolage) — kaufbar mit Preisabschlag und Puffer. Rot: schrumpfender Ort + Monostruktur + schwache Mikrolage — egal wie hoch die Papier-Rendite ist.\n\nWichtig: Die Ampel bewertet die Lage relativ zum Preis. Eine gelbe Lage zum grünen Preis kann das bessere Investment sein als eine grüne Lage zum roten Preis.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Stunden für 30.000 € Erkenntnis',
        body: 'Objekt in einer 60.000-Einwohner-Stadt, Angebotsfaktor 21. Datencheck: Bevölkerung +2 % in 10 Jahren, Fachhochschule wächst, zwei große Arbeitgeber plus Mittelstand, Mietniveau 8,90 €/m², ortsüblicher Faktor laut Vergleichsangeboten 19–20. Karte: 6 Minuten zum Bahnhof, aber: Lärmkartierung zeigt die Hauptverkehrsader direkt hinterm Haus. Begehung 18 Uhr: Durchgangsverkehr deutlich hörbar, Wohnung zur Straße. Ergebnis: gelbe Lage, Objekt über Marktfaktor → Gebot 8 % unter Angebot mit Begründung — oder weiterziehen. Die zwei Stunden Analyse haben eine Überzahlung von ~30.000 € verhindert.',
      },
      note: 'Lageanalyse in drei Schritten: Datencheck (Bevölkerung, Wirtschaft, Preise), Kartenanalyse (Erreichbarkeit, Lärm, Planungen), Begehung (Zustand, Gespräche, zweite Tageszeit). Ergebnis als Ampel — immer relativ zum Preis bewertet.',
      wikiRefs: ['mikrolage', 'makrolage', 'mietspiegel', 'bebauungsplan'],
      quiz: [
        {
          q: 'Welche drei Kennzahlen notierst du im Datencheck pro Standort?',
          options: [
            'Einwohnerzahl, Bürgermeister, Postleitzahl',
            'Bevölkerungstrend, Mietniveau €/m², ortsüblicher Kaufpreisfaktor',
            'Grundsteuer, Hebesatz, Gewerbesteuer',
            'Anzahl Makler, Anzahl Banken, Anzahl Notare',
          ],
          correct: 1,
          explanation:
            'Mit Trend, Mietniveau und Marktfaktor kannst du jedes Objekt des Standorts sofort einordnen: über oder unter Markt?',
        },
        {
          q: 'Was zeigen städtische Planungsportale (z. B. Bebauungspläne)?',
          options: [
            'Die Bonität der Nachbarn',
            'Wie sich die Umgebung verändern wird — Neubau, Straßenprojekte, Nachverdichtung',
            'Die Mietverträge im Viertel',
            'Die Hausgeldabrechnungen',
          ],
          correct: 1,
          explanation:
            'Lage ist dynamisch: Geplante Projekte werten auf oder ab — und stehen öffentlich einsehbar in den Planungsunterlagen.',
        },
        {
          q: 'Warum gehört ein zweiter Besuch zu anderer Tageszeit zur Analyse?',
          options: [
            'Um den Makler zu ärgern',
            'Weil Lärm, Verkehr und Atmosphäre je nach Zeit stark variieren — Lagen haben Tagesformen',
            'Weil das Grundbuchamt es verlangt',
            'Er ist überflüssig',
          ],
          correct: 1,
          explanation:
            'Werktag-Abend und Wochenende zeigen das echte Leben einer Straße — der Dienstag-11-Uhr-Eindruck ist oft der beste, den die Lage je macht.',
        },
        {
          q: 'Was bedeutet „gelbe Lage zum grünen Preis"?',
          options: [
            'Ein unkaufbares Objekt',
            'Eine Lage mit Schwächen, die durch einen entsprechend niedrigen Preis kompensiert werden — potenziell gutes Investment',
            'Ein Neubau im Grünen',
            'Eine Lage ohne Daten',
          ],
          correct: 1,
          explanation:
            'Die Ampel ist immer relativ zum Preis: Schwächen sind kaufbar, wenn sie eingepreist sind — Stärken sind es nicht zu jedem Preis.',
        },
      ],
    },
    {
      id: 'objektanalyse-8',
      title: 'Die Besichtigungs-Checkliste: Dein Werkzeug für den Termin',
      intro:
        'Die Besichtigung ist deine wichtigste Datenerhebung — 45 Minuten, die über hunderttausende Euro entscheiden. Diese Lektion gibt dir den kompletten Ablauf: Vorbereitung, Durchführung, Nachbereitung.',
      sections: [
        {
          heading: 'Vor dem Termin: Unterlagen und Fragenliste',
          body: 'Fordere vorab an: Grundriss mit Wohnflächenberechnung, Energieausweis, bei ETWs Teilungserklärung, die letzten 2–3 Protokolle, Wirtschaftsplan, aktuelle Hausgeldabrechnung und Rücklagenstand; bei Vermietung Mietvertrag samt letzter Mieterhöhung und Nachweis der Kaution. Was du vorab bekommst, liest du vorab — die Besichtigung ist zum Verifizieren da, nicht zum Erstlesen.\n\nSchreibe deine Fragenliste: offene Punkte aus dem Exposé, Alter der großen Fünf (Dach, Heizung, Fenster, Elektrik, Leitungen), Verkaufsgrund, Zeithorizont des Verkäufers, bekannte Mängel (Verkäufer müssen auf Nachfrage wahrheitsgemäß antworten — arglistig verschwiegene Mängel können auch nach Vertragsschluss haftungsrelevant sein).',
        },
        {
          heading: 'Beim Termin: Der 5-Zonen-Rundgang',
          body: 'Zone 1 — Umfeld (10 Min. vor dem Termin): Straße ablaufen, Nachbargebäude, Parken, Lärm. Zone 2 — Gebäudehülle: Dach mit Zoom-Foto, Fassade, Sockel, Fenster von außen, Zustand Eingangsbereich/Treppenhaus (verrät die WEG-Kultur). Zone 3 — Keller & Technik: Feuchtegeruch, Wände, Heizung (Typenschild fotografieren!), Wartungsaufkleber, Strangleitungen, Stromkasten. Zone 4 — Wohnung: Raum für Raum mit festem Blickprogramm — Fenster & Laibungen, Böden, Wände/Decken (Flecken, Risse), Bäder gründlich (Fugen, Druck, Abfluss), Balkon/Abdichtung. Zone 5 — Dokumente & Gespräch: Fragenliste durchgehen, Antworten notieren.\n\nFotografiere systematisch (jeder Raum + jedes Detail-Problem) — nach drei Besichtigungen verschwimmen die Erinnerungen.',
        },
        {
          heading: 'Bei vermieteten Objekten: Das Mietverhältnis prüfen',
          body: 'Der Mietvertrag ist Teil des Investments — du übernimmst ihn („Kauf bricht nicht Miete"). Prüfe: Kaltmiete und letzte Erhöhung (Luft nach oben zum Mietspiegel?), Staffel- oder Indexmiete, Kaution (muss dir bei Übergabe übertragen werden), Zahlungshistorie (Rückstände? Mahnungen?), Sondervereinbarungen (Kündigungsverzicht, Untervermietung, Tierhaltung).\n\nEin kurzer, respektvoller Eindruck vom Mieter ist Gold wert: Gepflegte Wohnung und sachliche Kommunikation sind mehr wert als 20 € mehr Miete auf dem Papier. Und: Eine deutlich unter Markt vermietete Wohnung ist kein schneller Gewinn — Mieterhöhungen sind gesetzlich gedeckelt (Kappungsgrenze), Realität schlägt Kalkulation.',
        },
        {
          heading: 'Nach dem Termin: Die 24-Stunden-Auswertung',
          body: 'Noch am selben Tag (Erinnerung frisch): Checkliste vervollständigen, Fotos sortieren, offene Fragen als Mail an den Makler. Dann die Kalkulation aktualisieren: Sanierungsschätzung einarbeiten, Miete gegen Mietspiegel prüfen, Netto-Rendite und Cashflow neu rechnen.\n\nEntscheide bewusst in drei Stufen: (A) Zweittermin mit Sachverständigem, (B) Angebot mit dokumentierter Begründung, (C) begründete Absage. Auch die Absage sauber kommunizieren — Makler merken sich professionelle Interessenten, und das nächste Exposé landet zuerst bei dir.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Das Typenschild, das 12.000 € wert war',
        body: 'Bei der Besichtigung einer ETW wirkt alles gepflegt. Im Keller fotografiert Deniz routinemäßig das Typenschild der Gastherme: Baujahr 2004. Der Makler hatte „Heizung regelmäßig gewartet" gesagt — stimmt, aber ein 21 Jahre alter Kessel ist trotzdem am Lebensende, und die Wartungsaufkleber zeigen zwei Störungseinsätze im letzten Winter. Deniz kalkuliert den Austausch (hier Sondereigentum laut Teilungserklärung!) mit 14.000 € inkl. Puffer und verhandelt den Preis um 12.000 € nach unten. Ohne den Keller-Stopp mit Foto hätte er den vollen Preis gezahlt — und die Rechnung zwei Jahre später trotzdem.',
      },
      note: 'Besichtigung = Verifikation, nicht Erstkontakt: Unterlagen vorher lesen, 5-Zonen-Rundgang (Umfeld, Hülle, Keller/Technik, Wohnung, Dokumente), alles fotografieren, Mietverhältnis prüfen, innerhalb von 24 Stunden auswerten und in A/B/C entscheiden.',
      legalHint: true,
      wikiRefs: ['besichtigung', 'mietvertrag', 'kappungsgrenze', 'teilungserklaerung'],
      quiz: [
        {
          q: 'Warum liest du die Unterlagen VOR der Besichtigung?',
          options: [
            'Um den Makler zu testen',
            'Damit der Termin zum Verifizieren dient — Fragen und Schwachstellen stehen dann schon fest',
            'Weil sie danach vernichtet werden',
            'Das ist egal',
          ],
          correct: 1,
          explanation:
            'Wer vorbereitet kommt, nutzt die knappe Zeit vor Ort für Prüfung und gezielte Fragen statt fürs Erstlesen von Dokumenten.',
        },
        {
          q: 'Was gehört zur Prüfung eines übernommenen Mietverhältnisses?',
          options: [
            'Nur die Miethöhe',
            'Miete & letzte Erhöhung, Kaution, Zahlungshistorie, Sondervereinbarungen — und ein Eindruck vom Mieter',
            'Die Lieblingsfarbe des Mieters',
            'Nichts — der Vertrag endet beim Verkauf',
          ],
          correct: 1,
          explanation:
            '„Kauf bricht nicht Miete": Du übernimmst den Vertrag mit allen Rechten und Pflichten — er ist Teil des Investments.',
        },
        {
          q: 'Eine Wohnung ist 30 % unter Mietspiegel vermietet. Was gilt?',
          options: [
            'Du kannst die Miete sofort auf Marktniveau anheben',
            'Mieterhöhungen sind gesetzlich gedeckelt (u. a. Kappungsgrenze) — das Potenzial hebt sich nur langsam',
            'Der Mieter muss ausziehen',
            'Der Kaufpreis steigt automatisch',
          ],
          correct: 1,
          explanation:
            'Erhöhungen im Bestand sind an Fristen und Grenzen gebunden. Unter-Markt-Miete ist langfristiges Potenzial, kein sofortiger Cashflow.',
        },
        {
          q: 'Was passiert in der 24-Stunden-Auswertung?',
          options: [
            'Nichts — erstmal sacken lassen',
            'Checkliste & Fotos sichern, Kalkulation aktualisieren, offene Fragen anfragen, Entscheidung A/B/C treffen',
            'Sofort den Notartermin buchen',
            'Das Exposé löschen',
          ],
          correct: 1,
          explanation:
            'Frische Erinnerung + aktualisierte Zahlen = fundierte Entscheidung: Zweittermin, begründetes Angebot oder professionelle Absage.',
        },
      ],
    },
  ],
}
