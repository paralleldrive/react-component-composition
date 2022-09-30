import { useEffect } from "react";

export const log = (x) =>
  console.log({
    timestamp: Date.now(),
    ...x,
  });

const withLogger = (Component) => {
  return function LoggingProvider({ ...props }) {
    const { user: id } = props;
    useEffect(() => {
      log({
        type: "mount",
        name: "MyPage",
        user: id,
      });
    }, [id]);
    return <Component {...props} />;
  };
};

export default withLogger;
