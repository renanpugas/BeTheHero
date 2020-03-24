const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/*
 * Tipos de parâmetro
 *
 * Query Params: Parâmetros nomeados na rota após "?" (Filtros, paginacao) - request.query
 * Route Params: Parâmetros utilizados para identificar recursos (ex: users/:id) - request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos - request.body
*/

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete)

module.exports = routes;