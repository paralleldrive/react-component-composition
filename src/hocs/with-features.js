const withFeatures = (Component) => {
  const features = ["landing-page"];

  return function WithFeatures(props) {
    return <Component features={features} {...props} />;
  };
};

export default withFeatures;
