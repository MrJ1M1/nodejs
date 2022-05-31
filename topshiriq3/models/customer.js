const Joi = require('joi');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isVip: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 50
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

function ValidateCustomer(name) {
    const validateSchema = {
        name: Joi.string().required().min(5).max(50),
        isVip: Joi.boolean().required(),
        phone: Joi.string().min(7).max(50).required()
    };
    return Joi.validate(name, validateSchema);
};

exports.Customer = Customer;
exports.ValidateCustomer = ValidateCustomer;