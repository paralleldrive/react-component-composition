import cuid from "cuid";

const appendId = (response) => {
  if (!response.locals) response.locals = {};
  response.locals.requestId = cuid();
  return response;
};

const withRequestId = async ({ request, response }) => ({
  request,
  response: appendId(response),
});

export default withRequestId;
