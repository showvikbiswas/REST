const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send details of all dishes.");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all dishes.");
  });

dishRouter
  .route("/:dishId")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of dish " + req.params.dishId);
  })
  .put((req, res, next) => {
    res.end(
      "Will update the details of dish " +
        req.params.dishId +
        " with name: " +
        req.body.name +
        " and description: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete dish " + req.params.dishId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /dishes/" + req.params.dishId + "/"
    );
  });

module.exports = dishRouter;
