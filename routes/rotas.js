module.exports = (app) => {
  const controlador = require("../controllers/controller.js");

  var router = require("express").Router();

  // Cria um novo utilizador
  router.post("/registar", controlador.registar);

  // Rota para login - tem de ser POST para não vir user e pass na URL
  router.post("/login", controlador.lo);

  // Rota para verificar e ativar o utilizador
  router.get("/auth/confirm/:confirmationCode", controlador.verificaUtilizador);

  app.use("/disciplina", router);
  app.use("/", router);

  router.get("/index", controlador.disciplina_index);

  router.get("/create", controlador.discplina_create_get);

  router.post("/", controlador.discplina_create_post);

  router.get("/disciplina/:id", controlador.disciplina_details);

  router.delete("/disciplina/:id", controlador.disciplina_delete);
};
