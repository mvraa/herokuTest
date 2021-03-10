//-------------load db and envs-------------

require("dotenv").config();
require("./models/db");

//------------express-------------------

var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//--------------swagger init-----------------

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "SWAG",
    version: "1.0.0",
  },
  servers: [{ url: process.env.HOST }],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const swagOpt = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swagSetup = swaggerJSDoc(swagOpt);
app.use("/swag", swaggerUi.serve, swaggerUi.setup(swagSetup));

//-------------logger------------------

var log = require("morgan");
app.use(log("dev"));

//------------cookie parser-------------

var cp = require("cookie-parser");
app.use(cp());

//-------------body parser--------------

const bp = require("body-parser");
app.use(bp.json());

//---------------cors-------------------

const cors = require("cors");
app.use(cors());

//-----------------router----------------

var hotelRouter = require("./routes/hotel");
var userRouter = require("./routes/user");

app.use("/hotel", hotelRouter);
app.use("/user", userRouter);

//----------------error------------------

var err = require("http-errors");

app.use(function (req, res, next) {
  next(err(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json("Error: " + (err.message || "Internal server error"));
});



module.exports = app;
