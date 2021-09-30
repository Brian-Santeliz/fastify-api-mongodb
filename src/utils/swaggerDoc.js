module.exports = {
  options: {
    routePrefix: "/api/docs",
    exposeRoute: true,
    swagger: {
      info: {
        title: "API Using Fastify & MongoDB",
        description: "REST API of Books Using Mongo & Fastify",
        version: "1.0.0",
      },
      host: "localhost:3000",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  },
};
