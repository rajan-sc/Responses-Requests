# Responses-Requests

A simple Node.js HTTP server demonstrating how to handle different URL requests and send HTML responses.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Running the Server

Start the server using Node.js:
```bash
node app.js
```
The server will be running at `http://localhost:3000`.

## Available Routes

- `/`: Displays "Hello World"
- `/home`: Displays "Welcome home"
- `/about`: Displays "Welcome to about us"
- `/node`: Displays "Welcome to my node js project"
- Any other route will return a `404 Error Not Found`.
