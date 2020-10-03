import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

export function HomePageCollectionsGrid({ collections }) {
  const saleCollection = collections.find(
    collection => collection.title === 'Sale'
  );
  const remainingCollections = collections.filter(
    colletion => colletion.title !== 'Sale'
  );
  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        ></CollectionTile>
      )}
      <RemainingCollections>
        {remainingCollections.map(collection => (
          <CollectionTile
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollections>
    </div>
  );
}
