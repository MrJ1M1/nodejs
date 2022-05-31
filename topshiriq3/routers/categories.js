const express = require('express');
const router = express.Router();
const { Category, ValidateCategory } = require('../models/category');


router.get('/', async (req, res) => {
    const getAll = await Category.find().sort('name');
    res.send(getAll);
});

router.get('/:id', async (req, res) => {
    let getId = await Category.findById(req.params.id);
    if (!getId)
        return res.status(404).send('EROR!...........................');
    res.send(getId);
});

router.post('/', async (req, res) => {
    const {error} = ValidateCategory(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let create = new Category({
        name: req.body.name
    });
    create = await create.save();
    res.status(201).send(create);
});

router.put('/:id', async (req, res) => {
    const {error} = ValidateCategory(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let update = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });
    if (!update)
        return res.status(404).send('EROR!...............................');
    res.send(update);
});

router.delete('/:id', async (req, res) => {
    let deleeeteee = await Category.findByIdAndRemove(req.params.id);
    if (!deleeeteee)
        return res.status(404).send('EROR!...........................');
    res.send(deleeeteee);
});

module.exports = router;