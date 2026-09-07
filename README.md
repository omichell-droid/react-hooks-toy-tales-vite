# Toy Tales

A full-stack CRUD application for managing a list of toys. Built with React and a JSON Server backend.

## Description

Toy Tales lets users view, add, like, and donate (delete) toys from a collection. This project connects a React front end to a REST API backend using fetch requests for full CRUD functionality.

## Features

- **View toys**: All toys load automatically from the backend on page load.
- **Add a toy**: Submit the form to create a new toy (likes start at 0).
- **Like a toy**: Click "Like <3" to increase a toy's like count.
- **Donate a toy**: Click "Donate to GoodWill" to remove a toy from the collection.

## Screenshot

![Toy Tales screenshot](./screenshot.png)

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run server` to start the JSON Server backend (port 3001)
4. Run `npm run dev` to start the React development server
5. Open the app in your browser at the local URL shown in the terminal

## Testing

Run `npm run test` to run the test suite with Vitest.

## Technologies

- React
- Vite
- JSON Server
- Vitest / React Testing Library`
