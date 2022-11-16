const express = require("express");
const path = require("path");
const app = express();


app.use(express.static("./client/build"));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"))
})

const PORT = 8915;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));