import React from 'react';
import {
  Layout,
  CollectionContentfulDescription,
  CollectionPageBanner,
} from 'components';
import { AiFillHome } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import {
  CollectionTemplateWrapper,
  Description,
  CollectionBanner,
  TagProd,
  TagNamesWrapper,
  TagNames,
  TagNamesPicturesWrapper,
  TagNamePic,
  ShopNowBtn,
  CollectionTrack,
} from './styles';
import ProductContext from 'context/ProductContext';
import { navigate } from '@reach/router';

export default function ProductTemplate(props) {
  const { products, collections } = React.useContext(ProductContext);
  /* const [tagsName, setTagsName] = React.useState(); */
  const tagId = props.pageContext.shopifyId;
  var tags = [];
  var backToTags = [];
  const CurrentURLhandle = window.location.pathname.replace('/products/', '');

  collections
    .find(collection => collection.shopifyId === tagId)
    .products.forEach(product => {
      tags.push(...product.tags);
      const uniqueTags = new Set(tags);
      backToTags = [...uniqueTags];
    });

  const handleTags = tag => {
    navigate(`/products/${tag}`);
  };

  /* const handleProductPage = p => {
    navigate(`/products/${p.handle}`);
  }; */

  return (
    <Layout>
      <CollectionTrack>
        <div>
          <AiFillHome onClick={() => navigate(`/`)} />
        </div>

        <IoMdArrowDropright />
        <div>
          {collections.find(collection => collection.shopifyId === tagId).title}
        </div>
      </CollectionTrack>
      <CollectionTemplateWrapper>
        <Description>
          <CollectionContentfulDescription prop={props} />
        </Description>

        <TagProd>
          <TagNamesWrapper>
            <h4>
              {
                collections.find(collection => collection.shopifyId === tagId)
                  .title
              }
            </h4>
            {tags
              ? backToTags?.map((tag, i) => (
                  <TagNames
                    role="presentation"
                    key={i}
                    onClick={() => handleTags(tag)}
                  >
                    {tag}
                  </TagNames>
                ))
              : ''}
          </TagNamesWrapper>
          <div>
            <CollectionBanner>
              <CollectionPageBanner />
            </CollectionBanner>
            <span>
              {
                collections.find(
                  collection => collection.handle === CurrentURLhandle
                ).description
              }
            </span>
            <TagNamesPicturesWrapper>
              {tags
                ? backToTags?.map((tag, i) => (
                    <TagNamePic role="presentation" key={i}>
                      <div onClick={() => handleTags(tag)} role="presentation">
                        {tag}
                      </div>

                      <div>
                        {
                          products.filter(product => product.tags[0] === tag)[0]
                            .description
                        }
                      </div>

                      <div>
                        <img
                          onClick={() => handleTags(tag)}
                          role="presentation"
                          src={
                            products.filter(
                              product => product.tags[0] === tag
                            )[0].images[0].originalSrc
                          }
                          alt=" "
                        />
                      </div>
                      <ShopNowBtn onClick={() => handleTags(tag)}>
                        Shop Now
                      </ShopNowBtn>
                    </TagNamePic>
                  ))
                : ''}
              {/* {tagsName
              ? products
                  .filter(product => product.tags[0] === tagsName)
                  .map(p => (
                    <TagProduct
                      role="presentation"
                      onClick={() => handleProductPage(p)}
                    >
                      {p.title}
                    </TagProduct>
                  ))
              : ''} */}
            </TagNamesPicturesWrapper>
          </div>
        </TagProd>
      </CollectionTemplateWrapper>
    </Layout>
  );
}
