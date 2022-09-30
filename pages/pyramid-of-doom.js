import { createContext, useContext, useEffect } from "react";
import { BorderDecorations, Footer } from "../src/hocs/with-layout";
import { createUser } from "../src/hocs/with-user";
import { log } from "../src/hocs/with-logger";

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
      <h1 style={{ margin: "10px" }}>Welcome {user.name}!</h1>
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
