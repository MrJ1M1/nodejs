const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.render('index', {title: 'Amaliy mashg\'ulot', greeting: "Assalomu alekum. Home sahifasiga xush kelibsiz!"});
});

module.exports = router;