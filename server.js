const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const uri = 'mongodb+srv://YourUsername:<yourPassword>@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority'; TO const uri = process.env.MONGO_DB_URI || 'mongodb+srv://Ulan:123@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority';

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});