import React from 'react';
import Layout from '../components/layout';

const EnglishOtherPage = () => {
  return (
    <Layout pageTitle="Other Grammar">
      {/* Be used to / Get used to */}
      <h2>Be used to / Get used to</h2>
      <h3>Be used to</h3>
      <p>
        Shows habit or situation is normal for us, but other might think of it
        as difficult.
      </p>
      <p>Followed by noun or -ing verb</p>
      <h3>Get used to</h3>
      <p>Shows a change from being difficult to becoming normal or easy</p>

      {/* Talking about rules */}
      <h2>Talking about rules</h2>
      <p>Must/mustn't can sound too direct and rude. So we can use:</p>
      <ul>
        <li>have to</li>
        <li>can / can't</li>
        <li>be (not) allowed to</li>
        <li>be (not) supposed to</li>
      </ul>

      {/* Comparisons */}
      <h2>Comparison</h2>
      <h3>Comparative adjectives</h3>
      <ul>
        <li>
          One syllable - add <i>-er</i>
        </li>
        <li>
          Two syllable - add <i>-y</i> or <i>-ier</i>
        </li>
        <li>Two and three syllables - use more</li>
      </ul>
      <h3>Big and small difference</h3>
      <ul>
        <li>Big - much, way, far, a lot, quite a lot</li>
        <li>Small - a bit, slightly, a little bit</li>
      </ul>
      <h3>Noun and Adjective</h3>
      <ul>
        <li>the + noun + of - twice the size of ..</li>
        <li>as + adjective + as - twice as big as</li>
      </ul>
    </Layout>
  );
};

export default EnglishOtherPage;

export const Head = () => <title>English other</title>;
