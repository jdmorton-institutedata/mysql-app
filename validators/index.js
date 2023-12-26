const { param } = require('express-validator');

const idParamValidator = [
    param('id', 'id is required').not().isEmpty(),
    param('id', 'id should be numeric').not().isNumeric(),
  ];

  module.exports = {
    idParamValidator
  }