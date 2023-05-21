const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const bookValidation = require('../../validations/book.validation');
const bookController = require('../../controllers/book.controller');

const router = express.Router();

router.post('/', validate(bookValidation.getBooks), bookController.getBooks);
router.post('/createBook', validate(bookValidation.createBook), bookController.createBook);
router.get(auth('/getBooks'), validate(bookValidation.getBooks), bookController.getBooks);

router
  .route('/:userId')
  .get(auth('getBooks'), validate(bookValidation.getBook), bookController.getBook);

module.exports = router;