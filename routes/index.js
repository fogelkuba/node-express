const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const AppController = require('../controllers/AppController');

router.get('/', PagesController.home);

router.get('/contact', (res, req) => {
    res.render('contact');
});

router.post('/applications', AppController.store);

module.exports = router;
