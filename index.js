const express = require("express");
const http = require("http");
const path = require("path");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
