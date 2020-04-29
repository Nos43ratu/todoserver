const express = require("express");
const cors = require("cors");
const connectdb = require("./connections/connectionDB");
const app = express();
const PORT = process.env.PORT || 5000;

connectdb();

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/", require("./routes/homepage/homepage"));
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log("Adil krasava"));
