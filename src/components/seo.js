import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ title }) => {
  return (
    <title>
      {useSiteMetadata().title} | {title}
    </title>
  );
};

export default Seo;
