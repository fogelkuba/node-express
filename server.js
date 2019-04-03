const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.json({
        'status': 'Server init'
    })
});
