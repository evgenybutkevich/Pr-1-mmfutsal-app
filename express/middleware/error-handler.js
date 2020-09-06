const { ValidationError } = require('express-validation');

module.exports = function(err, req, res, next) {
    console.log(err.details);

    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
}