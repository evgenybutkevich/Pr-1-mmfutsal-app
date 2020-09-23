const { validate } = require('express-validation');

function getValidation(schema) {
    return validate(schema, { context: true });
}

module.exports = {
    getValidation
};
