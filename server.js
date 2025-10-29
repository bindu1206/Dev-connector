const express = require("express");
const connectDB = require('./config/db')

// Connect to database
connectDB()

const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
