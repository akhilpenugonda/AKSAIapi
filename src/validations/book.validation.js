const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createBook = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
  }),
};

const getBooks = {
  query: Joi.object().keys({
    title: Joi.string(),
    author: Joi.string()
  }),
};

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createBook,
  getBooks,
  getBook
};
