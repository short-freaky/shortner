const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, noOfClicks } = require('../controllers/urlController');

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);
router.get('/clicks/:urlCode', noOfClicks);

module.exports = router;
