import React from 'react';
import Product from './Product';
import Button from '../button/Button';

export default {
  title: 'Product',
  component: Product,
  decorators: [
    storyFn => <div style={{ width: '420px' }}>{storyFn()}</div>,
  ],
};

export const standard = () => (
  <Product
    name="Tes-tee white cotton shirt"
    image="/assets/shirts/white-tee.png"
    sizes={['XS', 'L', 'XL']}
  >
    <Button bg="primaryRegular" color="primaryLightest" fullWidth>
      Add to cart
    </Button>
  </Product>
);
