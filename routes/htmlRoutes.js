const hR = require('express').Router();
const path = require('path');

// GET Route for homepage
hR.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Wildcard route for homepage
hR.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});



module.exports = hR