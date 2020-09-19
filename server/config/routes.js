// Requiring mongoose for funcationality
const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const Persons = require('../controllers/Persons');


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/tasks', (req, res) => {
        
    });

    app.get('/tasks/:id', (req, res) => {
    
    });

    app.post('/tasks', (req, res) => {
    
    });

    app.put('/tasks/:id', (req, res) => {
    
    });

    app.delete('/tasks/:id', (req, res) => {
    
    });
}