**1. Introducere**

Proiectul reprezintă o aplicație pentru gestionarea unei colecții extinse de cărți. Scopul acestei aplicații este de a furniza utilizatorilor o imagine de ansamblu, oferind funcționalități esențiale pentru gestionarea și explorarea colecțiilor personale. Utilizatorii pot vedea lista completă a cărților cu detalii esențiale și cărțile favorite.
Toate datele din aplicație au fost gestionate prin intermediul unei baze de date cloud, folosind tehnologia **MongoDB**. Backend-ul aplicației a fost dezvoltat utilizând **Node.js** și un API pentru _operațiile CRUD_ realizate în cadrul bazei de date. Interfața utilizatorului a fost creată în React, iar aplicația finală a fost publicată cu ajutorul platformei de cloud **Vercel**.

**2. Tehnologii**

**MondoDB API**

Prin intermediul bazei de date, utilizatorii pot adăuga, șterge și actualiza cărți, iar aceste modificări sunt reflectate și în baza de date. 
Conectarea la baza de date a fost realizată prin intermediul NEXT_ATLAS_URI (cheia unica a bazei de date) si NEXT_ATLAS_DATABASE (numele bazei de date).

![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/de9ed397-f134-4c06-a522-b1187182777a)

Pentru a efectua operațiile CRUD asupra bazei de date, am dezvoltat două rute principale și una secundară pentru adăugarea unei cărți noi.

1. Home ("/"): Aceasta este ruta principală a aplicației, care afișează toate cărțile disponibile
2. Favorite ("/books"): Aceasta este o altă rută principală, care probabil cărțile favorite ale utilizatorului.
3. Add book ("/books/add"): Aceasta este o rută secundară care permite utilizatorului să adauge o nouă carte în aplicație.

Aceste rute sunt incluse într-un meniu.

![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/fe994b0d-205c-4e74-9e2c-452296dd1de5)
![Screenshot 2024-05-09 222252](https://github.com/dinubianca20/cloudComputing/assets/106347054/13986079-3227-4806-917f-1b11c9b3a642)

**Metode HTTP**

Acestea se regăsesc în _books-controllers.js_ și au fost testate în Postman.

**getAllBooks (GET)** - Această metodă este utilizată pentru a obține toate cărțile din baza de date.
**addBook (POST)** - Această metodă este utilizată pentru a adăuga o nouă carte în baza de date.
**updateBook (PUT)** - Această metodă este utilizată pentru a actualiza o carte existentă în baza de date.
**deleteBook (DELETE)** - Această metodă este utilizată pentru a șterge o carte existentă din baza de date.
![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/348182b2-37f0-4cf3-83d5-83c91e2b8826)

3. Capturi aplicație

**Home**

![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/e8176719-fb32-4660-a74e-5501d3915364)

**Cărțile favorite**

![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/b2ab94c4-ab30-43e8-a450-ad118de996f4)

_Formular de adăugare_

![image](https://github.com/dinubianca20/cloudComputing/assets/106347054/00d5b8ef-e1d7-462c-9e1c-0d63c88e075c)



