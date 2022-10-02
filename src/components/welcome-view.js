const WelcomeView = ({ userName = "" } = {}) => {
  return <h1 style={{ margin: "10px" }}>Welcome {userName}!</h1>;
};

export default WelcomeView;
