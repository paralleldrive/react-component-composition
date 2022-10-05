import createRoute from "../../src/server/lib/create-route";
import defaultMiddleware from "../../src/server/lib/default-middleware";

const helloWorld = async ({ request, response }) => {
  response.status(200);
  response.json({ message: "Hello World" });
};

export default createRoute(defaultMiddleware, helloWorld);
