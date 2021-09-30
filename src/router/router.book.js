const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
} = require("../controller/controller.books");

const routes = [
  {
    method: "GET",
    url: "/api/books",
    handler: getBooks,
  },
  {
    method: "GET",
    url: "/api/book/:id",
    handler: getBook,
  },
  {
    method: "POST",
    url: "/api/books",
    handler: createBook,
  },
  {
    method: "PUT",
    url: "/api/books/:id",
    handler: (request, reply) => {
      reply.send("books");
    },
  },
  {
    method: "DELETE",
    url: "/api/book/:id",
    handler: deleteBook,
  },
];
module.exports = {
  routes,
};
