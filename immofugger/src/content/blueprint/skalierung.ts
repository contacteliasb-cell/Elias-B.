import type { ModuleGroup } from './types'

export const skalierung: ModuleGroup = {
  slug: 'skalierung',
  title: 'Skalierung & Unternehmertum',
  description:
    'Vom ersten Objekt zum Portfolio: Strategien fürs Wachstum, Refinanzierung, Netzwerk, Rechtsform und Prozesse — und die Frage, was am Ende bleiben soll. Die Stufe, auf der aus dem Käufer ein Unternehmer wird.',
  lessons: [
    {
      id: 'skalierung-1',
      title: 'Portfolio-Strategien: Wie aus einem Objekt viele werden',
      intro:
        'Ein Objekt ist ein Kauf, ein Portfolio ist eine Strategie. Diese Lektion zeigt die gängigen Wege zum planvollen Wachstum — und warum die Reihenfolge und der Puffer wichtiger sind als das Tempo.',
      sections: [
        {
          heading: 'Buy-and-Hold: Der Kern des langfristigen Vermögensaufbaus',
          body: 'Die Basisstrategie der meisten privaten Investoren ist Buy-and-Hold: Objekte kaufen, vermieten, halten, von Tilgung und (möglicher) Wertentwicklung profitieren. Sie ist steuerlich vorteilhaft (Verkauf nach zehn Jahren im Privatvermögen grundsätzlich steuerfrei), verlässlich und benötigt wenig aktives Management — der Zinseszins der Zeit arbeitet für dich.\n\nInnerhalb von Buy-and-Hold gibt es Stilrichtungen: Cashflow-orientiert (höhere Rendite, oft B-/C-Lagen, mehr Aufwand) oder wertorientiert (niedrigere Rendite, stabile A-/B-Lagen, Fokus auf Substanz). Die meisten erfolgreichen Portfolios mischen beides — und wachsen langsamer, als Social Media suggeriert.',
        },
        {
          heading: 'Wertschöpfungs-Strategien: Manage-to-Core',
          body: 'Aktivere Investoren heben Werte gezielt: Ein unter Wert oder unter Marktmiete vermietetes Objekt kaufen, sanieren oder Leerstand beheben, Mieten an den Spiegel anpassen, professionell verwalten — und so Ertrag und Objektwert steigern. Das ist anspruchsvoller (Kapital, Zeit, Handwerker, Genehmigungen), bietet aber echten, selbst geschaffenen Mehrwert statt reiner Marktabhängigkeit.\n\nDie Königsdisziplin verbindet Wertschöpfung mit Förderung (energetische Sanierung, Lektion Finanzierung-6): günstig kaufen, gefördert aufwerten, höher vermieten, Eigenkapital durch die Wertsteigerung refinanzieren. Voraussetzung: konservative Kalkulation, echte Sanierungskompetenz und Puffer — Baukosten und Genehmigungen sind die häufigsten Stolpersteine.',
        },
        {
          heading: 'Die Reihenfolge: Fundament vor Tempo',
          body: 'Der häufigste Skalierungsfehler ist zu schnelles Wachstum ohne Puffer. Wer drei Objekte gleichzeitig mit minimalem Eigenkapital stemmt, hat kein Portfolio, sondern ein Kartenhaus: Eine Sonderumlage, ein Zinsschock, ein Ausfalljahr — und die Kette kippt. Nachhaltige Investoren wachsen aus einer Position der Stärke: jedes neue Objekt muss für sich tragfähig sein und die Gesamt-Liquidität darf nie unter eine Sicherheitsschwelle fallen.\n\nBewährter Rhythmus: kaufen, stabilisieren (Mieter, Sanierung, Verwaltung), Eigenkapital für den nächsten Schritt aufbauen (Sparen + Tilgung + ggf. Refinanzierung), dann erst das nächste Objekt. Zwei solide Objekte schlagen fünf wacklige — immer.',
        },
        {
          heading: 'Diversifikation und Klumpenrisiko',
          body: 'Ein Portfolio aus fünf Wohnungen im selben Haus, in derselben Straße oder mit demselben Arbeitgeber im Umfeld ist kein diversifiziertes Portfolio, sondern eine konzentrierte Wette. Streue mit wachsender Größe bewusst: verschiedene Standorte, Objektarten, Mieterstrukturen — damit ein lokaler Schock (Werksschließung, Straßenbauprojekt, neue Milieuentwicklung) nicht das ganze Vermögen trifft.\n\nGleichzeitig gilt: Über-Diversifikation über zu viele Städte hinweg erhöht Verwaltungsaufwand und Reisezeit. Der Kompromiss vieler Privatinvestoren: ein bis zwei gut verstandene Kernmärkte (idealerweise erreichbar) mit mehreren Objekten, statt in zehn Städten je eines. Konzentration von Kompetenz, Streuung von Risiko.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Fünf Jahre, drei Objekte, ein Plan',
        body: 'Sven startet mit 55.000 € Eigenkapital. Jahr 1: ETW für 190.000 € (B-Stadt, solide vermietet), er stabilisiert und spart weiter. Jahr 2–3: Er baut durch Sparen und Tilgung neues Eigenkapital auf, beobachtet den Markt. Jahr 3: zweite ETW (170.000 €), diesmal mit kleinem Sanierungshebel — er hebt die Miete nach Modernisierung um 15 %. Jahr 4: Refinanzierung von Objekt 1 (Wert gestiegen, Restschuld gesunken) löst 25.000 € Eigenkapital heraus. Jahr 5: drittes Objekt. Ergebnis: drei tragfähige Objekte in zwei erreichbaren Kernmärkten, nie unter der Liquiditätsschwelle. Kein spektakuläres Tempo — aber ein Portfolio, das jeden Sturm übersteht.',
      },
      note: 'Buy-and-Hold ist der Kern; Manage-to-Core (Wertschöpfung durch Sanierung/Mietanpassung, ggf. mit Förderung) der aktive Hebel. Wachse aus der Stärke: kaufen → stabilisieren → Eigenkapital aufbauen → nächstes Objekt. Diversifiziere Standorte/Objektarten (Klumpenrisiko vermeiden), aber konzentriere Kompetenz auf wenige Kernmärkte.',
      wikiRefs: ['cashflow', 'spekulationsfrist', 'refinanzierung', 'eigenkapital'],
      quiz: [
        {
          q: 'Was kennzeichnet die Buy-and-Hold-Strategie?',
          options: [
            'Schnelles Kaufen und Verkaufen für kurzfristigen Gewinn',
            'Objekte kaufen, vermieten und langfristig halten — Tilgung und Zeit bauen Vermögen auf',
            'Ausschließlich Neubau',
            'Immobilien nur über Fonds',
          ],
          correct: 1,
          explanation:
            'Buy-and-Hold nutzt Fremdtilgung, Zeit und Steuervorteile (10-Jahres-Frist). Es ist die verlässliche Basisstrategie der meisten Privatinvestoren.',
        },
        {
          q: 'Was ist der häufigste Skalierungsfehler?',
          options: [
            'Zu langsames Wachstum',
            'Zu schnelles Wachstum ohne Liquiditätspuffer — ein Schock lässt die Kette kippen',
            'Zu viel Eigenkapital einsetzen',
            'Objekte zu gründlich prüfen',
          ],
          correct: 1,
          explanation:
            'Ohne Puffer ist ein Portfolio ein Kartenhaus. Nachhaltiges Wachstum kommt aus der Stärke: stabilisieren und Eigenkapital aufbauen vor dem nächsten Kauf.',
        },
        {
          q: 'Was beschreibt eine Manage-to-Core-Strategie?',
          options: [
            'Ein fertig saniertes A-Lage-Objekt zum Höchstpreis kaufen',
            'Ein unter Wert/Marktmiete vermietetes Objekt kaufen, aufwerten und Ertrag + Wert steigern',
            'Nur in Fonds investieren',
            'Objekte ungeprüft kaufen',
          ],
          correct: 1,
          explanation:
            'Manage-to-Core schafft selbst Wert durch Sanierung, Leerstandsbehebung und Mietanpassung — statt sich allein auf die Marktentwicklung zu verlassen.',
        },
        {
          q: 'Warum sind fünf Wohnungen im selben Haus kein diversifiziertes Portfolio?',
          options: [
            'Weil es zu wenig Wohnungen sind',
            'Weil ein einziger lokaler Schock (z. B. Werksschließung) alle Objekte gleichzeitig trifft — Klumpenrisiko',
            'Weil die Bank das verbietet',
            'Das ist perfekt diversifiziert',
          ],
          correct: 1,
          explanation:
            'Konzentration auf einen Standort/Arbeitgeber ist eine gebündelte Wette. Streuung über Standorte und Objektarten senkt das Risiko.',
        },
      ],
    },
    {
      id: 'skalierung-2',
      title: 'Refinanzierung & Eigenkapital-Recycling',
      intro:
        'Der stärkste Wachstumshebel ist oft schon vorhandenes, nur gebundenes Eigenkapital. Refinanzierung macht es wieder verfügbar — ein mächtiges, aber zweischneidiges Werkzeug, das Disziplin verlangt.',
      sections: [
        {
          heading: 'Das Prinzip: Gebundenes Kapital wieder flüssig machen',
          body: 'Über die Jahre passiert zweierlei: Deine Restschuld sinkt durch Tilgung, und der Objektwert steigt (idealerweise). Beides zusammen vergrößert dein Eigenkapital im Objekt — aber dieses Kapital ist gebunden, es arbeitet nicht für neue Käufe. Bei einer Refinanzierung (bzw. Aufstockung / Nachbeleihung) nimmst du einen Teil dieses Eigenkapitals über ein neues oder erhöhtes Darlehen wieder heraus, um damit den nächsten Kauf zu finanzieren.\n\nDer Fachbegriff „Eigenkapital-Recycling" beschreibt genau das: Dasselbe Eigenkapital wird mehrfach eingesetzt, statt in jedem Objekt für immer zu „verschwinden". Bei professionellen Bestandshaltern ist das ein Kernmechanismus des Wachstums.',
        },
        {
          heading: 'Wann Refinanzierung sinnvoll ist',
          body: 'Ideale Zeitpunkte: am Ende der Zinsbindung (ohnehin Anschlussfinanzierung — dann gleich prüfen, ob eine Aufstockung passt), nach erfolgreicher Wertsteigerung (Sanierung, Mietanpassung, Marktentwicklung) oder wenn ein attraktives neues Objekt Eigenkapital braucht, das anderswo gebunden ist. Die stehen gelassene Grundschuld (Lektion Finanzierung-4) macht Nachbeleihungen oft günstig, weil keine neue Bestellung nötig ist.\n\nEntscheidend ist die Nach-Refinanzierungs-Rechnung: Trägt das refinanzierte Objekt die höhere Rate weiterhin (Cashflow-Stresstest!)? Und bringt das freigesetzte Kapital im neuen Objekt mehr, als die höhere Belastung im alten kostet? Nur wenn beide Antworten robust „ja" lauten, ist Refinanzierung Wachstum statt Risiko.',
        },
        {
          heading: 'Die Gefahren: Wenn der Hebel zurückschlägt',
          body: 'Eigenkapital-Recycling erhöht deinen Gesamt-Verschuldungsgrad — der Leverage-Effekt wirkt jetzt über das ganze Portfolio, im Guten wie im Schlechten. Wer bei jeder Wertsteigerung sofort das Maximum herausholt und sofort weiterkauft, fährt ohne Sicherheitsnetz: Ein Marktrückgang plus ein Ausfalljahr können mehrere Objekte gleichzeitig unter Wasser drücken.\n\nDie Disziplin-Regeln: Refinanziere nie bis zum Anschlag, halte einen Liquiditätspuffer über das gesamte Portfolio, rechne konservativ mit möglichen Wertkorrekturen, und behandle freigesetztes Kapital nicht als „geschenktes" Geld, sondern als zusätzliche Schuld, die verdient werden muss. Der Unterschied zwischen einem soliden Bestandshalter und einem, der 2008-artige Krisen nicht überlebt, ist genau diese Disziplin.',
        },
        {
          heading: 'Bewertung und Zusammenspiel mit der Bank',
          body: 'Für eine Aufstockung bewertet die Bank das Objekt neu — die gestiegene Miete und der höhere Verkehrswert sprechen für dich, aber die Bank bleibt konservativ (Beleihungswert, nicht Wunschwert). Belege die Wertsteigerung: Sanierungsnachweise, aktuelle Mietverträge, Vergleichspreise. Je professioneller deine Unterlagen, desto eher folgt die Bank deiner Werteinschätzung.\n\nBaue eine Beziehung zu Banken auf, die Bestandshalter verstehen — nicht jede Bank mag wachsende Portfolios. Ein Finanzierungsvermittler mit Investoren-Erfahrung kennt die passenden Häuser. Und dokumentiere dein Portfolio sauber (Objektübersicht, Cashflows, Restschulden): Ein professionell aufgestellter Investor bekommt bessere Konditionen als ein Bittsteller mit losen Zetteln.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: 30.000 € recycelt, sauber gerechnet',
        body: 'Objekt 1: vor 6 Jahren für 180.000 € gekauft (144.000 € Darlehen). Heute: Restschuld 118.000 €, Wert nach Modernisierung und Marktentwicklung ~230.000 €. Die Bank bewertet konservativ mit 215.000 € und finanziert bis 80 % Auslauf = 172.000 €. Aufstockung von 118.000 € auf 148.000 € → 30.000 € freies Eigenkapital, Rate steigt um ~145 €/Monat. Prüfung: Die gestiegene Miete (nach Modernisierung +90 €) und der Puffer tragen die höhere Rate bequem. Die 30.000 € dienen als Eigenkapital für Objekt 3. Wichtig: Nova refinanziert nicht bis zum Maximum (172.000 €), sondern lässt bewusst Luft — Sicherheit vor letzter Optimierung.',
      },
      note: 'Refinanzierung/Eigenkapital-Recycling macht durch Tilgung und Wertsteigerung gebundenes Kapital wieder für neue Käufe verfügbar (stehen gelassene Grundschuld spart Kosten). Nur mit robustem Cashflow-Stresstest und Portfolio-Puffer einsetzen — nie bis zum Anschlag. Erhöhter Leverage wirkt in beide Richtungen; Disziplin entscheidet über Krisenfestigkeit.',
      wikiRefs: ['refinanzierung', 'grundschuld', 'beleihungsauslauf', 'anschlussfinanzierung', 'restschuld'],
      quiz: [
        {
          q: 'Was bedeutet „Eigenkapital-Recycling"?',
          options: [
            'Eigenkapital für immer in einem Objekt binden',
            'Durch Tilgung/Wertsteigerung gebundenes Kapital per Refinanzierung wieder herauslösen und erneut einsetzen',
            'Eigenkapital an die Bank verschenken',
            'Die Miete recyceln',
          ],
          correct: 1,
          explanation:
            'Dasselbe Eigenkapital wird mehrfach genutzt: Refinanzierung setzt gebundenes Kapital frei für den nächsten Kauf — ein Kernmechanismus professionellen Wachstums.',
        },
        {
          q: 'Welche Prüfung ist vor einer Refinanzierung entscheidend?',
          options: [
            'Ob die Nachbarn zustimmen',
            'Ob das Objekt die höhere Rate weiterhin trägt (Cashflow-Stresstest) und das freie Kapital mehr bringt als die Mehrbelastung kostet',
            'Ob das Wetter gut ist',
            'Ob die Grunderwerbsteuer sinkt',
          ],
          correct: 1,
          explanation:
            'Refinanzierung ist nur dann Wachstum statt Risiko, wenn das Objekt die höhere Rate stresstest-sicher trägt und das Kapital produktiver eingesetzt wird.',
        },
        {
          q: 'Warum ist maximale Refinanzierung bei jeder Wertsteigerung gefährlich?',
          options: [
            'Weil die Bank es nie erlaubt',
            'Weil der erhöhte Gesamt-Leverage bei Marktrückgang + Ausfalljahr mehrere Objekte gleichzeitig gefährden kann',
            'Weil Wertsteigerung steuerfrei ist',
            'Es ist nicht gefährlich, sondern optimal',
          ],
          correct: 1,
          explanation:
            'Voll ausgereizter Leverage ohne Puffer lässt in einer Krise das ganze Portfolio kippen. Disziplin und Reserve sichern die Krisenfestigkeit.',
        },
        {
          q: 'Was hilft, die Bank von der Wertsteigerung zu überzeugen?',
          options: [
            'Ein mündlicher Wunschwert',
            'Belege: Sanierungsnachweise, aktuelle Mietverträge, Vergleichspreise und ein sauber dokumentiertes Portfolio',
            'Druck und Ultimaten',
            'Ein niedrigerer Kaufpreis der Nachbarwohnung',
          ],
          correct: 1,
          explanation:
            'Die Bank bleibt konservativ, folgt aber eher einer gut belegten Werteinschätzung. Professionelle Dokumentation bringt bessere Konditionen.',
        },
      ],
    },
    {
      id: 'skalierung-3',
      title: 'Netzwerk & Deal-Quellen: Woher gute Objekte kommen',
      intro:
        'Die besten Objekte stehen selten öffentlich inseriert. Mit wachsender Erfahrung verschiebt sich dein Vorteil vom Rechnen zum Netzwerk — wer die richtigen Menschen kennt, sieht Deals zuerst.',
      sections: [
        {
          heading: 'Der öffentliche Markt und seine Grenzen',
          body: 'Die großen Immobilienportale sind der Einstieg: transparent, riesig, aber hart umkämpft. In gefragten Lagen konkurrierst du mit Dutzenden Interessenten, die Preise sind ausgereizt, die guten Objekte oft in Stunden weg. Für den ersten Kauf ist das völlig in Ordnung — man lernt den Markt und findet solide Standardobjekte.\n\nAber: Der öffentliche Markt zeigt nur einen Teil. Viele Eigentümer verkaufen ungern öffentlich (Diskretion, Aufwand, Mieter sollen nichts merken). Genau dort — im „Off-Market" — liegen oft die interessanteren Gelegenheiten mit weniger Konkurrenz und mehr Verhandlungsspielraum.',
        },
        {
          heading: 'Off-Market: Beziehungen schlagen Klicks',
          body: 'Off-Market-Deals entstehen über Menschen: Makler, die dich als schnellen, verlässlichen Käufer kennen und dir Objekte vor der Veröffentlichung zeigen; Hausverwaltungen, die wissen, welcher Eigentümer verkaufen will; Handwerker, Steuerberater und Notare mit Einblick in Verkaufsabsichten; andere Investoren, die ein Objekt weiterreichen, das nicht in ihre Strategie passt.\n\nDer Schlüssel ist Reputation: Wer einmal schnell, professionell und verlässlich abgeschlossen hat, bekommt den nächsten Anruf zuerst. Baue diese Beziehungen aktiv und langfristig auf — nicht als Bittsteller, sondern als attraktiver Partner, mit dem Geschäfte reibungslos laufen. Ein Makler verdient lieber sicher mit dir als unsicher mit zehn Interessenten.',
        },
        {
          heading: 'Direktakquise und Spezialquellen',
          body: 'Aktivere Investoren gehen direkt auf Eigentümer zu: gepflegte, aber offensichtlich vernachlässigte Objekte identifizieren, den Eigentümer recherchieren, höflich Kaufinteresse signalisieren. Das erfordert Fingerspitzengefühl und Ausdauer (die meisten sagen Nein), kann aber echte Off-Market-Chancen öffnen.\n\nWeitere Quellen: Zwangsversteigerungen (hohe Expertise nötig, kein Gewährleistungsrecht — nichts für Einsteiger), Nachlass-/Erbfälle (oft verkaufswillig, aber sensibel), Bauträger-Restanten, Bank-Verwertungen. Jede Spezialquelle hat eigene Spielregeln und Risiken — hier zahlt sich das Fundament der vorherigen Module aus: Wer Zahlen, Recht und Zustand beurteilen kann, erkennt in Spezialquellen die Chance, die andere übersehen.',
        },
        {
          heading: 'Die Community als Netzwerk-Beschleuniger',
          body: 'Ein Netzwerk baut sich langsam auf — aber nicht allein. Der Austausch mit anderen Investoren (im Kontor, bei lokalen Stammtischen, in Fachgruppen) beschleunigt alles: Empfehlungen für Makler, Handwerker und Steuerberater; Warnungen vor Problemstandorten; Deals, die weitergereicht werden; das Sparring bei schwierigen Entscheidungen; und schlicht die Motivation, dranzubleiben.\n\nGeben und Nehmen: Wer selbst hilft, Wissen teilt und verlässlich ist, wird Teil eines Kreises, in dem Gelegenheiten zirkulieren. Kein Immobilien-Unternehmer ist eine Insel — auch Fugger führte ein Kontor voller Menschen, Kontakte und Informationskanäle. Dein Netzwerk ist auf Dauer wertvoller als jedes einzelne Objekt.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Anruf vor der Anzeige',
        body: 'Nach zwei sauber abgewickelten Käufen bei derselben Maklerin bekommt Kai eines Morgens ihren Anruf: Ein Eigentümer will drei vermietete Wohnungen aus einem Nachlass verkaufen, diskret, ohne Portal-Trubel. Kai bekommt 48 Stunden Vorlauf, bevor überhaupt inseriert würde. Er prüft mit seiner erprobten Checkliste, rechnet die Zahlen, besichtigt am nächsten Tag und macht ein faires, verbindliches Angebot mit vorbereiteter Finanzierung. Zwei der drei Wohnungen passen in seine Strategie — er kauft sie ~6 % unter dem, was sie im umkämpften Portal-Bieterverfahren gekostet hätten. Der Grund für den Anruf war nicht Glück, sondern Reputation: zwei reibungslose Abschlüsse zuvor.',
      },
      note: 'Der öffentliche Markt ist der Einstieg, aber hart umkämpft; die interessanteren Deals liegen oft off-market. Off-Market entsteht über Beziehungen und Reputation (Makler, Verwaltungen, andere Investoren) — schnell und verlässlich abschließen bringt den nächsten Anruf. Community/Netzwerk beschleunigt Deal-Fluss, Empfehlungen und Entscheidungen. Spezialquellen brauchen das Fundament der Vormodule.',
      wikiRefs: ['makler', 'zwangsversteigerung', 'hausverwaltung', 'off-market'],
      quiz: [
        {
          q: 'Warum liegen die interessanteren Deals oft „off-market"?',
          options: [
            'Weil sie illegal sind',
            'Weil viele Eigentümer diskret verkaufen — dort ist weniger Konkurrenz und mehr Verhandlungsspielraum',
            'Weil Off-Market-Objekte immer billiger sind, ohne Risiko',
            'Weil Portale Objekte verstecken',
          ],
          correct: 1,
          explanation:
            'Off-Market bedeutet weniger Bieter und mehr Spielraum — die Objekte erreichen dich über Beziehungen statt über die öffentliche Anzeige.',
        },
        {
          q: 'Was ist der Schlüssel zu Off-Market-Deals?',
          options: [
            'Möglichst viele Portale abonnieren',
            'Reputation: als schneller, verlässlicher Käufer bekommst du den Anruf vor der Veröffentlichung',
            'Das höchste Gebot per Mail',
            'Anonym bleiben',
          ],
          correct: 1,
          explanation:
            'Makler und Verwaltungen reichen Objekte an Käufer weiter, denen sie vertrauen. Verlässliche Abschlüsse bauen genau diese Reputation auf.',
        },
        {
          q: 'Warum sind Zwangsversteigerungen nichts für Einsteiger?',
          options: [
            'Sie sind verboten',
            'Hohe Expertise nötig, kein Gewährleistungsrecht, oft eingeschränkte Besichtigung und eigene Spielregeln',
            'Man muss Mitglied einer WEG sein',
            'Es gibt dort nur Neubauten',
          ],
          correct: 1,
          explanation:
            'Ohne Gewährleistung, mit begrenzter Prüfmöglichkeit und speziellen Regeln sind Versteigerungen riskant — erst mit Erfahrung und Reserven sinnvoll.',
        },
        {
          q: 'Welche Rolle spielt die Community beim Wachstum?',
          options: [
            'Keine — Immobilien macht man allein',
            'Sie beschleunigt Empfehlungen, Warnungen, weitergereichte Deals, Sparring und Motivation',
            'Sie ersetzt die Bank',
            'Sie garantiert Gewinne',
          ],
          correct: 1,
          explanation:
            'Ein aktives Netzwerk lässt Gelegenheiten und Wissen zirkulieren. Geben und Nehmen macht dich Teil eines Kreises, der auf Dauer wertvoller ist als jedes Einzelobjekt.',
        },
      ],
    },
    {
      id: 'skalierung-4',
      title: 'Rechtsform-Überblick: Von privat bis zur Immobilien-GmbH',
      intro:
        'Kaufe ich privat oder über eine Gesellschaft? Diese Frage entscheidet über Steuern, Haftung und Flexibilität. Ein neutraler Überblick — die konkrete Wahl trifft immer der Steuerberater.',
      sections: [
        {
          heading: 'Der Standard: Kauf im Privatvermögen',
          body: 'Die meisten privaten Investoren kaufen im eigenen Namen (Privatvermögen). Vorteile: einfach, günstig (keine Gesellschaftsgründung, keine gesonderte Buchführung/Bilanz), voller Zugang zu Bankfinanzierungen zu Wohnbau-Konditionen und — der große Trumpf — die Steuerfreiheit des Veräußerungsgewinns nach zehn Jahren Haltedauer. Mieteinkünfte werden mit dem persönlichen Einkommensteuersatz versteuert (Anlage V, siehe Recht & Steuern).\n\nFür den Aufbau eines kleinen bis mittleren Bestands, der langfristig gehalten wird, ist das Privatvermögen fast immer der richtige und einfachste Weg. Die Nachteile (persönliche Haftung, Progression bei hohen Einkünften) werden erst bei größeren Portfolios relevant.',
        },
        {
          heading: 'Die Immobilien-GmbH (vermögensverwaltend)',
          body: 'Bei größeren, wachstumsorientierten Portfolios kommt die vermögensverwaltende GmbH ins Spiel. Ihr potenzieller Vorteil: Gewinne aus Vermietung können unter bestimmten Voraussetzungen begünstigt besteuert werden (Stichwort erweiterte Gewerbesteuerkürzung), was bei hoher Progression und Thesaurierung (Gewinne bleiben zum Weiterinvestieren in der Gesellschaft) attraktiv sein kann.\n\nDie Kehrseiten: Gründungs- und laufende Kosten (Notar, Buchführung, Jahresabschluss, Steuerberater), keine private 10-Jahres-Steuerfreiheit beim Verkauf, oft schlechtere/teurere Finanzierungskonditionen und mehr Formalismus. Die GmbH lohnt sich typischerweise erst ab einer gewissen Größe und wenn Gewinne reinvestiert statt entnommen werden — eine Einzelfallrechnung, kein Automatismus.',
        },
        {
          heading: 'Zwischenformen und Sonderfälle',
          body: 'Es gibt weitere Konstruktionen: die GmbH & Co. KG (haftungsbegrenzt, aber transparent besteuert), Familien-Gesellschaften für die Vermögensübertragung an die nächste Generation, oder das Halten einzelner Objekte in getrennten Gesellschaften zur Haftungsabschottung. Jede hat spezifische steuerliche und rechtliche Folgen.\n\nEin wichtiger Grundsatz: Die Rechtsform folgt der Strategie, nicht umgekehrt. Erst klären, was du willst (halten oder handeln, entnehmen oder reinvestieren, allein oder mit Partnern, vererben oder verkaufen), dann die passende Struktur wählen. Und: Die einmal gewählte Struktur später zu ändern, ist oft teuer (Grunderwerbsteuer, Aufdeckung stiller Reserven) — deshalb frühzeitig mit Profis planen.',
        },
        {
          heading: 'Die Warnung: Keine Struktur ohne Fachberatung',
          body: 'Dieses Modul gibt dir den Überblick, damit du das Gespräch mit den Profis auf Augenhöhe führst — es ersetzt es nicht. Rechtsform-Entscheidungen sind hochindividuell (dein Einkommen, deine Ziele, deine Familiensituation, die Portfoliogröße) und die steuerlichen Regeln ändern sich. Eine falsch gewählte oder aus dem Internet kopierte Struktur kann Zehntausende kosten.\n\nDas Team dafür: ein auf Immobilien und idealerweise Gesellschaftsstrukturen spezialisierter Steuerberater, bei komplexen Fällen ergänzt durch einen Fachanwalt. Vorsicht vor pauschalen „Jeder braucht eine GmbH!"-Ratschlägen von Coaches oder Foren — die Wahrheit ist fast immer: Es kommt darauf an. Genau diese Antwort ist das Zeichen seriöser Beratung.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Wege, zwei richtige Antworten',
        body: 'Anna (Angestellte, 2 Wohnungen, will langfristig halten und irgendwann steuerfrei verkaufen können): Für sie ist das Privatvermögen klar richtig — einfach, günstig, 10-Jahres-Steuerfreiheit. Eine GmbH würde nur Kosten und Komplexität ohne Nutzen bringen. Bernd (gut verdienend, Spitzensteuersatz, plant aggressives Wachstum auf 15+ Einheiten, will alle Gewinne reinvestieren und nichts entnehmen): Für ihn rechnet der Steuerberater durch, dass eine vermögensverwaltende GmbH mit erweiterter Kürzung über die Jahre erheblich Steuern sparen kann — trotz höherer Kosten und Verzicht auf die private Steuerfreiheit. Zwei völlig unterschiedliche, jeweils richtige Entscheidungen. Der Unterschied: Ziele und Größenordnung, durchgerechnet vom Profi.',
      },
      note: 'Privatvermögen ist der einfache Standard (günstig, gute Finanzierung, 10-Jahres-Steuerfreiheit) — richtig für kleine bis mittlere Buy-and-Hold-Bestände. Die vermögensverwaltende GmbH kann bei großen, thesaurierenden Portfolios und hoher Progression steuerlich lohnen (aber Kosten, keine private Steuerfreiheit, formaler). Rechtsform folgt Strategie — Wahl immer mit spezialisiertem Steuerberater. Bildungsinhalt, keine Steuerberatung.',
      legalHint: true,
      wikiRefs: ['immobilien-gmbh', 'spekulationsfrist', 'gewerbesteuer', 'drei-objekt-grenze'],
      quiz: [
        {
          q: 'Was ist der größte steuerliche Vorteil des Kaufs im Privatvermögen?',
          options: [
            'Keine Mietsteuer',
            'Steuerfreiheit des Veräußerungsgewinns nach 10 Jahren Haltedauer',
            'Doppelte AfA',
            'Keine Grunderwerbsteuer',
          ],
          correct: 1,
          explanation:
            'Nach Ablauf der Spekulationsfrist ist der private Veräußerungsgewinn grundsätzlich steuerfrei — ein Vorteil, den die GmbH nicht bietet.',
        },
        {
          q: 'Wann kann eine vermögensverwaltende Immobilien-GmbH sinnvoll sein?',
          options: [
            'Immer, für jeden Einsteiger',
            'Bei großen, wachstumsorientierten Portfolios mit hoher Progression, wenn Gewinne reinvestiert (thesauriert) statt entnommen werden',
            'Nur bei einer einzigen Wohnung',
            'Nie',
          ],
          correct: 1,
          explanation:
            'Die GmbH lohnt typischerweise erst ab einer gewissen Größe und bei Thesaurierung — eine Einzelfallrechnung, kein Automatismus für jeden.',
        },
        {
          q: 'Welcher Grundsatz gilt bei der Rechtsformwahl?',
          options: [
            'Die Rechtsform bestimmt die Strategie',
            'Die Rechtsform folgt der Strategie — erst Ziele klären, dann Struktur wählen',
            'Immer die günstigste Gründung nehmen',
            'Die Bank wählt die Rechtsform',
          ],
          correct: 1,
          explanation:
            'Zuerst klären, was du willst (halten/handeln, entnehmen/reinvestieren, vererben/verkaufen) — dann die passende Struktur. Spätere Änderungen sind oft teuer.',
        },
        {
          q: 'Wie bewertest du einen pauschalen „Jeder braucht eine GmbH!"-Rat?',
          options: [
            'Sofort umsetzen',
            'Skeptisch — Rechtsform ist hochindividuell; seriöse Beratung sagt „es kommt darauf an" und rechnet den Einzelfall',
            'Nur wenn er aus einem Forum kommt',
            'Er ist immer richtig',
          ],
          correct: 1,
          explanation:
            'Pauschalratschläge ignorieren deine individuelle Lage. Die richtige Struktur hängt von Einkommen, Zielen und Größe ab — durchgerechnet vom spezialisierten Steuerberater.',
        },
      ],
    },
    {
      id: 'skalierung-5',
      title: 'Team & Prozesse: Vom Selbermacher zum Unternehmer',
      intro:
        'Ein wachsendes Portfolio sprengt irgendwann die Kapazität einer Person. Der Sprung vom fleißigen Selbermacher zum Immobilien-Unternehmer gelingt über Team, Prozesse und Systeme — nicht über mehr Stunden.',
      sections: [
        {
          heading: 'Der Engpass bist du',
          body: 'Mit einem Objekt machst du alles selbst, und das ist gut so — du lernst. Mit fünf Objekten wird dein eigener Kalender zum Engpass: Jede Besichtigung, jede Abrechnung, jeder Handwerkertermin, jede Mieteranfrage landet bei dir. Wer nicht umsteuert, kauft sich mit jedem Objekt ein Stück zweiten Job — bis Wachstum unmöglich oder das Leben unangenehm wird.\n\nDer mentale Wechsel: Vom „Wie schaffe ich das alles?" zum „Wer oder was erledigt das?". Unternehmer denken in Systemen und Menschen, nicht in eigenen Arbeitsstunden. Dieser Perspektivwechsel ist der eigentliche Inhalt der letzten Ausbildungsstufe.',
        },
        {
          heading: 'Das Team aufbauen',
          body: 'Dein Team hast du in den vorherigen Modulen kennengelernt: Steuerberater (Pflicht), Fachanwalt (bei Bedarf), Hausverwaltung (delegiert Operatives), Finanzierungsvermittler (Marktzugang), Bausachverständiger und Energieberater (Prüfung/Förderung), ein verlässliches Handwerker-Netzwerk, ggf. Buchhaltung. Jeder übernimmt, was er besser oder wirtschaftlicher kann als du.\n\nDelegieren will gelernt sein: Gib klare Erwartungen und Zuständigkeiten, vereinbare Reporting (welche Zahlen willst du wann sehen?), und kontrolliere Ergebnisse statt Mikromanagement zu betreiben. Behalte die Fäden in der Hand — Strategie, Ankaufsentscheidungen, Finanzierung und Controlling bleiben Chefsache. Das Handwerk aus den ersten Modulen macht dich zum kompetenten Auftraggeber, der Qualität beurteilen kann.',
        },
        {
          heading: 'Prozesse und Systeme',
          body: 'Wiederkehrendes standardisieren spart Zeit und Fehler: eine feste Ankaufs-Checkliste (deine Kriterien, immer gleich angewandt), Standard-Vorlagen (Mietvertrag, Übergabeprotokoll, Mieterhöhung, Kündigungsschreiben — geprüft), ein festes Ablagesystem pro Objekt (Kauf, Finanzierung, Mietverhältnis, Abrechnungen, Belege — digital), und ein Kalender für wiederkehrende Termine (Abrechnungsfristen, Wartungen, Zinsbindungs-Enden).\n\nEinfache Software hilft ab wenigen Objekten enorm: Hausverwaltungs-Tools für Mieten, Abrechnungen und Belege; eine Portfolio-Übersicht mit Cashflows und Restschulden. Du musst kein IT-Profi werden — aber „im Kopf" oder „in verstreuten Zetteln" skaliert nicht. Systeme sind das, was ein Portfolio auch dann am Laufen hält, wenn du drei Wochen im Urlaub bist.',
        },
        {
          heading: 'Controlling: Zahlen führen das Unternehmen',
          body: 'Was du nicht misst, kannst du nicht steuern. Führe pro Objekt und fürs Gesamtportfolio die Kernkennzahlen: Cashflow, Leerstandsquote, Mietrendite, Restschuld und Beleihungsauslauf, anstehende Instandhaltung, Liquiditätspuffer. Ein monatlicher oder quartalsweiser Blick auf diese Zahlen zeigt Probleme früh — ein schleichender Leerstand, eine kippende Rendite, ein schrumpfender Puffer.\n\nSo führst du dein Immobilien-Unternehmen wie jedes andere Unternehmen: datenbasiert, vorausschauend, mit klaren Verantwortlichkeiten. Der Unterschied zwischen einem Hobby-Vermieter, der von Reparatur zu Reparatur stolpert, und einem Immobilien-Unternehmer ist nicht die Zahl der Objekte — es sind Team, Prozesse und Controlling. Und genau hier schließt sich der Kreis zur letzten Lektion: Was du systematisch aufbaust, kann bleiben.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Urlaubstest',
        body: 'Nach dem sechsten Objekt macht Yara den „Urlaubstest": Kann das Portfolio drei Wochen ohne sie laufen? Anfangs nicht — alles hängt an ihr. Sie baut um: zwei Hausverwaltungen übernehmen das Operative in den zwei Kernstädten, alle Verträge und Belege liegen digital und einheitlich ab, eine einfache Portfolio-Tabelle zeigt monatlich Cashflow, Leerstand und Puffer je Objekt, wiederkehrende Fristen stehen im Kalender mit Vorlauf. Beim nächsten Urlaub läuft alles: Mieten kommen, Abrechnungen macht die Verwaltung, ein kleiner Wasserschaden wird über das Handwerker-Netzwerk erledigt — Yara sieht es abends kurz im Reporting. Sie hat aufgehört, in ihrem Portfolio zu arbeiten, und angefangen, an ihm zu arbeiten.',
      },
      note: 'Ab wenigen Objekten wird die eigene Zeit zum Engpass — der Sprung zum Unternehmer gelingt über Team (delegieren mit klaren Erwartungen und Reporting), Prozesse (Checklisten, Vorlagen, digitales Ablagesystem, Software) und Controlling (Kernkennzahlen je Objekt und Portfolio). Strategie, Ankauf, Finanzierung und Controlling bleiben Chefsache. Systeme halten das Portfolio auch ohne dich am Laufen.',
      wikiRefs: ['hausverwaltung', 'cashflow', 'leerstand', 'beleihungsauslauf'],
      quiz: [
        {
          q: 'Was ist der zentrale Perspektivwechsel vom Selbermacher zum Unternehmer?',
          options: [
            'Von „Wie schaffe ich das alles?" zu „Wer oder was erledigt das?" — Denken in Systemen und Menschen',
            'Mehr Stunden arbeiten',
            'Alle Berater entlassen',
            'Nur noch teure Objekte kaufen',
          ],
          correct: 0,
          explanation:
            'Unternehmer denken in Team, Prozessen und Systemen statt in eigenen Arbeitsstunden — sonst wird die eigene Zeit zum Wachstumsengpass.',
        },
        {
          q: 'Was bleibt auch bei einem großen Portfolio Chefsache?',
          options: [
            'Jede einzelne Reparatur',
            'Strategie, Ankaufsentscheidungen, Finanzierung und Controlling',
            'Das Streichen der Wohnungen',
            'Die Nebenkostenabrechnung im Detail',
          ],
          correct: 1,
          explanation:
            'Operatives delegierst du; die strategischen Kernfunktionen (Ankauf, Finanzierung, Controlling) behältst du in der Hand — dafür brauchst du das Fachwissen der Vormodule.',
        },
        {
          q: 'Warum sind standardisierte Prozesse und Systeme wichtig?',
          options: [
            'Sie sind gesetzlich vorgeschrieben',
            'Sie sparen Zeit und Fehler und halten das Portfolio am Laufen — auch wenn du mal nicht verfügbar bist',
            'Sie erhöhen die Miete automatisch',
            'Sie ersetzen den Steuerberater',
          ],
          correct: 1,
          explanation:
            'Checklisten, Vorlagen, digitale Ablage und Software machen Wiederkehrendes effizient und unabhängig von deiner ständigen Anwesenheit — die Basis für Skalierung.',
        },
        {
          q: 'Was unterscheidet laut Lektion den Hobby-Vermieter vom Immobilien-Unternehmer?',
          options: [
            'Allein die Zahl der Objekte',
            'Team, Prozesse und Controlling — nicht die reine Objektzahl',
            'Das Alter',
            'Die Lage der Objekte',
          ],
          correct: 1,
          explanation:
            'Nicht die Menge entscheidet, sondern die Organisation: Wer datenbasiert führt, delegiert und Systeme nutzt, ist Unternehmer — unabhängig von der Objektzahl.',
        },
      ],
    },
    {
      id: 'skalierung-6',
      title: 'Vermächtnis-Denken: Bauen, was bleibt',
      intro:
        'Die letzte Lektion des Blueprints schließt den Kreis zum Namensgeber. Über Rendite und Portfolio hinaus stellt sich die Frage, die aus einem Investor einen Fugger macht: Was von dem, was du baust, soll bleiben?',
      sections: [
        {
          heading: 'Die Fuggerei: Ein Investment, das 500 Jahre trägt',
          body: '1521 stiftete Jakob Fugger in Augsburg die Fuggerei — die älteste bestehende Sozialsiedlung der Welt. Bis heute wohnen dort Menschen in Not für eine symbolische Jahresmiete, finanziert aus einer Stiftung, die Fugger mit Immobilien und Kapital ausstattete. Über fünf Jahrhunderte, durch Kriege, Währungsreformen und Umbrüche hinweg, funktioniert dieses Projekt.\n\nDie Lehre ist nicht, dass jeder eine Sozialsiedlung bauen muss. Die Lehre ist die Denkweise: Fugger dachte nicht in Quartalen, sondern in Jahrhunderten. Er baute Strukturen, die ihn überdauern sollten — und genau das machte aus einem reichen Mann eine Figur, an die man sich 500 Jahre später erinnert. Weitblick, der Name dieses Motivs, ist kein Zufall.',
        },
        {
          heading: 'Langfristigkeit als Strategie, nicht nur als Haltung',
          body: 'Vermächtnis-Denken ist auch handfest wirtschaftlich klug. Wer in Generationen denkt, trifft bessere Entscheidungen: kauft Substanz statt Moden, kalkuliert konservativ statt euphorisch, hält durch statt panisch zu verkaufen, baut Rücklagen statt alles auszureizen. Die 10-Jahres-Steuerfreiheit belohnt das Halten; der Zinseszins belohnt die Zeit; Krisen belohnen den, der Puffer hat und aussitzen kann.\n\nDie ganze Ausbildung, die du in diesem Blueprint durchlaufen hast, zielt auf diese Haltung: sauberes Rechnen, Risikobewusstsein, Geduld, Qualität vor Tempo. Das ist kein Zufall — es ist der bewusste Gegenentwurf zum „Schnell-reich"-Versprechen, das im Immobilienbereich so viel Schaden anrichtet.',
        },
        {
          heading: 'Was „bleiben" für dich bedeuten kann',
          body: 'Vermächtnis hat viele Gestalten, und keine ist verpflichtend. Für die einen ist es finanzielle Sicherheit und Freiheit für die eigene Familie — ein Portfolio, das die Kinder nicht ins Risiko, sondern in die Wahlfreiheit führt. Für andere ist es die geordnete Vermögensübertragung an die nächste Generation (frühzeitig planen — steuerlich und rechtlich anspruchsvoll, Profis einbeziehen).\n\nFür wieder andere ist es der gesellschaftliche Beitrag: bezahlbaren, guten Wohnraum schaffen und erhalten, faire Vermieter sein, Objekte und Viertel besser hinterlassen, als man sie vorgefunden hat. Immobilien sind, anders als die meisten Anlagen, physisch und sozial — in ihnen leben Menschen. Diese Verantwortung ist die andere Seite der Rendite.',
        },
        {
          heading: 'Der Abschluss deines Wegs — und sein Anfang',
          body: 'Du hast den Fugger-Pfad durchlaufen: vom Fundament über Finanzierung, Analyse, Recht, Vermietung bis zur Skalierung. Du kannst jetzt ein Exposé entschlüsseln, eine Finanzierung strukturieren, ein Objekt prüfen, ein Mietverhältnis führen und ein Portfolio aufbauen — mit sauberen Zahlen und wachem Risikobewusstsein. Das ist ein echtes Handwerk, und du beherrschst seine Grundlagen.\n\nAber Wissen wird erst durch Handeln zu Können. Der Blueprint ist der Anfang, nicht das Ende. Der nächste Schritt ist deiner: das erste (oder nächste) Objekt, die erste ernsthafte Kalkulation, das erste Bankgespräch. Nutze das Kontor, um Fragen zu stellen und Erfahrungen zu teilen. Bleib bei sauberen Zahlen, langfristigem Denken und Verantwortung — dann baust du, wie Fugger, etwas, das trägt. Willkommen auf der letzten Stufe des Pfads. Willkommen im Kontor.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die Entscheidung mit Weitblick',
        body: 'Nach zwölf Jahren und acht Objekten steht Marek vor einer Entscheidung: Ein Objekt hat die 10-Jahres-Frist überschritten, der Wert ist stark gestiegen, ein Verkauf brächte einen steuerfreien sechsstelligen Gewinn. Der „Schnell"-Investor verkauft und feiert. Marek rechnet anders: Das Objekt läuft cashflow-positiv, liegt in einer wachsenden Lage, die Mieter sind langfristig und zufrieden. Er behält es — der laufende Ertrag und die Substanz sind ihm mehr wert als der einmalige Gewinn. Stattdessen refinanziert er einen Teil des gewachsenen Eigenkapitals (steuerneutral) für ein neuntes Objekt und richtet parallel mit seinem Berater die Übertragung an seine Tochter ein. Er denkt nicht an den Exit, sondern an das, was bleibt. Das ist der Unterschied, den dieser Pfad lehren wollte.',
      },
      note: 'Fuggers Fuggerei (1521) trägt seit über 500 Jahren — der Beweis, dass Immobilien Wohlstand UND Bleibendes schaffen können. Vermächtnis-Denken ist Haltung und kluge Strategie zugleich: Substanz statt Moden, konservativ rechnen, halten, Rücklagen, Verantwortung. Der Blueprint ist der Anfang, nicht das Ende — Wissen wird erst durch Handeln zu Können. Bau, was bleibt.',
      wikiRefs: ['spekulationsfrist', 'refinanzierung', 'cashflow'],
      quiz: [
        {
          q: 'Was ist die zentrale Lehre aus der Fuggerei für Investoren?',
          options: [
            'Jeder muss eine Sozialsiedlung bauen',
            'Die Denkweise: in Generationen statt in Quartalen denken und Strukturen bauen, die überdauern',
            'Immobilien sind immer eine sichere Rendite',
            'Wohltätigkeit ist Pflicht',
          ],
          correct: 1,
          explanation:
            'Nicht das konkrete Projekt, sondern die langfristige Denkweise ist die Lehre — Weitblick, der aus einem Investor einen Bestandsbauer macht.',
        },
        {
          q: 'Warum ist Langfristigkeit auch wirtschaftlich klug?',
          options: [
            'Weil kurzfristig immer verboten ist',
            'Weil Halten steuerlich (10-Jahres-Frist), über Zinseszins und in Krisen (Puffer aussitzen) belohnt wird',
            'Weil die Bank es vorschreibt',
            'Weil Mieten dadurch automatisch steigen',
          ],
          correct: 1,
          explanation:
            'Zeit ist der Verbündete des Investors: Steuerfreiheit nach 10 Jahren, Zinseszins der Tilgung und die Fähigkeit, Krisen auszusitzen, belohnen Geduld.',
        },
        {
          q: 'Welche Verantwortung unterscheidet Immobilien von den meisten anderen Anlagen?',
          options: [
            'Es gibt keine',
            'Sie sind physisch und sozial — in ihnen leben Menschen; faires Vermieten und guter Wohnraum sind die andere Seite der Rendite',
            'Sie müssen täglich gehandelt werden',
            'Sie sind steuerfrei',
          ],
          correct: 1,
          explanation:
            'Anders als Wertpapiere sind Immobilien Lebensraum von Menschen. Diese soziale Dimension ist Teil verantwortungsvollen Investierens.',
        },
        {
          q: 'Was ist die Kernbotschaft zum Abschluss des Blueprints?',
          options: [
            'Wissen allein genügt',
            'Der Blueprint ist der Anfang, nicht das Ende — Wissen wird erst durch Handeln zu Können',
            'Jetzt sofort zehn Objekte kaufen',
            'Immobilien sind zu riskant',
          ],
          correct: 1,
          explanation:
            'Die Ausbildung schafft die Grundlage; erst die Umsetzung (erstes Objekt, erste Kalkulation, erstes Bankgespräch) macht daraus echtes Können.',
        },
      ],
    },
  ],
}
