const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = {

    issue(payload, expiresIn) {
        try {
            return jwt.sign(payload, config.development.secret, {
                expiresIn: expiresIn
            });
        } catch(err) {
            throw err;
        }
    },
    verify(token) {
        try {
            return jwt.verify(token, config.development.secret);
        } catch(err) {
            throw err;
        }

    }
    
};