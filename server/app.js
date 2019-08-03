const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();
// cross origin access enabler
app.use(cors());

// db connection
mongoose.connect("mongodb://localhost:27017/ninja", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening on Port 4000");
});
