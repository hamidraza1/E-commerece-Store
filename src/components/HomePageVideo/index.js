import React from 'react';
import { HomePageVideoWrapper } from './styles';
export function HomePageVideo() {
  return (
    <HomePageVideoWrapper>
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
