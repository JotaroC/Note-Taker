const api = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require("uuid");

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.
api.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))    
})

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client.
api.post('/api/notes', (req,res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'))
    let newNote = req.body;
    newNote.id = uuid.v4();

    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
})

module.exports = api;