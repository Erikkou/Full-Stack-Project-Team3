# Full-Stack-Project-Team3
Voor het project dient een niet-triviale webapplicatie opgeleverd te worden. De applicatie bestaat uit een frontend, een backend en een database. Het exacte domein en de specifieke casus worden, in samenspraak met de begeleiders, door de studenten zelf opgesteld.

Het exacte domein en de specifieke casus worden, in samenspraak met de begeleiders, door de studenten zelf opgesteld. Voor de backend wordt gebruik gemaakt van Java (eventueel met Spring Boot) of PHP (eventueel met Symfony); de frontend wordt gemaakt met behulp van bekende en veel gebruikte technieken (bij voorkeur Angular, React of Vue). 

Algemene omschrijving
De applicatie heeft een domein waarbinnen minimaal vijf entiteiten te identificeren zijn die concrete relaties met elkaar hebben en waardoor verschillende doorsneden te maken zijn. De entiteiten worden genormaliseerd in een database gepersisteerd.

De communicatie tussen de data-laag en de applicatielaag gaat via een (zelfgemaakt of bestaand) ORM-framework. Binnen de applicatielaag wordt de data verwerkt voordat deze naar ofwel de data-laag ofwel de frontend wordt gestuurd – denk hierbij aan input-validatie, serialisatie en de-serialisatie of omzetten van data-typen. 
De communicatie tussen de applicatielaag en de frontend gaat via een API. De applicatielaag heeft enige tientallen endpoint die een logische hiërarchie en structuur hebben. Afhankelijk van het domein zijn bepaalde endpoint publiekelijk toegankelijk, maar er zijn in ieder geval endpoints die alleen beschikbaar zijn met bepaalde credentials (ingelogde bezoekers). Er zijn in het domein minimaal twee verschillende typen gebruikers die beide specifieke endpoint aan kunnen spreken. Voor de authenticatie en wordt gebruik gemaakt van JWT.

De frontend heeft een integratielaag die de data die vanaf de applicatie-laag komt omzet in verschillende views – denk hierbij aan transformeren, filteren of sorteren. Er zijn in de frontend mogelijkheden om de data gedenormaliseerd en geaggregeerd weer te geven. De frontend heeft een interactieontwerp en een vormgeving die passen bij het domein en de verschillende gebruikersrollen.
De frontend is mobile-first ontworpen en getest op verschillende resoluties van verschillende versies van verschillende browsers.

Twee fasen
In grote lijnen wordt het project onderverdeeld in twee fasen. De eerste fase staat in het teken van de requirementsanalyse: hier wordt gewerkt aan de beschrijving van het domein en de casus, de technische en functionele eisen en de prioritering. In deze fase wordt ook de meest complexe use case van de applicatie geïdentificeerd en (bij wijze van mogelijkheidsvoorwaardenonderzoek) binnen het gebruikte technologisch ecosysteem gerealiseerd. 
De tweede fase staat in het teken van de realisatie. Op basis van de in de eerste fase opgestelde vereisten en prioritering wordt gedurende deze periode in tweewekelijkse sprints de applicatie sequentieel opgebouwd. Naar goed ontwikkelprincipe wordt bij elke sprint een werkende applicatie gedemonstreerd, op basis waarvan de ontwikkelsnelheid wordt bepaald en de planning en prioritering eventueel wordt bijgesteld.
De beide fasen corresponderen met de twee blokken van het semester waarin het onderwijs wordt gegeven.

Technische eisen
Zoals hierboven gemeld wordt er in de applicatie gebruik gemaakt van een ORM en van JWT. Hiernaast moeten afhankelijkheden worden geïnjecteerd: hiervoor wordt gebruik gemaakt van een (bestaande of zelfontwikkelde) DI-container. Zowel de front- als de backend maken waar mogelijk gebruik van services.

Testen en documenteren
De applicatie wordt automatisch getest door gebruik te maken van unit-tests (met name voor de backend) of een UI-testing tool (voor de frontend; denk aan iets als Selenium). Voor de hele applicatie is een uitgebreid testplan opgesteld, aan de hand waarvan verschillende scenario's doorlopen kunnen worden.

De applicatie wordt verder gedocumenteerd aan de hand van een bestaand formaat (4+1-model, 4C-model, ...). Binnen deze documentatie is ook ruimte voor een beschrijving van het domein en de casus. De programmacode is van een dusdanige kwaliteit dat commentaar daarin overbodig is.
