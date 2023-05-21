const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
    },
    bookImage: {
      type: String,
    },
    launchDate: {
      type: Date,
      default: Date(),
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);

/**
 * @typedef Book
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
