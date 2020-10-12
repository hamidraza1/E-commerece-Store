import React from 'react';
import './styles.css';
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
  const { collections } = React.useContext(ProductContext);
  const [miniCartCard, setMiniCartCard] = React.useState(false);
  const [displayHovered, setDisplayHovered] = React.useState(false);
  const [collecionName, setCollecionName] = React.useState();
  const [menu, setMenu] = React.useState(false);

  const moveToHomePage = () => {
    navigate(`/`);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleNav = () => {
    if (displayHovered) {
      setDisplayHovered(!displayHovered);
    }
  };
  const openTrinagle = event => {
    let title = event.target.innerText;
    setCollecionName(title);
    if (!displayHovered) {
      setDisplayHovered(!displayHovered);
    }
  };

  const closeHoveredTagsSection = () => {
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
      <HeaderOuterdiv onMouseEnter={handleNav}>
        <HeaderWrapper>
          <div>
            <Menu onClick={handleMenu}>
              <FiMenu size="1.5em" />
            </Menu>
            <ShopName onClick={moveToHomePage}>Manchester-Chemist</ShopName>
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
            <div onMouseEnter={handleNav} role="presentation"></div>
            <span>
              {collections.map((collection, i) => (
                <Li key={i}>
                  <span
                    className="Span"
                    onClick={() => moveToTagsPage(collection)}
                    onMouseEnter={openTrinagle}
                    role="presentation"
                  >
                    {collection.title}
                  </span>
                </Li>
              ))}
            </span>
            <div onMouseEnter={handleNav} role="presentation"></div>
          </Ul>
          <div
            className="HoveredTagsSection"
            onMouseLeave={closeHoveredTagsSection}
            role="presentation"
          >
            <HoveredTagsSection
              collecionName={collecionName}
              displayHovered={displayHovered}
              setDisplayHovered={setDisplayHovered}
            />
          </div>
        </Nav>
      </NavOuterdiv>
    </HeaderOuterMostWrapper>
  );
}
