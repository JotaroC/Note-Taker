const api = require('express').Router();
const path = require('path');
const fs = require('fs');

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.
api.get('/api/notes', (rep,res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))    
})

api.post('/api/notes', (rep,res) => {

})

module.exports = api;