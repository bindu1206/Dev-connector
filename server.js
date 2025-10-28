const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
