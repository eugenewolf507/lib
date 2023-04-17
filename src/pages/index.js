import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="MyLib">
      <ul>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/englishTenses">English Tenses</Link>
        </li>
        <li>
          <Link to="/englishOther">English Other Grammar</Link>
        </li>
        <li>
          <Link to="/questionsHtmlCss">Questions HTML CSS</Link>
        </li>
        <li>
          <Link to="/questionsJS">Questions JS</Link>
        </li>
        <li>
          <Link to="/questionsReact">Questions React</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
