import { createContext, useContext, useEffect } from "react";
import { BorderDecorations, Footer } from "../src/hocs/with-layout";
import { createUser } from "../src/hocs/with-user";
import { log } from "../src/hocs/with-logger";
import WelcomeView from "../src/components/welcome-view";

const userContext = createContext();
const UserProvider = userContext.Provider;

const featureContext = createContext();
const FeatureProvider = featureContext.Provider;
const features = ["landing-page"];

const PageComponent = () => {
  const user = useContext(userContext);
  const features = useContext(featureContext);

  useEffect(() => {
    log({
      type: "mount",
      name: "MyPage",
      user: user.id,
    });
  }, [user]);

  return (
    <>
      <BorderDecorations />
      <WelcomeView userName={user.name} />
      <Footer />
    </>
  );
};

const WrappedComponent = () => (
  <UserProvider value={createUser()}>
    <FeatureProvider value={features}>
      <PageComponent />
    </FeatureProvider>
  </UserProvider>
);

export default WrappedComponent;
