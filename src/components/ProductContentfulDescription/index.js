import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Wrapper,
  Titles,
  Titles2,
  Descriptions,
  Descriptions2,
  RecentViewedWrapper,
  Info,
  Info2,
} from './styles';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import CartContext from 'context/CartContext';
import { RecentViewedProducts } from 'components';

const query = graphql`
  {
    allContentfulBannerPost {
      edges {
        node {
          title
          title2
          title3
          title4
          title5
          description2 {
            description2
          }
          description3 {
            description3
          }
          description4 {
            description4
          }
          description5 {
            description5
          }
        }
      }
    }
  }
`;

export function ProductContentfulDescription({ title, id }) {
  const { changeRecent } = React.useContext(CartContext);
  const { allContentfulBannerPost } = useStaticQuery(query);
  const [descript, setDescript] = React.useState(null);
  const Productdata = allContentfulBannerPost.edges.find(
    ({ node }) => node.title === title
  )?.node;

  var titles = [];
  var descriptionNodes = [];
  var descriptions = [];
  for (var key in Productdata) {
    if (key[0] === 't' && Productdata[key] !== null) {
      titles.push(Productdata[key]);
    }
    if (key[0] === 'd' && Productdata[key] !== null) {
      descriptionNodes.push(Productdata[key]);
    }
  }

  descriptionNodes.map(description =>
    descriptions.push(Object.values(description)[0])
  );
  titles.shift();

  var output = descriptions.map(function (obj, index) {
    var myobj = {};
    myobj[titles[index]] = obj;
    return myobj;
  });

  React.useEffect(() => {
    var btnContainer = document.getElementById('myDIV');
    var btns = btnContainer.getElementsByClassName('btn');
    btns[0] ? btns[0].classList.add('active') : console.log('by');
    changeRecent(id);
  }, [changeRecent, id]);

  const Array = JSON.parse(localStorage.getItem('RecentProductsArray'));

  const handleTitle = event => {
    var reqdescription = output.find(out => {
      if (Object.keys(out)[0] === event.target.innerText) {
        return true;
      }
      return false;
    });

    setDescript(Object.values(reqdescription)[0]);
    var btnContainer = document.getElementById('myDIV');
    var btns = btnContainer.getElementsByClassName('btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  };

  const [view, setView] = React.useState('');
  const [display, setDisplay] = React.useState(false);
  const handleView = event => {
    var reqdescription = output.find(out => {
      for (var i in out) {
        if (i === event.target.innerText) {
          return out;
        }
      }
      return false;
    });

    setView(Object.keys(reqdescription)[0]);
    setDisplay(!display);
  };

  return (
    <>
      <Wrapper>
        <Info>
          <Titles id="myDIV">
            {titles.map((title, i) => (
              <div
                key={i}
                role="presentation"
                onClick={handleTitle}
                className="btn"
              >
                {title}
              </div>
            ))}
          </Titles>
          <Descriptions>{descript ? descript : descriptions[0]}</Descriptions>
        </Info>

        <Info2>
          {output.map((out, i) => (
            <span key={i}>
              <Titles2 onClick={handleView}>
                <div>{Object.keys(out)[0]}</div>
                {display ? (
                  <MdArrowDropDown size="1.5rem" />
                ) : (
                  <MdArrowDropUp size="1.5rem" />
                )}
              </Titles2>
              {view === Object.keys(out)[0] && display ? (
                <Descriptions2>{Object.values(out)[0]}</Descriptions2>
              ) : (
                ''
              )}
            </span>
          ))}
        </Info2>
      </Wrapper>
      <RecentViewedWrapper>
        <h4>Recently Viewed</h4>
        <RecentViewedProducts Array={Array} />
      </RecentViewedWrapper>
    </>
  );
}
