import express, { urlencoded, json, static } from "express";
import logger from "morgan";
import { connect } from "mongoose";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static("public"));

connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

import db from "./models";

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});