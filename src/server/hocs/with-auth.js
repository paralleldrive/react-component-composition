const withAuth = async ({ request, response }) => {
  console.log("User is authenticated!");

  return { request, response };
};

export default withAuth;
