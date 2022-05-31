const express = require('express');
const router = express.Router();
const { Customer, ValidateCustomer } = require('../models/customer');
router.get('/', async (req, res) => {
    const getAll = await Customer.find().sort('name');
    res.send(getAll);
});

router.get('/:id', async (req, res) => {
    let getId = await Customer.findById(req.params.id);
    if (!getId)
        return res.status(404).send('EROR!...........................');
    res.send(getId);
});

router.post('/', async (req, res) => {
    const {error} = ValidateCustomer(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let create = new Customer({
        name: req.body.name,
        isVip: req.body.isVip,
        phone: req.body.phone       
    });
    create = await create.save();
    res.status(201).send(create);
});

router.put('/:id', async (req, res) => {
    const {error} = ValidateCustomer(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    let update = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isVip: req.body.isVip,
        phone: req.body.phone
    }, {
        new: true
    });
    if (!update)
        return res.status(404).send('EROR!...............................');
    res.send(update);
});

router.delete('/:id', async (req, res) => {
    let deleeeteee = await Customer.findByIdAndRemove(req.params.id);
    if (!deleeeteee)
        return res.status(404).send('EROR!...........................');
    res.send(deleeeteee);
});

module.exports = router;