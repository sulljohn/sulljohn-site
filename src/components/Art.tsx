import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, CardHeader, Typography,
} from '@mui/material';
import { Gallery, Image as GalleryImage } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import artwork from '../data/artwork.json';

// Use import.meta.globeager to dynamically import images from subdirectories
const images = import.meta.glob('../res/artwork/**/*.{jpg,jpeg,png,gif,svg}', { eager: true });

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
  useEffect(() => {
    // Function to resolve the correct image paths based on the relative paths in the artwork data
    const resolveImagePaths = () => {
      artwork.data.forEach((section: ArtworkData) => {
        section.art.forEach((artItem) => {
          // Resolve the paths based on the artwork.json data
          const thumbnailPath = `../res/artwork${artItem.thumbnail_orig.slice(1)}`;
          const imagePath = `../res/artwork${artItem.src_orig.slice(1)}`;
          // Find the image from the globbed files
          artItem.src = images[thumbnailPath]?.default || '';
          artItem.image = images[imagePath]?.default || '';
        });
      });
    };
    resolveImagePaths();
  }, []);

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
