import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ background: 'rgb(246,241,239)', width: '100%' }}>
      <Header />
      <LayoutWrapper
        style={{
          background: 'rgb(246,241,238)',
          width: '100%',
        }}
      >
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </div>
  );
};

export { Layout };
