import React from 'react';
import Cart from './Cart';
import uuid from '../../utils/uuid';
import Button from '../button/Button';
import Drawer from '../drawer/Drawer';

export default {
  title: 'Cart',
  component: Cart,
};

const cartProducts = [
  {
    id: uuid(),
    name: 'TES-TEE blue cotton shirt',
    image: '/assets/shirts/blue-tee.png',
    quantity: 1,
    size: 'XS',
  },
  {
    id: uuid(),
    name: 'TES-TEE white cotton shirt',
    image: '/assets/shirts/white-tee.png',
    quantity: 3,
    size: 'M',
  },
  {
    id: uuid(),
    name: 'TES-TEE blue cotton shirt',
    image: '/assets/shirts/blue-tee.png',
    quantity: 2,
    size: 'XXL',
  },
  {
    id: uuid(),
    name: 'TES-TEE orange cotton shirt',
    image: '/assets/shirts/orange-tee.png',
    quantity: 1,
    size: 'XL',
  },
  {
    id: uuid(),
    name: 'TES-TEE yellow cotton shirt',
    image: '/assets/shirts/yellow-tee.png',
    quantity: 5,
    size: 'L',
  },
];

export const empty = () => {
  const [showCart, setShowCart] = React.useState(false);

  function onCloseCart() {
    setShowCart(false);
  }

  return (
    <>
      <Button onClick={() => setShowCart(true)}>Open cart</Button>
      <Drawer open={showCart} anchor="right" onClose={onCloseCart}>
        <Cart
          items={[]}
          updateItem={() => {}}
          removeItem={() => {}}
          clear={() => {}}
          onClose={onCloseCart}
        />
      </Drawer>
    </>
  );
};

export const items = () => {
  const [cartItems, setCartItems] = React.useState(
    cartProducts.slice(0, cartProducts.length - 2),
  );
  const [showCart, setShowCart] = React.useState(false);

  function onCloseCart() {
    setShowCart(false);
  }

  function updateItem(id, data) {
    setCartItems(prevState => {
      return prevState.map(item => {
        if (item.id === id && item.size === data.size) {
          return { ...item, ...data };
        }
        return item;
      });
    });
  }

  function removeItem(id, data) {
    setCartItems(prevState =>
      prevState.filter(
        item => !(item.id === id && item.size === data.size),
      ),
    );
  }

  return (
    <>
      <Button onClick={() => setShowCart(true)}>Open cart</Button>
      <Drawer open={showCart} anchor="right" onClose={onCloseCart}>
        <Cart
          items={cartItems}
          updateItem={updateItem}
          removeItem={removeItem}
          clear={() => setCartItems([])}
          onClose={onCloseCart}
        />
      </Drawer>
    </>
  );
};
