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
import { MiniCart, HoveredTagsSection } from 'components';

export function Header() {
  const { products, collections } = React.useContext(ProductContext);
  const [miniCartCard, setMiniCartCard] = React.useState(false);
  const [displayHovered, setDisplayHovered] = React.useState(false);
  const [collecionName, setCollecionName] = React.useState();

  const [menu, setMenu] = React.useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const collectionOptions = collection => {
    setCollecionName(collection?.title);
    if (!displayHovered) {
      setDisplayHovered(!displayHovered);
    }
  };
  const removeCollectionHoverOptions = () => {
    if (displayHovered) {
      setDisplayHovered(!displayHovered);
    }
  };

  const moveToTagsPage = collection => {
    navigate(`/products/${collection.handle}`);
  };

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
      <HeaderOuterdiv onMouseEnter={() => removeCollectionHoverOptions()}>
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
              <span role="presentation" onClick={handleMiniCartCard}>
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
                onMouseEnter={() => collectionOptions(collection)}
                onClick={() => moveToTagsPage(collection)}
                key={i}
              >
                <span>{collection.title}</span>
              </Li>
            ))}
          </Ul>

          <HoveredTagsSection
            collecionName={collecionName}
            displayHovered={displayHovered}
            setDisplayHovered={setDisplayHovered}
          />
        </Nav>
      </NavOuterdiv>
    </HeaderOuterMostWrapper>
  );
}
