import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Ankara şeffaf plak, Ankara şeffaf plak Tedavisi, Ankara Şeffaf plak tedavisi fiyatları, Ankara Şeffaf Plak Tedavisi, Invisalign, Şeffaf plak Ankara, Şeffaf diş teli Ankara',
  title: 'UZM. DT. ZEYNEP KARAKOÇ - Ankara Şeffaf Plak Tedavisi',
  url: 'www.ankaraseffafplaktedavisi.com',
  author: 'UZM. DT. Zeynep Karakoç',
  keywords: ['ankara şeffaf plak', 'ankara şeffaf plak tedavisi', 'ankara şeffaf plak tedavisi fiyatları', 'ankara şeffaf plak tedavisi', 'invisalign', 'şeffaf plak ankara', 'şeffaf diş teli ankara'],
  img: '',
  twitterId: '',
  facebookId: '@ortodontistzeynepkarakoc',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="tr" />
    </Helmet>
  );
};

export default SEO;
