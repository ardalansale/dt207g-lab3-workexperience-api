// Importerar Express
const express = require("express");
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Test-routen
app.get("/", (req, res) => {
    res.send("API fungerar!!!1");
});

// Startar servern
app.listen(PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
});