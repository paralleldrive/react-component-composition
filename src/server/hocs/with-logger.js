const withLogger = async ({ request, response }) => {
  const { body, headers, method, query, url } = request;
  const requestId = response.locals.requestId;

  console.log(`${requestId} REQUEST MADE`);
  console.log({
    requestId,
    time: new Date().toISOString(),
    url,
    method,
    headers: JSON.stringify(headers),
    body: JSON.stringify(body),
    query: JSON.stringify(query),
  });

  return { request, response };
};

export default withLogger;
