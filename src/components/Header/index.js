import React from 'react';
import {
  HeaderOuterMostWrapper,
  HeaderOuterdiv,
  NavOuterdiv,
  HeaderWrapper,
  Nav,
  Menu,
  ShopName,
  Ul,
  Li,
  CartContentsWrapper,
  Triangle,
} from './styles';
import { Cart } from '../Cart';
import { Search } from '../Search';
import ProductContext from 'context/ProductContext';

import { navigate } from '@reach/router';
import { FaUserCircle } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MiniCart } from 'components';

export function Header() {
  const { /*  products, */ collections } = React.useContext(ProductContext);
  const [miniCartCard, setMiniCartCard] = React.useState(false);
  /* const [collecionName, setCollecionName] = React.useState();
  const [tagsName, setTagsName] = React.useState(); */
  const [menu, setMenu] = React.useState(false);
  /* var tags = [];
  var backToTags = []; */

  const handleMenu = () => {
    setMenu(!menu);
  };

  /* const collectionOptions = collection => {
    setCollecionName(collection?.title);
  }; */

  const moveToTagsPage = collection => {
    navigate(`/products/${collection.handle}`);
  };

  /* const tagOptions = tag => {
    setTagsName(tag);
  }; */

  const handleMiniCartCard = () => {
    setMiniCartCard(!miniCartCard);
  };

  const container = {
    hidden: {
      height: 0,

      transition: { duration: 0.3 },
    },
    show: {
      height: 'auto',
      transition: { duration: 0.3 },
    },
  };

  return (
    <HeaderOuterMostWrapper>
      <HeaderOuterdiv>
        <HeaderWrapper>
          <div>
            <Menu onClick={handleMenu}>
              <FiMenu size="1.5em" />
            </Menu>
            <ShopName>ManchesterChemist</ShopName>
          </div>

          <div>
            <span>
              <Search />
            </span>
          </div>

          <div>
            <span>
              <FaUserCircle size="1.5em" />
            </span>
            <button>Sign In/Up</button>

            <span>
              <span onClick={handleMiniCartCard}>
                <Cart />
              </span>

              {miniCartCard ? (
                <>
                  <CartContentsWrapper>
                    <MiniCart />
                  </CartContentsWrapper>
                  <Triangle></Triangle>
                </>
              ) : (
                ''
              )}
            </span>
          </div>
        </HeaderWrapper>
      </HeaderOuterdiv>
      <NavOuterdiv>
        <Nav>
          <Ul
            variants={container}
            initial="hidden"
            animate={menu ? 'show' : 'hidden'}
            style={{ originY: '0' }}
          >
            {collections.map((collection, i) => (
              <Li
                /* onMouseEnter={() => collectionOptions(collection)}
                onMouseLeave={() => collectionOptions()} */
                onClick={() => moveToTagsPage(collection)}
                key={i}
              >
                <span>{collection.title}</span>
              </Li>
            ))}
          </Ul>
        </Nav>
      </NavOuterdiv>

      {/* {collecionName
        ? collections
            .find(collection => collection.title === collecionName)
            .products.map(product => {
              tags.push(...product.tags);
              const uniqueTags = new Set(tags);
              backToTags = [...uniqueTags];
            })
        : ''}

      {tags
        ? backToTags?.map(tag => (
            <div
              onMouseEnter={() => tagOptions(tag)}
              onMouseLeave={() => tagOptions()}
            >
              {tag}
            </div>
          ))
        : ''}
      {tagsName
        ? products
            .filter(product => product.tags[0] === tagsName)
            .map(p => (
              <StyledLink to={`/products/${p.handle}`}> {p.title}</StyledLink>
            ))
        : ''} */}
    </HeaderOuterMostWrapper>
  );
}
