## Beispiel-Repository zum Artikel MyReact - Teil 2

Diese Anwendung enthält eine einfache CRUD-Anwendung, welche mit den Technologien React, TypScript und Material-UI eine kleine<br/>
Bookmark-Verwaltung abbildet. Die Datenerhaltung der Anwendung erfolgt im Local Data Store des Browsers.

<a href="https://react-bookmarks-test.now.sh">Demo</a>

### Überblick über Branches:

Die Branches des Repositories enthalten die verschiedenen Arbeitsstände in der Reihenfolge, wie sie im Artikel beschrieben sind.

#### master: Anwendungs-Grundgerüst, basierend auf einem create-react-app-Setup sowie eine Service-Klasse zur Datenhaltung
#### 01_Bookmark_Komponente: Entwicklung einer ersten Bookmark-Komponente
#### 02_BookmarkList_Komponente: die BookmarkList-Komponente ruft Bookmark wiederholt auf und erzeugt somit eine Liste aller Bookmark-Datensätze
#### 03_BookmarkList_Sortierung: hinzufügen einer Auswahlliste zur Sortierung der Liste
#### 04_Popup-Dialog_Bookmark_Bearbeiten: ein Popup-Dialog um eine Bookmark zu laden
#### 05_Formular-Eingaben_und_Update_Bookmark: Realisieren der Funktionalität des Formulars und Speichern einer geänderten Bookmark
#### 06_Hinzufügen_und_Löschen_einer_Bookmark: Hinzufügen einer Bookmark aus BookmarkList heraus und Löschen einer Bookmark

Die Branches können einzeln geklont werden und mit den folgenden Kommandos ausgeführt werden:

### `npm start`

Startet die App im Entwicklungsmodus.<br />
Um die Seite anzuschauen, [http://localhost:3000](http://localhost:3000) im Browser öffnen.

Die Seite lädt neu, wenn Änderungen am Quellcode vorgenommen werden.<br />
Fehler werden von ESLint auf der Konsole angezeigt.

### `npm run build`

Erstellt die Anwendung für ein prdouktives Deployment.

### Deployment per Vercel (ehemals zeit.co)

Den eigenen Quellcode oder den Inhalt des letzten Branches dieses Repositories in einem eigenen Github-Repository bereitstellen.<br/>
Unter https://vercel.com einen Accout erstellen und einloggen. Dort das Github-Repository binden und ohne eine zusätzliche Konfiguration
deployen.