const fastify = require("fastify")({ logger: true });
const { connectMongo } = require("./db/connect");
const { routes } = require("./router/router.book");
const { options } = require("./utils/swaggerDoc");

fastify.register(require("fastify-swagger"), options);
fastify.get("/", (req, reply) => {
  reply.send({
    msg: "Hello world with Fastify!",
  });
});
routes.forEach((route) => {
  fastify.route(route);
});
const PORT = 3000;
const initServer = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
    fastify.swagger();
    fastify.log.info(
      `Fastify is listening on ${fastify.server.address().port}}!`
    );
    await connectMongo();
  } catch (error) {
    fastify.log.error("Something was wrong!", error);
    process.exit(1);
  }
};
initServer();
