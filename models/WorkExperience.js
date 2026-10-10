const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    jobtitle: { type: String, required: true },
    location: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: false },
    description: { type: String, required: true }
});

module.exports = mongoose.model("WorkExperience", workSchema);