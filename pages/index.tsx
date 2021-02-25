import Layout from "components/core/layout";
import Intro from "components/landing/Intro";
import Offer from "components/landing/Offer";
import Pricing from "components/landing/Pricing";

const IndexPage = () => (
  <Layout title="Home">
    <div className="container">
      <Intro />
      <Offer />
      <Pricing />
    </div>
  </Layout>
);

export default IndexPage;
