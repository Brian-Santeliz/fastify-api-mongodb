const { connect } = require("mongoose");

const connectMongo = async () => {
  try {
    await connect("mongodb://localhost/fastify-api");
    console.log("Connected with Mongo!");
  } catch (error) {
    console.log("Error of connection:", error);
  }
};
module.exports = {
  connectMongo,
};
