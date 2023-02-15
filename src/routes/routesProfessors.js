// contiene rutas a la que nuestro servidor puede responder
const routeProfessors = require("express").Router();

// functions to apply to routers (controllers)
const { createProfessor } = require("../controllers/professors");

// defining routes handlers for the /students path
routeProfessors.post('/register', createProfessor);

module.exports = routeProfessors;