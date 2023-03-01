import React from 'react';
import {
  Card, CardContent, CardHeader,
} from '@mui/material';
import { Gallery } from 'react-grid-gallery';
import artwork from '../data/artwork.json';

require.context('../res/artwork/', true, /\.(jpe?g|png|gif|svg)$/);

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
