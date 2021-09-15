const router = require('express').Router()
const Company = require('../models/Companies');

// Create
router.post("/", async (req, res) => {
    const newCompany = new Company(req.body);

    try {
        const savedCompany = await newCompany.save()
        res.status(201).json(savedCompany)
    } catch (error) {
        res.status(500).json("error")
    }
})

// Get
router.get("/", async (req, res) => {
    let list = []
    try {
        list = await Company.find()
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json("error")
    }
})

module.exports = router
