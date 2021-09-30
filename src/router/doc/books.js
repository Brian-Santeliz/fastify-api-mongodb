exports.createBookDoc = {
  description: "Create a new book",
  tags: ["Book"],
  summary: "Create a new book with the data send",
  body: {
    type: "object",
    properties: {
      title: {
        type: "string",
      },
      description: {
        type: "string",
      },
      img: {
        type: "string",
      },
      isbn: {
        type: "number",
      },
    },
  },
  response: {
    201: {
      description: "Created book!",
      type: "object",
      properties: {
        _id: {
          type: "string",
        },
        title: {
          type: "string",
        },
        description: {
          type: "string",
        },
        img: {
          type: "string",
        },
        isbn: {
          type: "number",
        },
      },
    },
  },
};
