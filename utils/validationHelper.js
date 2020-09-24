const { validate } = require('express-validation');

module.exports = function getValidation(schema) {
    return validate(schema, { context: true });
}
