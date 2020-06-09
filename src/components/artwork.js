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
        {artwork.data.map((item, index) => (
          <div key={item.title} className="artSection">
            <h1 data-aos="fade-down">{item.title}</h1>
            <div data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
              <Gallery images={item.art} enableImageSelection={false} />
            </div>
          </div>
        ))}
        <div data-aos="fade-up">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Artwork;
