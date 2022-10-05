export const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, f) => f(await y), x);

const createRoute =
  (...middleware) =>
  async (request, response) => {
    try {
      await asyncPipe(...middleware)({
        request,
        response,
      });
    } catch (e) {
      const requestId = response.locals.requestId;
      const { url, method, headers } = request;
      console.log({
        time: new Date().toISOString(),
        body: JSON.stringify(request.body),
        query: JSON.stringify(request.query),
        method,
        headers: JSON.stringify(headers),
        error: true,
        url,
        message: e.message,
        stack: e.stack,
        requestId,
      });
      response.status(500);
      response.json({
        error: "Internal Server Error",
        requestId,
      });
    }
  };

export default createRoute;
