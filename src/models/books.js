const { Schema, model } = require("mongoose");

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("books", booksSchema);
