import React from 'react';
import {
  Card, CardContent, CardHeader,
} from '@mui/material';
import { Gallery } from 'react-grid-gallery';
import artwork from '../data/artwork.json';

// Import images
const req = require.context('../res/artwork/', true, /\.(jpe?g|png|gif|svg)$/);

// Update object with the proper location for the image; it's static so only needs to be run once

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
artwork.data.forEach((elem) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  elem.art.forEach((elem2) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access,no-param-reassign
    elem2.src = req(elem2.src_orig);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access,no-param-reassign
    elem2.thumbnail = req(elem2.thumbnail_orig);
  });
});

export default function Art() {
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader title="Artwork" sx={{ pb: 0 }} />
      <CardContent>
        <div className="contentContainer">
          <div className="artContainer">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */}
            {artwork.data.map((item, index) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              <div key={item.title} className="artSection">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                <h1 data-aos="fade-down">{item.title}</h1>
                <div data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
                  <Gallery images={item.art} enableImageSelection={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
