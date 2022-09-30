import { useEffect } from "react";

const log = (x) =>
  console.log({
    timestamp: Date.now(),
    ...x,
  });

const withLogger = (Component) => {
  return function LoggingProvider({ user, ...props }) {
    useEffect(() => {
      log({
        type: "mount",
        name: "MyPage",
        user: user.id,
      });
    }, [user]);
    return <Component {...props} />;
  };
};

export default withLogger;
