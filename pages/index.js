import { useEffect } from "react";
import withProviders from "../src/hocs/with-providers";
import WelcomeView from "../src/components/welcome-view";

function Home({ user = {} } = {}) {
  return <WelcomeView userName={user.name} />;
}

export default withProviders()(Home);
