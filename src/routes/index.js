const { Router } = require('express');

const router = Router();

// routes
router.get('/test', (req, res) => {
    const obj = {
        "Name": "Fazt",
        "Website": "faztweb.com"
    };

    res.json(obj);
});

module.exports = router;