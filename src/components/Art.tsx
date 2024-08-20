import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, Typography,
} from '@mui/material';
import { Gallery, Image as GalleryImage } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import artwork from '../data/artwork.json';

// Import images
const req = require.context('../res/artwork/', true, /\.(jpe?g|png|gif|svg)$/);
// Update object with the proper location for the image; it's static so only needs to be run once
artwork.data.forEach((elem: { art: { src: string; thumbnail_orig: string; image: string; src_orig: string; }[] }) => {
  elem.art.forEach((elem2) => {
    elem2.src = req(elem2.thumbnail_orig) as string;
    elem2.image = req(elem2.src_orig) as string;
  });
});

interface ArtworkItem {
    src_orig: string;
    thumbnail_orig: string;
    caption: string;
    width: number;
    height: number;
    src: string;
    image: string;
}

interface ArtworkData {
    title: string;
    art: ArtworkItem[];
}

interface Slide {
    src: string;
    width?: number;
    height?: number;
}

export default function Art() {
  const [index, setIndex] = useState<number>(-1);
  const [slides, setSlides] = useState<Slide[]>([]);

  const handleClick = (clickedIndex: number, sectionArt: ArtworkItem[]) => {
    const mappedSlides = sectionArt.map(({ image }) => ({
      src: image,
    }));
    setSlides(mappedSlides);
    setIndex(clickedIndex);
  };
  return (
    <Card sx={{ my: 2 }} data-aos="fade-up">
      <CardHeader title="Artwork" sx={{ pb: 0 }} />
      <CardContent sx={{ pt: 0 }}>
        <div className="flex-column">
          {artwork.data.map((item: ArtworkData, itemIndex: number) => (
            <div key={item.title} className="artSection">
              <Typography gutterBottom variant="h6" component="div" data-aos="fade-down" sx={{ mt: 2 }}>
                {item.title}
              </Typography>
              <div data-aos={`fade-${itemIndex % 2 === 0 ? 'right' : 'left'}`}>
                <Gallery
                  images={item.art as GalleryImage[]} // Type assertion for react-grid-gallery
                  onClick={(index) => handleClick(index, item.art)}
                  enableImageSelection={false}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <Lightbox
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Card>
  );
}
