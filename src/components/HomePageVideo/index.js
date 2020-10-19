import React from 'react';
import { navigate } from '@reach/router';
import { HomePageVideoWrapper } from './styles';
export function HomePageVideo() {
  return (
    <HomePageVideoWrapper
      onClick={() => navigate(`https://manchesterchemist.com/register`)}
    >
      <video
        loop
        autoPlay
        muted
        src={require('./Video.mp4')}
        type="video/mp4"
      />
    </HomePageVideoWrapper>
  );
}
