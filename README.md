# Peer to Peer Textbook App

An application that allows peer to peer textbook transactions between students.

## Features

### Create Account

- Limits access to students with verified '.edu' emails

- Adds account to database

### Sign In

- Verifies that account exists in database

### Search

- Lists all available books in database

### Sell

- Adds new book listing to database

### Scan Barcode (in development)

- Should get ISBN from barcode and find textbook information from ISBN

- Should allow user to sell book once information is added

## Run it locally (must have node.js installed)

    git clone https://github.com/dominicabela/TextbookShare

    cd TextbookShare
    npm install
    npm start

    open http://localhost:3000/

Runs the app from http://localhost:3000
