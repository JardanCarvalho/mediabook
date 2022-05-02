const express = require('express');
const routes = express.Router();

// GET: Buscar uma informação
// POST: Criar uma nova informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parde da informação
// DELETE: Deletar uma informação

routes.get("/", (request, response) => response.send("Hello World!"));

module.exports = routes;