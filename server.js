const express = require("express");
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// routes for API, view is taken care of by React
app.use(routes);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to db -> Mongo Atlas
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/budgetTrackerDB",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// backend server start
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`))