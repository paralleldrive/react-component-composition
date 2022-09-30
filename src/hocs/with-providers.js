import withFeatures from "./with-features.js";
import withLayout from "./with-layout.js";
import withLogger from "./with-logger.js";
import withUser from "./with-user.js";

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const withProviders = ({
  showBorderDecorations = true,
  showFooter = true,
} = {}) =>
  compose(
    withUser,
    withFeatures,
    withLogger,
    withLayout({ showBorderDecorations, showFooter })
  );

export default withProviders;
