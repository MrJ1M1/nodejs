const express = require('express');
const router = express.Router();
const Joi = require('joi');
router.use(express.json());

const VirtualDarslar = [{
        id: 1,
        name: 'SQL'
    },
    {
        id: 2,
        name: 'Ajoyib dasturlash'
    },
    {
        id: 3,
        name: 'C# dasturlash tili'
    },
    {
        id: 4,
        name: 'Angular asoslari'
    },
    {
        id: 5,
        name: 'Ma\'lumot tuzilmalari'
    },
    {
        id: 6,
        name: 'TensorFlowga kirish'
    },
    {
        id: 7,
        name: 'FullStack dasturchisi'
    },
    {
        id: 8,
        name: 'Node js To\'liq qo\'llanma'
    },
    {
        id: 9,
        name: 'JavaScript asoslari'
    }
]

router.get('/', (req, res) => {
    res.send(VirtualDarslar);
});

router.get('/:id', (req, res) => {
    const dars = VirtualDarslar.find(i => i.id === parseInt(req.params.id));
    if (!dars)
        return res.status(404).send('Berilgan Id da Dars mavjud emas!...');
    res.send(dars);
});

function Schema_lesson_validate(lesson) {
    const LesonSchema = {
        name: Joi.string().required().min(5)
    };
    return Joi.validate(lesson, LesonSchema);
};

router.post('/', (req, res) => {

    const {error} = Schema_lesson_validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // if(!req.body.name){                                                  // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    //     res.status(400).send('Name is required');                        // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    //     return;                                                          // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    // }                                                                    // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    // if(req.body.name.length <= 5){                                       // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    //     res.status(400).send('Name should be at least 5 characters');    // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan
    // }                                                                    // Mana shu shartla yuqorida --> Schema_lesson funsiyasida yozilgan

    const create_dars = {
        id: VirtualDarslar.length + 1,
        name: req.body.name
    };

    VirtualDarslar.push(create_dars);
    res.status(201).send(create_dars);
});

router.put('/:id', (req, res) => {
    const lesson = VirtualDarslar.find(i => i.id === parseInt(req.params.id));
    if (!lesson) {
        res.status(404).send('Berilgan Id-->da dars mavjud emas');
    }

    const {error} = Schema_lesson_validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    lesson.name = req.body.name;
    res.send(lesson);
});

router.delete('/:id', (req, res) => {
    const lesson = VirtualDarslar.find(i => i.id === parseInt(req.params.id));
    if (!lesson) {
        res.status(404).send('Berilgan Id-->da dars mavjud emas');
    }

    const LessonId = VirtualDarslar.indexOf(lesson);
    VirtualDarslar.splice(LessonId, 1);
    res.send(lesson);

});

module.exports = router;