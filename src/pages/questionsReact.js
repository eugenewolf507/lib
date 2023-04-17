import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="React">
      <p>React</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
