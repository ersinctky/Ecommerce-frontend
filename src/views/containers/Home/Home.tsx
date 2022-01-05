import React from "react";

import { Layout } from "../../common/Layout";
import { Header } from "../../common/Header";

export const Home: React.FC = () => {
  return (
    <Layout title="Home Page" keywords={""} description={""}>
      <Header />
    </Layout>
  );
};
