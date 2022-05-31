const mongoose = require('mongoose');
const Joi = require('joi');


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Category = mongoose.model('Category', CategorySchema);

function ValidateCategory(name) {
    const validateSchema = {
        name: Joi.string().required().min(5)
    };
    return Joi.validate(name, validateSchema);
};

exports.Category = Category;
exports.ValidateCategory = ValidateCategory;