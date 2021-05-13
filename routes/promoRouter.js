const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of all promotions.");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT request not supported on /promotions");
  })
  .post((req, res, next) => {
    res.end(
      "Will write new promotion with name: " +
        req.body.name +
        " and description: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete all promotions.");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of promo " + req.params.promoId);
  })
  .put((req, res, next) => {
    res.end(
      "Will update the details of promotion " +
        req.params.promoId +
        " with name: " +
        req.body.name +
        " and description: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete promo " + req.params.promoId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /promotions/" + req.params.promoId + "/"
    );
  });

module.exports = promoRouter;
