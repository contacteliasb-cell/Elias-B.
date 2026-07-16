import type { ModuleGroup } from './types'

export const finanzierung: ModuleGroup = {
  slug: 'finanzierung',
  title: 'Finanzierung',
  description:
    'Die Finanzierung entscheidet über Machbarkeit und Rendite. Hier lernst du, wie Banken denken, wie Darlehen funktionieren und wie du dich zum Wunschkunden der Bank machst.',
  lessons: [
    {
      id: 'finanzierung-1',
      title: 'Eigenkapital & Bonität: Deine Ausgangsposition',
      intro:
        'Bevor die Bank über dein Objekt spricht, spricht sie über dich. Eigenkapital und Bonität sind die zwei Säulen deiner Verhandlungsposition — beide kannst du aktiv aufbauen.',
      sections: [
        {
          heading: 'Was als Eigenkapital zählt',
          body: 'Eigenkapital ist alles, was du selbst in die Finanzierung einbringst: Guthaben auf Konten und Depots (nach Verkauf), Bausparguthaben, gegebenenfalls bereits abbezahlte Immobilien als Zusatzsicherheit. Auch Eigenleistung („Muskelhypothek") wird bei Sanierungen teils anerkannt — konservativ und nur in realistischem Umfang.\n\nAls Orientierung verlangen viele Banken, dass du mindestens die Kaufnebenkosten (etwa 9–12 %) aus eigener Tasche zahlst. Mehr Eigenkapital senkt den Beleihungsauslauf — das Verhältnis von Darlehen zu Objektwert — und damit fast immer auch den Zinssatz. Zwischen 90 % und 80 % Auslauf liegen oft spürbare Zinsunterschiede.',
        },
        {
          heading: 'Bonität: So liest dich die Bank',
          body: 'Die Bank prüft dein Nettoeinkommen und dessen Stabilität (unbefristete Anstellung, Probezeit vorbei, bei Selbstständigen meist zwei bis drei Jahresabschlüsse), deine bestehenden Verpflichtungen (Kredite, Leasing, Unterhalt) und deine Schufa-Daten.\n\nDazu kommt die Haushaltsrechnung: Einnahmen minus Lebenshaltungspauschalen minus bestehende Raten. Was übrig bleibt, ist die Kapitaldienstfähigkeit — die maximale Rate, die du dir nach Bankenlogik leisten kannst. Mieteinnahmen des Kaufobjekts werden angerechnet, aber nur zu einem Teil (häufig 70–80 %), als Puffer für Ausfall und Kosten.',
        },
        {
          heading: 'Bonität aktiv aufbauen',
          body: 'Zwölf bis vierundzwanzig Monate vor dem geplanten Kauf kannst du viel bewegen: Konsumkredite und Ratenkäufe tilgen und künftig vermeiden (jede 200-€-Rate frisst ein Vielfaches an Darlehenspotenzial). Dispo nicht nutzen — dauerhafte Kontoüberziehung ist ein rotes Tuch. Schufa-Selbstauskunft einholen und Fehler korrigieren lassen.\n\nGleichzeitig: Sparquote sichtbar machen. Ein Dauerauftrag aufs Tagesgeld erzählt der Bank eine Geschichte von Disziplin. Und wenn ein Jobwechsel ansteht: entweder vor der Probezeit finanzieren oder bis nach ihr warten — mitten in der Probezeit finanziert kaum eine Bank gern.',
        },
        {
          heading: 'Wie viel Immobilie kannst du dir leisten?',
          body: 'Eine grobe Selbstprüfung vor jedem Banktermin: Nimm deine mögliche Sparrate plus die erwartete (konservativ gekürzte) Kaltmiete des Objekts. Das ist die Rate, die du dauerhaft stemmen kannst — ohne dass ein Urlaub oder eine Autoreparatur das System kippt.\n\nRückwärts gerechnet: Bei beispielhaft 3,8 % Zins und 2 % Tilgung entspricht jede 100 € Monatsrate rund 20.700 € Darlehen. Wer 900 € Rate tragen kann, bewegt also etwa 186.000 € Darlehen. Diese Überschlagsrechnung ersetzt kein Bankgespräch, verhindert aber, dass du Objekte prüfst, die nie realistisch waren.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Bewerber, gleiche Zahlen — fast',
        body: 'Nina und Tom verdienen beide 3.200 € netto. Nina: 45.000 € Eigenkapital, keine Kredite, Sparrate 800 €/Monat seit drei Jahren. Tom: 12.000 € Eigenkapital, Autofinanzierung mit 380 €/Monat, Dispo regelmäßig im Minus. Für dieselbe Wohnung (250.000 €) bekommt Nina eine Zusage mit beispielhaft 3,7 % — Tom erhält eine Absage: Seine Haushaltsrechnung trägt die Rate nach Abzug der Autorate nicht, und der genutzte Dispo kostet ihn das Vertrauen. Toms schnellster Weg zur Immobilie ist nicht ein anderes Objekt, sondern 18 Monate Bonitäts-Aufbau.',
      },
      note: 'Die Bank bewertet dich vor dem Objekt: Eigenkapital (mindestens die Nebenkosten) und saubere Bonität (keine Konsumkredite, kein Dispo, stabile Sparquote) sind die Basis jeder guten Finanzierung — und beide lassen sich in 12–24 Monaten gezielt aufbauen.',
      wikiRefs: ['eigenkapital', 'bonitaet', 'schufa', 'beleihungsauslauf', 'kapitaldienst'],
      quiz: [
        {
          q: 'Welchen Anteil solltest du als Faustregel mindestens aus Eigenkapital zahlen?',
          options: [
            'Gar nichts — 110 %-Finanzierungen sind der Standard',
            'Mindestens die Kaufnebenkosten (ca. 9–12 %)',
            'Mindestens 50 % des Kaufpreises',
            'Genau eine Jahreskaltmiete',
          ],
          correct: 1,
          explanation:
            'Die meisten Banken erwarten, dass die Nebenkosten aus eigener Tasche kommen. Mehr Eigenkapital senkt zusätzlich den Zins über den geringeren Beleihungsauslauf.',
        },
        {
          q: 'Warum rechnet die Bank Mieteinnahmen nur zu 70–80 % an?',
          options: [
            'Wegen der Grunderwerbsteuer',
            'Als Sicherheitspuffer für Mietausfall und Bewirtschaftungskosten',
            'Weil Mieteinnahmen steuerfrei sind',
            'Das ist gesetzlich vorgeschrieben',
          ],
          correct: 1,
          explanation:
            'Leerstand, Mietausfall und nicht umlagefähige Kosten schmälern die real verfügbare Miete — die Kürzung bildet dieses Risiko ab.',
        },
        {
          q: 'Welche Maßnahme verbessert deine Bonität vor einem Immobilienkauf am ehesten?',
          options: [
            'Einen zusätzlichen Konsumkredit aufnehmen, um Zahlungsfähigkeit zu zeigen',
            'Konsumkredite tilgen, Dispo meiden und eine sichtbare Sparquote aufbauen',
            'Möglichst viele Kreditkarten beantragen',
            'Den Job kurz vor dem Banktermin wechseln',
          ],
          correct: 1,
          explanation:
            'Bestehende Raten reduzieren deine Kapitaldienstfähigkeit direkt; Dispo-Nutzung signalisiert Unordnung. Tilgen, meiden, sparen — in dieser Reihenfolge.',
        },
        {
          q: 'Bei 3,8 % Zins und 2 % Tilgung: Wie viel Darlehen entspricht grob einer Rate von 600 €/Monat?',
          options: ['ca. 62.000 €', 'ca. 124.000 €', 'ca. 250.000 €', 'ca. 36.000 €'],
          correct: 1,
          explanation:
            'Jahresrate = Darlehen × 5,8 %. Also Darlehen = (600 × 12) ÷ 0,058 ≈ 124.000 €. Die 100-€-Faustregel: ~20.700 € Darlehen je 100 € Rate.',
        },
      ],
    },
    {
      id: 'finanzierung-2',
      title: 'Das Annuitätendarlehen verstehen',
      intro:
        'Über 90 % aller Immobilienfinanzierungen in Deutschland sind Annuitätendarlehen. Wer diese eine Darlehensform wirklich versteht, versteht praktisch jede Baufinanzierung.',
      sections: [
        {
          heading: 'Das Prinzip: Eine Rate, zwei Bestandteile',
          body: 'Beim Annuitätendarlehen zahlst du über die gesamte Zinsbindung eine konstante Monatsrate — die Annuität. Sie besteht aus zwei Teilen: Zins (der Preis für das geliehene Geld) und Tilgung (die eigentliche Rückzahlung).\n\nDie Startaufteilung legst du bei Abschluss fest, zum Beispiel 3,8 % Zins plus 2 % anfängliche Tilgung = 5,8 % Annuität. Bei 200.000 € Darlehen sind das 11.600 € pro Jahr, also 966,67 € pro Monat — jeden Monat gleich, planbar über die volle Zinsbindung.',
        },
        {
          heading: 'Der Tilgungsturbo: Warum die Rückzahlung immer schneller wird',
          body: 'Hier liegt die Eleganz des Modells: Zinsen fallen immer nur auf die Restschuld an. Mit jeder Rate sinkt die Restschuld ein wenig — dadurch sinkt der Zinsanteil der nächsten Rate, und weil die Gesamtrate konstant bleibt, steigt automatisch der Tilgungsanteil.\n\nIm ersten Monat unseres Beispiels: 633 € Zins, 333 € Tilgung. Nach zehn Jahren hat sich das Verhältnis deutlich verschoben — die Tilgung übernimmt einen immer größeren Teil der Rate. Die Rückzahlung beschleunigt sich von selbst, wie ein Schneeball, der bergab rollt.',
        },
        {
          heading: 'Zinsbindung und Restschuld',
          body: 'Der Zinssatz wird für eine feste Zeit vereinbart — üblich sind 10, 15 oder 20 Jahre. Am Ende der Zinsbindung ist das Darlehen fast nie vollständig getilgt: Es bleibt eine Restschuld, die du über eine Anschlussfinanzierung neu verhandeln musst — zum dann gültigen Marktzins.\n\nDiese Restschuld ist die zentrale Risikogröße deiner Finanzierung: Je höher sie am Ende der Bindung ist, desto stärker trifft dich ein möglicher Zinsanstieg. Deshalb gehört in jede Kalkulation ein Stresstest: Was passiert mit der Rate, wenn die Anschlussfinanzierung beispielhaft 2 Prozentpunkte teurer wird?',
        },
        {
          heading: 'Sondertilgung und Tilgungssatzwechsel',
          body: 'Zwei Vertragsbausteine geben dir Flexibilität: Ein Sondertilgungsrecht (üblich: bis 5 % der Darlehenssumme pro Jahr) erlaubt außerplanmäßige Rückzahlungen — etwa aus Boni oder Erbschaften — und drückt die Restschuld überproportional. Ein Tilgungssatzwechsel-Recht erlaubt, die Tilgung während der Laufzeit anzupassen, wenn sich dein Einkommen ändert.\n\nBeide Optionen sind oft kostenlos oder günstig — aber nur, wenn sie bei Abschluss vereinbart werden. Danach wird es schwierig. In der Verhandlung mit der Bank gehören sie deshalb auf deine Checkliste.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: 200.000 € über zehn Jahre',
        body: 'Darlehen 200.000 €, beispielhaft 3,8 % Zins, 2 % anfängliche Tilgung, Rate 966,67 €/Monat. Jahr 1: rund 7.560 € Zinsen, 4.040 € Tilgung. Jahr 10: nur noch etwa 5.700 € Zinsen, dafür über 5.900 € Tilgung — der Tilgungsanteil hat den Zinsanteil überholt. Nach 10 Jahren Restschuld: rund 151.000 €. Hätte Leon zusätzlich jedes Jahr 4.000 € sondergetilgt, läge die Restschuld bei nur noch etwa 103.000 € — und jede künftige Zinserhöhung träfe ihn auf einer um ein Drittel kleineren Basis.',
      },
      note: 'Annuität = Zins + Tilgung, konstant über die Zinsbindung. Der Tilgungsanteil wächst automatisch, weil Zinsen nur auf die Restschuld anfallen. Die Restschuld am Ende der Bindung ist deine wichtigste Risikogröße — Sondertilgungsrechte sind ihr bestes Gegenmittel.',
      wikiRefs: ['annuitaetendarlehen', 'tilgung', 'zinsbindung', 'restschuld', 'sondertilgung'],
      quiz: [
        {
          q: 'Warum steigt beim Annuitätendarlehen der Tilgungsanteil automatisch?',
          options: [
            'Weil die Bank die Rate jedes Jahr erhöht',
            'Weil Zinsen nur auf die sinkende Restschuld anfallen und die Gesamtrate konstant bleibt',
            'Weil die Inflation die Tilgung erhöht',
            'Er steigt nicht — er bleibt konstant',
          ],
          correct: 1,
          explanation:
            'Sinkende Restschuld → sinkender Zinsanteil → bei konstanter Rate wächst der Tilgungsanteil. Das ist der eingebaute „Tilgungsturbo".',
        },
        {
          q: 'Darlehen 150.000 €, Zins 4,0 %, anfängliche Tilgung 2,0 %. Wie hoch ist die Monatsrate?',
          options: ['500 €', '750 €', '900 €', '1.200 €'],
          correct: 1,
          explanation: 'Annuität = 6 % von 150.000 € = 9.000 €/Jahr = 750 €/Monat.',
        },
        {
          q: 'Was passiert am Ende der Zinsbindung?',
          options: [
            'Das Darlehen ist automatisch vollständig getilgt',
            'Die Restschuld braucht eine Anschlussfinanzierung zum dann gültigen Marktzins',
            'Die Bank erlässt die Restschuld',
            'Die Rate halbiert sich',
          ],
          correct: 1,
          explanation:
            'Die Zinsbindung fixiert nur den Zins, nicht die Volltilgung. Die verbleibende Restschuld wird neu finanziert — zum Zinsniveau von dann.',
        },
        {
          q: 'Welchen Effekt haben regelmäßige Sondertilgungen?',
          options: [
            'Sie verlängern die Laufzeit',
            'Sie senken die Restschuld überproportional und reduzieren das Anschlusszins-Risiko',
            'Sie erhöhen den Zinssatz',
            'Sie sind in Deutschland verboten',
          ],
          correct: 1,
          explanation:
            'Jede Sondertilgung senkt die Basis, auf die künftig Zinsen anfallen — der Zinsspar-Effekt kumuliert über die Restlaufzeit.',
        },
      ],
    },
    {
      id: 'finanzierung-3',
      title: 'Zins & Tilgung strategisch wählen',
      intro:
        'Zinsbindung 10 oder 20 Jahre? Tilgung 1,5 oder 3 %? Diese Stellschrauben bestimmen Rate, Restschuld und Risiko — und die richtige Antwort hängt von deiner Strategie ab, nicht von Pauschalregeln.',
      sections: [
        {
          heading: 'Die Tilgungshöhe: Sicherheit gegen Cashflow',
          body: 'Hohe anfängliche Tilgung (2,5–3 %+) baut schnell Vermögen auf und minimiert die Restschuld — kostet aber monatlichen Cashflow. Niedrige Tilgung (1–1,5 %) maximiert den laufenden Überschuss und die Kapitaldienstfähigkeit für weitere Käufe — lässt die Schuld aber lange hoch und macht dich abhängiger vom Zinsniveau der Zukunft.\n\nDie ehrliche Antwort: Es gibt keinen objektiv richtigen Wert. Sicherheitsorientierte Eigennutzer fahren mit hoher Tilgung gut. Wachstumsorientierte Investoren wählen oft bewusst niedrigere Tilgung — aber nur, wenn sie das Zinsänderungsrisiko verstanden haben und Puffer halten.',
        },
        {
          heading: 'Die Zinsbindung: Wie lange kaufst du Planbarkeit?',
          body: 'Eine längere Zinsbindung (15–20 Jahre) kostet meist einen Zinsaufschlag, kauft dafür aber Planbarkeit: Deine Rate steht für zwei Jahrzehnte fest. Eine kurze Bindung (5–10 Jahre) ist günstiger, wirft dich aber früher auf den dann aktuellen Markt zurück.\n\nWichtig zu kennen: § 489 BGB gibt dir bei Darlehen mit längerer Bindung ein gesetzliches Sonderkündigungsrecht — 10 Jahre nach Vollauszahlung kannst du mit 6 Monaten Frist kündigen. Eine 20-jährige Bindung ist also asymmetrisch zu deinen Gunsten: Fallen die Zinsen, steigst du nach 10 Jahren aus; steigen sie, bleibst du im günstigen Vertrag.',
        },
        {
          heading: 'Effektivzins, Sollzins und die Vergleichsfalle',
          body: 'Der Sollzins ist der reine Zinspreis; der Effektivzins enthält zusätzlich die wesentlichen Kostenbestandteile und die Verrechnungslogik — vergleiche Angebote deshalb immer über den Effektivzins bei gleicher Zinsbindung.\n\nAchte auf Nebenschauplätze: Bereitstellungszinsen (fällig, wenn du das Darlehen nicht sofort abrufst — relevant bei Sanierung oder Neubau), Kosten für Sondertilgungsoptionen und die Frage, ob die Bank einen Teilabruf erlaubt. Ein optisch billiges Angebot kann über diese Positionen teuer werden.',
        },
        {
          heading: 'Der Stresstest gehört in jede Kalkulation',
          body: 'Bevor du unterschreibst, rechne drei Szenarien: (1) Basis — alles läuft wie geplant. (2) Zinsschock — die Anschlussfinanzierung kostet beispielhaft 2 Prozentpunkte mehr: Trägt die Miete die neue Rate noch? (3) Stressfall — drei Monate Leerstand plus eine Reparatur von 5.000 € im selben Jahr: Reicht dein Puffer?\n\nWenn das Objekt nur im Basisszenario funktioniert, ist es zu knapp kalkuliert. Diese Disziplin unterscheidet Investieren von Hoffen — und sie ist genau das, was eine gute Bank in deinen Unterlagen sehen will.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Strategien, ein Darlehen',
        body: '240.000 € Darlehen. Strategie A („Sicherheit"): 15 Jahre Bindung zu beispielhaft 4,0 %, 3 % Tilgung → Rate 1.400 €, Restschuld nach 15 Jahren ca. 92.000 €. Strategie B („Cashflow"): 10 Jahre zu 3,7 %, 1,5 % Tilgung → Rate 1.040 €, Restschuld nach 10 Jahren ca. 197.000 €. B spart 360 € Rate im Monat — steht aber nach 10 Jahren mit fast voller Schuld am Markt: Bei einem Anschlusszins von 5,5 % springt die Rate auf über 1.240 €. Wer B wählt, sollte die Ersparnis nicht verkonsumieren, sondern als Sondertilgung oder Rücklage arbeiten lassen.',
      },
      note: 'Tilgung und Zinsbindung sind Strategie-Entscheidungen: hohe Tilgung = Sicherheit, niedrige = Cashflow und Risiko. Lange Bindungen sind dank § 489 BGB (Kündigungsrecht nach 10 Jahren) asymmetrisch zu deinen Gunsten. Und: kein Abschluss ohne Zinsschock-Stresstest.',
      legalHint: true,
      wikiRefs: ['effektivzins', 'zinsbindung', 'bereitstellungszinsen', 'anschlussfinanzierung'],
      quiz: [
        {
          q: 'Welches gesetzliche Recht macht lange Zinsbindungen attraktiv?',
          options: [
            'Das Recht auf Zinssenkung bei fallenden Marktzinsen',
            'Das Sonderkündigungsrecht nach § 489 BGB: 10 Jahre nach Vollauszahlung mit 6 Monaten Frist',
            'Das Recht auf kostenlose Sondertilgung in unbegrenzter Höhe',
            'Die automatische Verlängerung zum alten Zins',
          ],
          correct: 1,
          explanation:
            'Nach 10 Jahren kannst du einseitig raus — die Bank nicht. Fallende Zinsen nutzt du, steigende sitzt du im Altvertrag aus.',
        },
        {
          q: 'Über welchen Wert vergleichst du Finanzierungsangebote korrekt?',
          options: ['Sollzins', 'Effektivzins bei gleicher Zinsbindung', 'Monatsrate', 'Bereitstellungszins'],
          correct: 1,
          explanation:
            'Der Effektivzins enthält die wesentlichen Kosten und macht Angebote vergleichbar — aber nur bei gleicher Zinsbindungsdauer.',
        },
        {
          q: 'Was ist der Hauptnachteil einer sehr niedrigen anfänglichen Tilgung?',
          options: [
            'Die Monatsrate ist höher',
            'Die Restschuld bleibt lange hoch — das Zinsänderungsrisiko bei der Anschlussfinanzierung steigt',
            'Die Bank verbietet Sondertilgungen',
            'Die Zinsbindung verkürzt sich automatisch',
          ],
          correct: 1,
          explanation:
            'Wenig Tilgung heißt viel Restschuld am Ende der Bindung — und die wird zum dann gültigen Zins refinanziert. Das Risiko verschiebt sich in die Zukunft.',
        },
        {
          q: 'Was gehört in einen seriösen Finanzierungs-Stresstest?',
          options: [
            'Nur das Best-Case-Szenario',
            'Zinsanstieg bei der Anschlussfinanzierung sowie Leerstand + Reparatur im selben Jahr',
            'Die Annahme jährlicher Mietsteigerungen von 5 %',
            'Der Verzicht auf Instandhaltungskosten',
          ],
          correct: 1,
          explanation:
            'Ein Investment muss auch im realistischen Negativ-Szenario tragfähig sein. Zinsschock und Ausfalljahr sind die beiden wichtigsten Tests.',
        },
      ],
    },
    {
      id: 'finanzierung-4',
      title: 'Beleihungswert & Beleihungsauslauf: Die Objektbrille der Bank',
      intro:
        'Die Bank sieht dein Traumobjekt nüchterner als du: Sie fragt, was es im Ernstfall wert wäre. Wer Beleihungswert und Beleihungsauslauf versteht, versteht plötzlich jedes Zinsangebot.',
      sections: [
        {
          heading: 'Der Beleihungswert: Der vorsichtige Zwilling des Kaufpreises',
          body: 'Der Beleihungswert ist der Wert, den die Bank dem Objekt langfristig und vorsichtig beimisst — als Antwort auf die Frage: „Was bekämen wir verlässlich, wenn wir es verwerten müssten?" Er liegt praktisch immer unter dem Kaufpreis, häufig um 10–20 %.\n\nDie Bank ermittelt ihn je nach Objekt über Vergleichswerte, den Sachwert (Boden + Gebäude) oder — bei Renditeobjekten — den Ertragswert aus den nachhaltigen Mieteinnahmen. Für dich heißt das: Nicht alles, was du zahlst, akzeptiert die Bank als Sicherheit.',
        },
        {
          heading: 'Der Beleihungsauslauf: Deine wichtigste Zins-Stellschraube',
          body: 'Der Beleihungsauslauf (Loan-to-Value, LTV) ist das Verhältnis von Darlehen zu Beleihungswert. Banken staffeln ihre Zinsen danach: Bis 60 % Auslauf gibt es die besten Konditionen (das ist die klassische Pfandbrief-Grenze), bis 80 % gute, darüber wird jeder Schritt teurer.\n\nDaraus folgt eine oft übersehene Möglichkeit: Manchmal lohnt es sich, mit ein paar tausend Euro mehr Eigenkapital gezielt unter eine Schwelle (etwa 80 %) zu rutschen — der Zinsvorteil über die gesamte Laufzeit kann den Mehreinsatz deutlich übersteigen.',
        },
        {
          heading: '100 %- und 110 %-Finanzierung: Möglich, aber teuer',
          body: 'Eine Vollfinanzierung (100 % des Kaufpreises) oder gar eine 110 %-Finanzierung (inklusive Nebenkosten) ist bei sehr guter Bonität möglich — aber die Bank lässt sich das Risiko über deutliche Zinsaufschläge bezahlen, und die Auswahl an Instituten schrumpft stark.\n\nRechne ehrlich: Der Zinsaufschlag einer 100 %-Finanzierung kann die Rendite eines durchschnittlichen Objekts komplett auffressen. Für die meisten Einsteiger ist der bessere Weg: erst Eigenkapital für die Nebenkosten plus einen Puffer aufbauen, dann kaufen.',
        },
        {
          heading: 'Grundschuld: So sichert sich die Bank',
          body: 'Als Sicherheit lässt sich die Bank eine Grundschuld ins Grundbuch eintragen — ein Verwertungsrecht am Objekt, unabhängig vom konkreten Darlehensstand. Sie bleibt oft auch nach der Tilgung bestehen („stehen lassen") und kann für künftige Finanzierungen wiederverwendet werden, was Notarkosten spart.\n\nFür dich wichtig: Die Grundschuld ist der Grund, warum Immobilienkredite so viel günstiger sind als Konsumkredite. Die Bank hat handfeste Sicherheit — und genau deshalb schaut sie sich das Objekt so genau an. Ein Objekt, das die Bank nicht mag, solltest auch du dir zweimal ansehen.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der 5.000-€-Trick unter die 80 %-Grenze',
        body: 'Kaufpreis 230.000 €, Beleihungswert laut Bank 210.000 €. Mit 60.000 € Eigenkapital (davon ~23.000 € für Nebenkosten) braucht Sara ein Darlehen von 193.000 € → Auslauf 92 % → Angebot beispielhaft 4,35 %. Ihr Berater rechnet nach: Mit 24.000 € mehr Darlehenssenkung käme sie auf 80 % — zu viel. Aber es gibt eine Zwischenstufe bei 90 % (4,15 %): Dafür reichen 5.000 € zusätzliches Eigenkapital von den Großeltern. Ersparnis über 15 Jahre Zinsbindung: rund 5.600 € — mehr als der Einsatz, zusätzlich sinkt die Restschuld.',
      },
      note: 'Beleihungswert = der vorsichtige Bankwert (meist 10–20 % unter Kaufpreis). Beleihungsauslauf = Darlehen ÷ Beleihungswert — die wichtigste Zins-Stellschraube. Zinsstaffeln bei 60/80/90 % kennen und gegebenenfalls gezielt unter eine Schwelle finanzieren.',
      wikiRefs: ['beleihungswert', 'beleihungsauslauf', 'grundschuld', 'ertragswertverfahren'],
      quiz: [
        {
          q: 'Warum liegt der Beleihungswert meist unter dem Kaufpreis?',
          options: [
            'Weil die Bank den Markt nicht kennt',
            'Weil die Bank vorsichtig bewertet: Was wäre im Verwertungsfall verlässlich erzielbar?',
            'Weil das Finanzamt es vorschreibt',
            'Weil Makler die Preise senken',
          ],
          correct: 1,
          explanation:
            'Der Beleihungswert ist bewusst konservativ — er soll auch in schwachen Marktphasen als Sicherheit taugen.',
        },
        {
          q: 'Darlehen 160.000 €, Beleihungswert 200.000 €. Wie hoch ist der Beleihungsauslauf?',
          options: ['125 %', '80 %', '60 %', '40 %'],
          correct: 1,
          explanation: '160.000 ÷ 200.000 = 0,8 → 80 %. Genau an einer typischen Zinsstaffel-Grenze.',
        },
        {
          q: 'Warum kann es sich lohnen, gezielt unter eine Auslauf-Schwelle (z. B. 80 %) zu kommen?',
          options: [
            'Weil dann die Grunderwerbsteuer entfällt',
            'Weil der niedrigere Zinssatz über die Laufzeit mehr sparen kann, als das zusätzliche Eigenkapital kostet',
            'Weil die Bank dann auf die Grundschuld verzichtet',
            'Es lohnt sich nie',
          ],
          correct: 1,
          explanation:
            'Zinsstaffeln machen Schwellen wertvoll: Ein kleiner zusätzlicher Eigenkapitaleinsatz kann die Kondition der gesamten Finanzierung verbessern.',
        },
        {
          q: 'Was ist die Grundschuld?',
          options: [
            'Eine Steuer auf Grundstücke',
            'Das im Grundbuch eingetragene Verwertungsrecht der Bank als Kreditsicherheit',
            'Die erste Rate des Darlehens',
            'Ein anderes Wort für Restschuld',
          ],
          correct: 1,
          explanation:
            'Die Grundschuld sichert die Bank am Objekt ab — der Grund, warum Immobilienkredite deutlich günstiger sind als unbesicherte Kredite.',
        },
      ],
    },
    {
      id: 'finanzierung-5',
      title: 'Das Bankgespräch: Vorbereitung, Ablauf, Verhandlung',
      intro:
        'Ein Finanzierungsgespräch ist kein Bittgang, sondern ein Geschäftstermin zwischen zwei Parteien, die beide verdienen wollen. Mit der richtigen Vorbereitung verhandelst du auf Augenhöhe.',
      sections: [
        {
          heading: 'Die Unterlagen-Mappe: Dein stärkstes Argument',
          body: 'Zur Person: die letzten drei Gehaltsabrechnungen, der letzte Steuerbescheid, Eigenkapitalnachweise (Kontoauszüge, Depot), Ausweiskopie, Selbstauskunft, Übersicht bestehender Kredite. Selbstständige: zusätzlich BWAs und zwei bis drei Jahresabschlüsse.\n\nZum Objekt: Exposé, Grundbuchauszug, Wohnflächenberechnung, Grundrisse, Energieausweis, bei ETWs Teilungserklärung und Protokolle, bei Vermietung der Mietvertrag, dazu Fotos. Wer diese Mappe vollständig und sortiert einreicht, signalisiert genau das, was Banken lieben: Ordnung und Verlässlichkeit — und beschleunigt die Zusage oft um Wochen.',
        },
        {
          heading: 'Vergleichen: Hausbank, Direktbank, Vermittler',
          body: 'Hole immer mehrere Angebote ein. Die Hausbank kennt dich, ist aber selten die günstigste. Direktbanken bieten oft scharfe Konditionen bei Standardfällen. Finanzierungsvermittler (etwa große Plattformen) fragen Dutzende Banken parallel an und kosten dich in der Regel nichts — sie werden von der Bank provisioniert.\n\nWichtig fürs Timing: Konzentriere die Anfragen auf einen kurzen Zeitraum. Kreditanfragen im Abstand weniger Wochen werden von der Schufa als ein Vorgang gewertet („Konditionenanfrage" statt „Kreditanfrage" — achte darauf, dass Banken sie korrekt einstellen).',
        },
        {
          heading: 'Verhandlungspunkte jenseits des Zinssatzes',
          body: 'Der Zins ist verhandelbar — aber oft ist bei den Nebenbedingungen mehr zu holen: kostenfreie Sondertilgung (5 % p. a.), Tilgungssatzwechsel, lange bereitstellungszinsfreie Zeit (12 statt 3 Monate — wichtig bei Sanierungen), Teilauszahlungen ohne Aufschlag.\n\nVerhandle mit Alternativen in der Hand: „Bank X bietet mir 4,05 % mit 5 % Sondertilgung — können Sie das schlagen?" ist die wirksamste Frage im Gespräch. Ohne Vergleichsangebot ist es keine Verhandlung, sondern ein Wunschkonzert.',
        },
        {
          heading: 'Was du im Gespräch NICHT tun solltest',
          body: 'Nichts beschönigen: Banken prüfen alles nach — eine „vergessene" Kreditrate oder geschönte Selbstauskunft zerstört das Vertrauen endgültig und kann rechtliche Folgen haben. Keine Fantasie-Mieten präsentieren: Nimm belegbare Ist-Mieten oder den Mietspiegel, nicht die Hoffnung.\n\nUnd: Lass dir Zeit. Eine Finanzierungszusage ist typischerweise mehrere Wochen gültig — du musst nicht am Tisch unterschreiben. Prüfe zu Hause in Ruhe Effektivzins, Nebenbedingungen und Widerrufsbelehrung. Seriöse Banken respektieren das; Druck ist auch hier ein Warnsignal.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: 0,25 Punkte durch drei Angebote',
        body: 'David braucht 185.000 €. Hausbank: beispielhaft 4,3 %, keine kostenfreie Sondertilgung. Vermittlerplattform: bestes Angebot 4,05 % mit 5 % Sondertilgung p. a. Direktbank: 4,0 %, aber ohne Tilgungssatzwechsel. David geht mit den Angeboten zurück zur Hausbank — die will den Kunden nicht verlieren und bietet final 4,05 % inklusive Sondertilgung und Tilgungssatzwechsel. Ersparnis gegenüber dem ersten Angebot: rund 460 € pro Jahr, über 10 Jahre Zinsbindung etwa 4.600 € — für insgesamt vier Stunden Aufwand.',
      },
      note: 'Vollständige Unterlagen-Mappe + mindestens drei Vergleichsangebote + Verhandlung der Nebenbedingungen (Sondertilgung, Tilgungswechsel, Bereitstellungsfreiheit) — dieses Dreieck entscheidet über tausende Euro. Und niemals beschönigen: Vertrauen ist deine Währung bei der Bank.',
      wikiRefs: ['selbstauskunft', 'sondertilgung', 'bereitstellungszinsen', 'schufa'],
      quiz: [
        {
          q: 'Warum solltest du Finanzierungsanfragen zeitlich bündeln?',
          options: [
            'Damit die Banken sich absprechen können',
            'Damit die Schufa mehrere Anfragen als einen Vorgang wertet und deine Bonität nicht leidet',
            'Weil Zinsen nur montags gelten',
            'Um Bereitstellungszinsen zu sparen',
          ],
          correct: 1,
          explanation:
            'Gebündelte Konditionenanfragen in kurzem Zeitraum gelten als ein Finanzierungsvorhaben — verstreute Kreditanfragen können das Scoring verschlechtern.',
        },
        {
          q: 'Welcher Verhandlungspunkt ist bei einer geplanten Sanierung besonders wichtig?',
          options: [
            'Eine goldene Kreditkarte',
            'Eine lange bereitstellungszinsfreie Zeit',
            'Ein möglichst kurzer Ausweis der Restschuld',
            'Der Verzicht auf die Grundschuld',
          ],
          correct: 1,
          explanation:
            'Bei Sanierungen rufst du das Geld in Etappen ab — ohne bereitstellungszinsfreie Zeit zahlst du Zinsen auf Geld, das du noch gar nicht nutzt.',
        },
        {
          q: 'Was macht deine Verhandlungsposition im Bankgespräch am stärksten?',
          options: [
            'Ein selbstbewusstes Auftreten allein',
            'Konkrete Vergleichsangebote anderer Banken',
            'Die Drohung, gar nicht zu kaufen',
            'Ein möglichst hoher Kaufpreis',
          ],
          correct: 1,
          explanation:
            '„Bank X bietet mir …" ist das einzige Argument, das eine Bank wirklich bewegt. Ohne Alternative gibt es keine Verhandlungsmacht.',
        },
        {
          q: 'Warum darfst du in der Selbstauskunft nichts beschönigen?',
          options: [
            'Weil die Bank sonst den Zins um 0,1 % erhöht',
            'Weil Banken alles nachprüfen — Falschangaben zerstören das Vertrauen und können rechtliche Folgen haben',
            'Weil die Selbstauskunft notariell beglaubigt wird',
            'Beschönigen ist üblich und wird erwartet',
          ],
          correct: 1,
          explanation:
            'Gehaltsnachweise, Kontoauszüge und Schufa decken Abweichungen auf. Eine ertappte Schönung beendet nicht nur dieses Gespräch, sondern oft die ganze Bankbeziehung.',
        },
      ],
    },
    {
      id: 'finanzierung-6',
      title: 'Fördermöglichkeiten: Was es gibt und wie du suchst',
      intro:
        'Der Staat fördert Wohneigentum und energetische Sanierung über zinsgünstige Kredite und Zuschüsse. Programme ändern sich laufend — deshalb lernst du hier das System, nicht auswendig Konditionen.',
      sections: [
        {
          heading: 'Die Förderlandschaft im Überblick',
          body: 'Drei Ebenen greifen ineinander: Bundesförderung (vor allem über die staatliche KfW-Bank und das BAFA), Landesförderbanken (jedes Bundesland hat eigene Programme, etwa für Familien oder Ersterwerber) und teils kommunale Töpfe.\n\nGefördert werden typischerweise: energieeffizienter Neubau und Sanierung, der Umstieg auf erneuerbare Heiztechnik, altersgerechter Umbau und teilweise der Ersterwerb von Wohneigentum für Familien. Die Form: zinsverbilligte Darlehen, Tilgungszuschüsse (ein Teil des Darlehens wird erlassen) oder direkte Investitionszuschüsse.',
        },
        {
          heading: 'Die goldene Regel: Erst beantragen, dann beauftragen',
          body: 'Der häufigste und teuerste Förderfehler: Der Handwerker ist beauftragt, bevor der Förderantrag gestellt wurde. Fast alle Programme fördern nur Vorhaben, die zum Antragszeitpunkt noch nicht begonnen haben — wer zu früh startet, verliert den Anspruch vollständig.\n\nZweite Besonderheit: Viele KfW-Kredite beantragst du nicht direkt, sondern über deine finanzierende Bank („Durchleitungsprinzip"). Sag im Bankgespräch aktiv, dass du Fördermittel prüfen willst — nicht jeder Berater bringt es von selbst auf den Tisch, denn die Marge ist für die Bank kleiner.',
        },
        {
          heading: 'Energieeffizienz: Wo für Bestandskäufer am meisten drin ist',
          body: 'Für Käufer älterer Objekte ist die energetische Sanierungsförderung meist der größte Hebel: Heizungstausch, Dämmung, Fenster — hier gibt es regelmäßig Zuschüsse oder Tilgungserlasse in relevanter Höhe. Voraussetzung ist oft die Einbindung eines zertifizierten Energieeffizienz-Experten, dessen Kosten häufig selbst bezuschusst werden.\n\nStrategisch gedacht: Ein unsaniertes Objekt günstig kaufen, mit Förderung sanieren und dadurch Wert und Miete heben — das ist eines der solidesten Wertschöpfungsmodelle für Privatinvestoren. Aber: Rechne Sanierungen konservativ und mit Puffer, Baukosten überraschen fast nie nach unten.',
        },
        {
          heading: 'So recherchierst du aktuell und verlässlich',
          body: 'Konditionen und Programme ändern sich mehrmals im Jahr — jede konkrete Zahl in einem Lehrtext wäre morgen veraltet. Verlässliche Quellen: die Programmsuche der KfW (kfw.de), das BAFA für Heizungs- und Effizienzzuschüsse, die Förderbank deines Bundeslandes und die (herstellerunabhängige) Beratung der Verbraucherzentralen.\n\nPrüfe bei jedem Programm vier Punkte: Wer wird gefördert (Eigennutzer, Vermieter, beide)? Was genau (Kauf, Sanierung, Heizung)? In welcher Form (Kredit, Zuschuss, Tilgungserlass)? Und: Welche Bedingungen gelten (Effizienzstandard, Expertenpflicht, Fristen)? Erst dann in die Kalkulation einbauen.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Sanierungsobjekt mit Förderhebel (vereinfacht)',
        body: 'Milan kauft eine unsanierte Wohnung für 140.000 €. Geplante energetische Sanierung: 40.000 € (Heizung, Fenster, Bad). Sein Energieberater bestätigt die Förderfähigkeit eines Teils der Maßnahmen; über ein Förderdarlehen mit Tilgungszuschuss werden ihm beispielhaft 6.000 € der Darlehenssumme erlassen, den Heizungstausch bezuschusst ein weiteres Programm anteilig. Wichtig war die Reihenfolge: Energieberater → Anträge → Zusagen → erst dann die Handwerkeraufträge. Hätte Milan zuerst beauftragt, wäre die gesamte Förderung entfallen.',
      },
      note: 'Förderungen sind ein System aus Bund (KfW/BAFA), Land und Kommune — meist für Effizienz und Sanierung. Eiserne Regeln: erst Antrag, dann Auftrag; über die Hausbank aktiv nach KfW fragen; konkrete Konditionen immer tagesaktuell auf kfw.de & Co. prüfen. Keine Kalkulation, die nur mit Förderung funktioniert.',
      legalHint: true,
      wikiRefs: ['kfw', 'energieausweis', 'sanierungsstau'],
      quiz: [
        {
          q: 'Was ist der klassische Förderfehler, der den Anspruch komplett kostet?',
          options: [
            'Zu viele Programme kombinieren',
            'Mit dem Vorhaben beginnen (z. B. Handwerker beauftragen), bevor der Antrag gestellt ist',
            'Den Antrag zu früh stellen',
            'Einen Energieberater einbinden',
          ],
          correct: 1,
          explanation:
            'Fast alle Programme fördern nur nicht begonnene Vorhaben. Erst beantragen (und Zusage abwarten), dann beauftragen.',
        },
        {
          q: 'Wie beantragst du viele KfW-Förderkredite?',
          options: [
            'Direkt beim Finanzamt',
            'Über die finanzierende Bank (Durchleitungsprinzip)',
            'Beim Notar',
            'Gar nicht — sie werden automatisch gewährt',
          ],
          correct: 1,
          explanation:
            'Die KfW vergibt viele Kredite über die Hausbanken. Deshalb im Bankgespräch aktiv nach Fördermitteln fragen.',
        },
        {
          q: 'Warum stehen in dieser Lektion keine konkreten Förderzinssätze?',
          options: [
            'Weil sie geheim sind',
            'Weil sich Programme und Konditionen laufend ändern — sie gehören tagesaktuell recherchiert',
            'Weil Förderung sich nie lohnt',
            'Weil nur Banken sie kennen dürfen',
          ],
          correct: 1,
          explanation:
            'Förderlandschaft = bewegliches Ziel. Das System verstehen, konkrete Zahlen bei KfW, BAFA und Landesförderbank aktuell prüfen.',
        },
        {
          q: 'Welche Strategie nutzt Förderung als Wertschöpfungshebel?',
          options: [
            'Neubau zum Höchstpreis kaufen',
            'Unsaniertes Objekt günstig kaufen, gefördert sanieren, Wert und Miete heben',
            'Nur Objekte kaufen, die keine Sanierung brauchen',
            'Förderanträge nach Abschluss der Arbeiten stellen',
          ],
          correct: 1,
          explanation:
            'Kauf unter Marktwert + geförderte Aufwertung = doppelter Hebel. Voraussetzung: konservative Sanierungskalkulation und korrekte Antragsreihenfolge.',
        },
      ],
    },
    {
      id: 'finanzierung-7',
      title: 'Finanzierungsfallen: Was Verträge teuer macht',
      intro:
        'Die meisten Finanzierungen scheitern nicht am Zins, sondern an übersehenen Klauseln und falscher Struktur. Diese Lektion zeigt die klassischen Fallen — und wie du sie umgehst.',
      sections: [
        {
          heading: 'Falle 1: Die Vorfälligkeitsentschädigung',
          body: 'Willst du ein Darlehen während der Zinsbindung vorzeitig zurückzahlen — etwa weil du verkaufst —, verlangt die Bank eine Vorfälligkeitsentschädigung: den Ersatz ihres Zinsschadens. Das können je nach Restlaufzeit und Zinsniveau fünfstellige Beträge sein.\n\nGegenmittel: Verkaufsabsichten in die Finanzierungsstruktur einplanen (kürzere Bindung oder Objekt-Weitergabe des Darlehens prüfen), das gesetzliche Kündigungsrecht nach 10 Jahren (§ 489 BGB) kennen — und wissen, dass bei berechtigtem Interesse (z. B. Verkauf) die Bank der Ablösung zustimmen muss, aber eben gegen Entschädigung.',
        },
        {
          heading: 'Falle 2: Bereitstellungszinsen und schleppender Abruf',
          body: 'Zwischen Darlehenszusage und Auszahlung können Monate liegen — bei Sanierungen und Neubau sowieso. Nach Ablauf der bereitstellungszinsfreien Zeit (oft nur 3 Monate) berechnet die Bank Bereitstellungszinsen auf den nicht abgerufenen Betrag, häufig 0,25 % pro Monat — das sind 3 % pro Jahr auf Geld, das du noch gar nicht nutzt.\n\nGegenmittel: bereitstellungszinsfreie Zeit passend zum Projekt verhandeln (12+ Monate bei Sanierung) und den Auszahlungsplan realistisch takten.',
        },
        {
          heading: 'Falle 3: Zu knapp — oder falsch herum — strukturiert',
          body: 'Klassiker A: Die Rate passt nur, solange nichts passiert. Kein Puffer für Leerstand oder Reparaturen — die erste Sonderumlage zwingt zum Notverkauf. Klassiker B: Das gesamte Eigenkapital wird in die Immobilie gesteckt, danach ist das Konto leer; liquide Reserve schlägt maximale Zinsersparnis.\n\nKlassiker C: Kurzfristige Zwischenlösungen (teurer Privatkredit für die Nebenkosten, Dispo als „Brücke"). Wenn die Finanzierung nur mit solchen Krücken steht, ist das Objekt zu groß für die aktuelle Situation — das ist keine Schande, sondern eine Information.',
        },
        {
          heading: 'Falle 4: Kombiprodukte und Kopplungsgeschäfte',
          body: 'Vorsicht bei Paketen: Darlehen nur in Kombination mit Bausparvertrag, Lebensversicherung oder Fondssparplan „zur Tilgungsaussetzung". Solche Konstrukte können im Einzelfall passen, sind aber oft provisionsgetrieben, unflexibel und schwer zu durchschauen — insbesondere endfällige Darlehen, bei denen du nur Zinsen zahlst und die Tilgung in ein Sparprodukt fließt, dessen Rendite niemand garantiert.\n\nFaustregel für den Einstieg: Ein klares Annuitätendarlehen mit Sondertilgungsrecht schlägt fast immer das kreative Kombiprodukt. Was du in fünf Minuten nicht erklären kannst, solltest du nicht unterschreiben.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Puffer rettet das Investment',
        body: 'Zwei Käufer, identisches Objekt (Rate je 950 €, Kaltmiete 900 €). Käufer A steckt seine kompletten 55.000 € in Kaufpreis und Nebenkosten — Konto danach: 800 €. Käuferin B setzt nur 47.000 € ein, akzeptiert dafür 0,15 Punkte mehr Zins (≈ 23 € höhere Monatsrate) und behält 8.000 € Reserve. Nach 14 Monaten: Mieterwechsel, zwei Monate Leerstand, 3.500 € Renovierung. B zahlt aus der Reserve und vermietet 60 € teurer weiter. A muss einen Ratenkredit zu 9 % aufnehmen — der ihm die Rendite der nächsten Jahre zerstört. Die „teurere" Finanzierung von B war die günstigere.',
      },
      note: 'Die vier Klassiker: Vorfälligkeitsentschädigung unterschätzt, Bereitstellungszinsen ignoriert, ohne Liquiditätspuffer strukturiert, undurchsichtige Kombiprodukte unterschrieben. Merksatz: Liquidität schlägt Zinsoptimierung — und was du nicht erklären kannst, unterschreibst du nicht.',
      wikiRefs: ['vorfaelligkeitsentschaedigung', 'bereitstellungszinsen', 'sondertilgung'],
      quiz: [
        {
          q: 'Wann fällt eine Vorfälligkeitsentschädigung an?',
          options: [
            'Bei jeder Sondertilgung',
            'Bei vorzeitiger Rückzahlung des Darlehens innerhalb der Zinsbindung (über die vereinbarten Rechte hinaus)',
            'Am Ende jeder Zinsbindung automatisch',
            'Nur bei Neubauten',
          ],
          correct: 1,
          explanation:
            'Die Bank lässt sich ihren entgangenen Zinsgewinn ersetzen, wenn du früher zurückzahlst als vereinbart — vereinbarte Sondertilgungsrechte sind davon ausgenommen.',
        },
        {
          q: 'Was sind Bereitstellungszinsen?',
          options: [
            'Zinsen auf das bereits ausgezahlte Darlehen',
            'Zinsen auf den zugesagten, aber noch nicht abgerufenen Darlehensbetrag nach Ablauf der Freizeit',
            'Eine Gebühr des Notars',
            'Ein anderes Wort für Effektivzins',
          ],
          correct: 1,
          explanation:
            'Nach der bereitstellungszinsfreien Zeit kostet nicht abgerufenes Geld — bei Sanierung/Neubau deshalb eine lange Freizeit verhandeln.',
        },
        {
          q: 'Warum ist „gesamtes Eigenkapital rein, Konto leer" eine Falle?',
          options: [
            'Weil die Bank das verbietet',
            'Weil ohne liquide Reserve die erste größere Reparatur oder ein Leerstand zur Existenzfrage wird',
            'Weil Eigenkapital steuerlich schädlich ist',
            'Es ist keine Falle, sondern optimal',
          ],
          correct: 1,
          explanation:
            'Ein Zinsvorteil von wenigen Euro monatlich wiegt das Risiko nicht auf, im Ernstfall teure Notkredite zu brauchen. Puffer ist Teil der Finanzierung.',
        },
        {
          q: 'Wie bewertest du ein Kombiprodukt aus endfälligem Darlehen und Fondssparplan?',
          options: [
            'Immer die beste Wahl wegen der Fondsrendite',
            'Kritisch: oft provisionsgetrieben, unflexibel, Tilgungserfolg nicht garantiert — für Einsteiger meist ungeeignet',
            'Gesetzlich vorgeschrieben für Vermieter',
            'Identisch mit einem Annuitätendarlehen',
          ],
          correct: 1,
          explanation:
            'Beim endfälligen Modell hängt die gesamte Tilgung an der ungewissen Rendite des Sparprodukts. Das klare Annuitätendarlehen bleibt der Standard für den Einstieg.',
        },
      ],
    },
  ],
}
