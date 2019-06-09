import React from "react";
import Gallery from "react-grid-gallery";
import { imageNames } from "./imageNames";

const IMAGES = imageNames.map(x => ({
  src: x.src,
  thumbnail: x.thumb,
  thumbnailWidth: 200,
  thumbnailHeight: 200,
  isSelected: false,
}));

export const GalleryComponent = () => <Gallery images={IMAGES} lazyLoad={true} showThumbnails={false} enableImageSelection={false} />;
