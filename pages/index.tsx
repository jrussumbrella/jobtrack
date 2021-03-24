import Layout from "components/core/layout";
import Intro from "components/landing/intro";
import Offer from "components/landing/offer";
import Pricing from "components/landing/pricing";

const IndexPage = () => (
  <Layout title="Home">
    <Intro />
    <Offer />
    <Pricing />
  </Layout>
);

export default IndexPage;
