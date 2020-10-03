import React from 'react';
import Image from 'gatsby-image';
import { ImageGallerWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({ selectedVariantImageId, images }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [setActiveImageThumbnail, images, selectedVariantImageId]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGallerWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handleClick}
              image={image}
            />
          );
        })}
      </div>
    </ImageGallerWrapper>
  );
}
