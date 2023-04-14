import React from 'react';

const IndexPage = () => {
  return (
    <>
      <h1>HTML CSS</h1>
      <h2>1 Новые теги html5 </h2>
      <h3>Семантическая верстка</h3>
      <p>header footer main nav</p>
      <p>
        article - завершенная композицию на странице, которая независимо
        распространяется и может повторно использоваться.
      </p>
      <p>
        section - может использоваться для разделения статьи или представления
        глав. Часто имеет заголовок.{' '}
      </p>
      <p>
        aside - для дополнительно контента, рекламные блоки, архив и т.п. Не для
        блоков, просто позиционированных в стороне.
      </p>
      <p>HTML5 media - для потокового медиаконтента </p>
      <p>
        Audio - парный, атрибуты: src, controls, loop, preload (none, metadata,
        auto) ogg, mp3, wav{' '}
      </p>
      <p>
        Video -парный, аналогичные атрибуты + width, height, autoplay, poster
        ogv, mp4, flv, webm
      </p>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
