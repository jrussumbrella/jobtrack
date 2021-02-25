import Layout from "components/core/layout";
import Intro from "components/landing/intro";
import Offer from "components/landing/offer";
import Pricing from "components/landing/pricing";

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
