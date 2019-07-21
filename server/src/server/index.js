import express from "express";
import bodyParser from "body-parser";

const APP = express();

APP.use( bodyParser.json() );
APP.use(bodyParser.urlencoded({
  extended: false
}));

export default APP;