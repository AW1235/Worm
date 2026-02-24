// server.js
const express = require('express');

const app = express();
const PORT = 3000;

// HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Server Listen to this PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});