1. Introducere

Proiectul reprezintă o aplicație pentru gestionarea unei colecții extinse de cărți. Scopul acestei aplicații este de a furniza utilizatorilor o imagine de ansamblu, oferind funcționalități esențiale pentru gestionarea și explorarea colecțiilor personale. Utilizatorii pot vedea lista completă a cărților cu detalii esențiale și cărțile favorite.
Toate datele din aplicație au fost gestionate prin intermediul unei baze de date cloud, folosind tehnologia **MongoDB**. Backend-ul aplicației a fost dezvoltat utilizând **Next.js** și un API pentru _operațiile CRUD_ realizate în cadrul bazei de date. Interfața utilizatorului a fost creată în React, iar aplicația finală a fost publicată cu ajutorul platformei de cloud **Vercel**.

2. MondoDB API

Prin intermediul bazei de date, utilizatorii pot adăuga, șterge și actualiza cărți, iar aceste modificări sunt reflectate și în baza de date. Pentru a efectua operațiile CRUD asupra bazei de date, am dezvoltat două rute principale și una secundară pentru adăugarea unei cărți noi.

1. Home ("/"): Aceasta este ruta principală a aplicației, care afișează toate cărțile disponibile
2. Favorite ("/books"): Aceasta este o altă rută principală, care probabil cărțile favorite ale utilizatorului.
3. Add book ("/books/add"): Aceasta este o rută secundară care permite utilizatorului să adauge o nouă carte în aplicație.

Aceste rute sunt incluse într-un meniu.

![Screenshot 2024-05-09 222252](https://github.com/dinubianca20/cloudComputing/assets/106347054/13986079-3227-4806-917f-1b11c9b3a642)
