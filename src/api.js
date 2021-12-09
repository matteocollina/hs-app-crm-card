const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: `Hi ${process.env.NODE_ENV} process`
  });
});

router.get("/test", (req, res) => {
    res.json({
      hello: "hi test!"
    });
  });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);