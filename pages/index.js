import { useEffect } from "react";
import withProviders from "../src/hocs/with-providers";
import WelcomeView from "../src/components/welcome-view";

function Home({ user = {} } = {}) {
  useEffect(() => {
    fetch("api/hello-world")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <WelcomeView userName={user.name} />;
}

export default withProviders()(Home);
