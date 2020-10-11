import React from 'react';
import { Layout, CartContents, SEO } from 'components';

export default function CartPage() {
  return (
    <Layout>
      <SEO description="Manchester Chemist Cart" title="Cart" />
      <CartContents />
    </Layout>
  );
}
