const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const WorkExperience = require("./models/WorkExperience");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Anslut till MongoDB med länk från .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Ansluten till MongoDB!"))
    .catch(err => console.error("Kunde inte ansluta till MongoDB:", err));

// Test-route
app.get("/", (req, res) => {
    res.send("API fungerar med MongoDB!");
});

// GET Hämta alla arbetserfarenheter
app.get("/api/workexperience", async (req, res) => {
    try {
        const works = await WorkExperience.find();
        res.json(works);
    } catch (err) {
        res.status(500).json({ error: "Kunde inte hämta data" });
    }
});

// POST Lägg till ny arbetserfarenhet
app.post("/api/workexperience", async (req, res) => {
    try {
        const { company, role, duration, description } = req.body;

        if (!company || !role || !duration || !description) {
            return res.status(400).json({ error: "Alla fält måste fyllas i!" });
        }

        const newWork = new WorkExperience({ company, role, duration, description });
        await newWork.save();
        res.status(201).json(newWork);
    } catch (err) {
        res.status(400).json({ error: "Kunde inte spara posten" });
    }
});

// PUT - Uppdatera en post
app.put("/api/workexperience/:id", async (req, res) => {
    try {
        const { company, role, duration, description } = req.body;

        if (!company || !role || !duration || !description) {
            return res.status(400).json({ error: "Alla fält måste fyllas i!" });
        }

        const updatedWork = await WorkExperience.findByIdAndUpdate(
            req.params.id,
            { company, role, duration, description },
            { new: true }
        );

        if (!updatedWork) {
            return res.status(404).json({ error: "Posten hittades inte" });
        }

        res.json(updatedWork);
    } catch (err) {
        res.status(400).json({ error: "Kunde inte uppdatera" });
    }
});

// DELETE - Radera en post
app.delete("/api/workexperience/:id", async (req, res) => {
    try {
        const deletedWork = await WorkExperience.findByIdAndDelete(req.params.id);
        
        if (!deletedWork) {
            return res.status(404).json({ error: "Posten hittades inte" });
        }

        res.json({ message: "Posten har raderats" });
    } catch (err) {
        res.status(500).json({ error: "Kunde inte radera" });
    }
});

// Starta servern
app.listen(PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
});