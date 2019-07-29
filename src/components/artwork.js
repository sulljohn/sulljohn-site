/* eslint-disable */

import React from 'react';
import Gallery from 'react-grid-gallery';
import Footer from './footer';
import artwork from '../data/artwork';

require.context('../res/artwork/', true, /\.(jpe?g|png|gif|svg)$/);

const Artwork = () => {
  return (
    <div className="contentContainer">
      <div className="artContainer">
        {artwork.data.map(item => (
          <div key={item.title} data-aos="fade-in" className="artSection">
            <h1>{item.title}</h1>
            <Gallery images={item.art} enableImageSelection={false} />
          </div>
        ))}
        <Footer data-aos="fade-in" />
      </div>
    </div>
  );
};

export default Artwork;
