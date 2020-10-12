import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BannerButtons, BannerWrapper, BannerImage } from './styles';

const query = graphql`
  {
    allContentfulBannerPost {
      edges {
        node {
          title
          images {
            id
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export function CollectionPageBanner() {
  const { allContentfulBannerPost } = useStaticQuery(query);
  const HomePageBannerData = allContentfulBannerPost.edges.find(
    ({ node }) => node.title === 'CollectionBanner'
  ).node.images;

  const data = HomePageBannerData.map(img => {
    const id = img.id;
    const title = img.title;
    const link = img.fluid.src;
    return {
      id,
      title,
      link,
    };
  });

  const [activeTitle, setActiveTitle] = React.useState(data[0].title);
  const [image, setImage] = React.useState(data[0].link);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
      if (count === data.length - 1) {
        setCount(0);
      }
      setActiveTitle(data[count].title);
      setImage(data[count].link);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [count, data]);

  return (
    <BannerWrapper>
      <BannerImage>
        <img src={image ? image : ''} alt=" " />
      </BannerImage>
      <BannerButtons>
        {data.map((item, i) => (
          <div
            className={activeTitle === item.title ? 'active' : ''}
            role="presentation"
            key={i}
            onClick={() => {
              setActiveTitle(item.title);
              setImage(item.link);
              setCount(i);
            }}
          >
            {item.title}
          </div>
        ))}
      </BannerButtons>
    </BannerWrapper>
  );
}
