import withProviders from "../src/hocs/with-providers";

function Home({ user = {} } = {}) {
  return <h1 style={{ margin: "10px" }}>Welcome {user.name}!</h1>;
}

export default withProviders()(Home);
