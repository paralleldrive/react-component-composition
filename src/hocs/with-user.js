import cuid from "cuid";

const createUser = ({
  id = cuid(),
  name = "Anon",
  avatar = "anon.png",
} = {}) => ({
  id,
  name,
  avatar,
});

const withUser = (Component) => {
  const user = createUser();
  console.log(user);

  return function WithUser(props) {
    return <Component user={user} {...props} />;
  };
};

export default withUser;
