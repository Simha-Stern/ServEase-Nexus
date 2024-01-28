import Layout from "../components/layout/layout";
import UserContextProvider from "../hooks/servantContext";

const ServicesPage = () => {
  return (
    <Layout>
      <UserContextProvider>
        <h1>Content</h1>
        <p>This is the content</p>
      </UserContextProvider>
    </Layout>
  );
};

export default ServicesPage;
