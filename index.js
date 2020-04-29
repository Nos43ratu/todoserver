const express = require("express");
const cors = require('cors')
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const connectdb = require("./connections/connectionDB");
connectdb();
const app = express();
const db = mongodb;

app.use(cors())

app.use(express.json({ extended: false }));
app.use("/", require("./routes/homepage/homepage"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Adil krasava"));

app.use(express.json({extended:false}))
