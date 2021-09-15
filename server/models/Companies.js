const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    students: { type: Number, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Company", CompanySchema)
