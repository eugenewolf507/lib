import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <h1>MyLib</h1>
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
    </>
  );
};

export default IndexPage;

export const Head = () => <title>MyLib</title>;
