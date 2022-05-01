const { Router } = require('express');
const router = Router();

const notificationsData = require('../sample.json');

router.get('/notifications', (req, res) => {
    res.json(notificationsData);
});

module.exports = router;