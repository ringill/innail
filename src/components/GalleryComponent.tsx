import React from "react";
import Gallery from "react-grid-gallery";
import { imageNames } from "./imageNames";

const IMAGES = imageNames.map(x => ({
  src: x,
  thumbnail: x,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  isSelected: false,
}));

export const GalleryComponent = () => <Gallery images={IMAGES} lazyLoad={true} showThumbnails={false} />;
