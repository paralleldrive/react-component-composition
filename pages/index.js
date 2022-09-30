import Head from "next/head";
import Image from "next/image";
import withProviders from "../src/hocs/with-providers";
import styles from "../styles/Home.module.css";

function Home({ user = {} } = {}) {
  return <h1>Welcome {user.name}!</h1>;
}

export default withProviders()(Home);
