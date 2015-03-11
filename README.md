
# MegaQuiz

En enkel quiz app (för att labba lite på kompetensdan.


## Setup

1. Install node.js (http://nodejs.org/)
2. Install the latest Cordova and Ionic command-line tools
   `npm install -g cordova ionic`
    För windows läs: http://ionicframework.com/getting-started/
3. Installera beroenden ``bower install
4. Testa att det fungerar genom `ionic serve` i från megaquiz katalogen.
5. Se till att du har en editor som du kan jobba med javascript i
6. Surfa runt på http://ionicframework.com/ för att se lite av vad som finns där.


## Uppgifter till fredag

Vi delar in oss i grupper (kanske bara en person per grupp?) och bygger olika delar.


### Data backend

Implementera läsning från google docs spread sheets. Via en angular resource. Se service.js


### Vyn "Välj quiz"

Implementera valet av det quiz som användaren vill göra just nu. För extra poäng, håll koll
på vilka quiz som användaren redan gjort.


### Vyn "Fråga"

Implemetera stöd för två frågetyper (multiple och single). Vyn ska även visa hur mycket av quizen som är klart
(fråga 1 av 5).


### Vyn "Quiz resultat"

Presentera resultatet från den quiz som användaren just gjort.


### Vyn "Resultat"

Visa en lista över de quiz som användaren gjort och hur det har gått i respektive quiz.


### Splash screen

En bonus uppgift är att bygga en splash screen som visas innan välj quiz vyn och försvinner efter en kort stund.




