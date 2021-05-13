const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of all leaders.");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT request not supported on /leaders");
  })
  .post((req, res, next) => {
    res.end(
      "Will write new leader with name: " +
        req.body.name +
        " and description: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete all leaders.");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of leader " + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.end(
      "Will update the details of leader " +
        req.params.leaderId +
        " with name: " +
        req.body.name +
        " and description: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete leader " + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /leaders/" + req.params.leaderId + "/"
    );
  });

module.exports = leaderRouter;
