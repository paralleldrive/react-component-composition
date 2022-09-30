import withFeatures from "./with-features.js";
import withLayout from "./with-layout.js";
import withLogger from "./with-logger.js";
import withUser from "./with-user.js";

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const withProviders = ({ showFooter = false } = {}) =>
  compose(withUser, withFeatures, withLogger, withLayout({ showFooter }));

export default withProviders;
