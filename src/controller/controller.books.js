const Book = require("../models/books");
const boom = require("boom");

module.exports = {
  getBooks: async (req, reply) => {
    try {
      const books = await Book.find();
      return reply.code(200).send(books);
    } catch (error) {
      throw boom.boomify(error);
    }
  },
  getBook: async (req, reply) => {
    const { id } = req.params;
    try {
      const book = await Book.findOne({ _id: id });
      return book
        ? reply.code(200).send(book)
        : reply.code(404).send({ msg: "Book noy found" });
    } catch (error) {
      throw boom.boomify(error);
    }
  },
  createBook: async (req, reply) => {
    try {
      const { title, img, isbn, description } = req.body;
      if (title && img && isbn && description) {
        const newBook = new Book({
          ...req.body,
        });
        await newBook.save();
        return reply.code(201).send(newBook);
      }
      return reply.code(400).send({
        msg: "All field is required",
      });
    } catch (error) {
      throw boom.boomify(error);
    }
  },
};
