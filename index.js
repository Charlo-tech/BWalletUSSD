const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    console.log(req.body);
    let response = '';
    if (text == '') {
        response = `CON Welcome to BWallet
        1. Make payment
        2. Transfer funds
        3. Withdraw cash`;
    } else if ( text == '1') {
        response = `CON Enter amount to pay`;
    } else if ( text == '2') {
        response = `CON enter recipient's phone number`;
    }
    else if ( text == '3') {
        response = `CON Enter amount to withdraw`;
    }

    res.set('Content-Type: text/plain');
    res.send(response);
});

module.exports = router;