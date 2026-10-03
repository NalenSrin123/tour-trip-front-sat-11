require("dotenv").config();
const express = require("express");
const cors = require("cors");

const tourRoutes = require("./routes/tourRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));


app.use("/api/tours", tourRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;