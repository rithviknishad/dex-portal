import type { NextPage } from "next";
import Error from "next/error";

const Home: NextPage = () => {
  return <Error statusCode={404} />;
};

export default Home;
