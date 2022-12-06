// import dependencies and initialize the express router
const Express = require('express');
const Handler = require('../controllers/domestic-payments-controller');

const handler = new Handler();
const router = Express.Router();
const jsonParser = Express.json();

// define routes
router.post('/', jsonParser, handler.create);
router.get('/heath', (req, res) => {
    res.send("good")
})

module.exports = router;