import * as React from 'react';
import PropTypes from 'prop-types';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter';
import Menu from '../components/menu/Menu';
import Drawer from '../components/drawer/Drawer';
import Cart from '../components/cart/Cart';
import Button from '../components/button/Button';
import Product from '../components/product/Product';
import { useBodyOverflow } from '../hooks/useBodyOverflow';
import Modal from '../components/modal/Modal';
import * as S from '../styles/pages/home';

/**
 * @param {Shirt[]} shirts
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Home({ shirts }) {
  const [search, setSearch] = React.useState('');
  const [mobileSearchActive, setMobileSearchActive] = React.useState(
    false,
  );
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState({
    id: '',
    image: '',
    name: '',
    sizes: [],
  });

  useBodyOverflow(showCart, showMenu);

  function filterColor(color) {
    const filteredProducts = shirts.filter(
      shirt => color === 'all' || shirt.color === color,
    );

    setProducts(filteredProducts);
  }

  function filterSize(size) {
    const filteredProducts = shirts.filter(
      shirt => size === 'all' || shirt.sizes.some(sz => sz === size),
    );

    setProducts(filteredProducts);
  }

  React.useEffect(() => {
    if (search) {
      if (!mobileSearchActive) {
        setMobileSearchActive(true);
      }

      const filteredProducts = shirts.filter(shirt =>
        new RegExp(search, 'i').test(shirt.name),
      );

      setProducts(filteredProducts);
    } else {
      setProducts(shirts);
    }
  }, [search]);

  function onSearchClick() {
    setMobileSearchActive(prevState => !prevState);
  }

  function onChangeSearch(value) {
    setSearch(value);
  }

  function selectProduct(product) {
    setSelectedProduct(product);
    setShowModal(true);
  }

  function addProductToCart(product) {
    const hasCartProduct = cartItems.some(
      item => item.id === product.id && item.size === product.size,
    );

    if (hasCartProduct) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === product.id && cartItem.size === product.size) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + product.quantity,
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      const newCartItems = cartItems.slice(0);
      newCartItems.push(product);
      setCartItems(newCartItems);
    }

    setShowCart(true);
  }

  function updateCartItem(id, data) {
    setCartItems(prevState => {
      return prevState.map(item => {
        if (item.id === id && item.size === data.size) {
          return { ...item, ...data };
        }
        return item;
      });
    });
  }

  function removeCartItem(id, data) {
    setCartItems(items =>
      items.filter(item => !(item.id === id && item.size === data.size)),
    );
  }

  return (
    <>
      <Head>
        <title>Tes Tee App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <S.Main>
        <Header
          onMenuClick={() => setShowMenu(true)}
          onSearchClick={onSearchClick}
          onCartClick={() => setShowCart(true)}
        >
          <Search value={search} onChange={onChangeSearch} />
        </Header>
        {mobileSearchActive && (
          <S.MobileSearch>
            <Search value={search} onChange={onChangeSearch} focused />
          </S.MobileSearch>
        )}
        <S.MainContent>
          <S.FilterBox>
            <Filter filterColor={filterColor} filterSize={filterSize} />
          </S.FilterBox>
          <S.ProductListBox>
            <S.ProductList>
              {products.map(product => (
                <div key={product.id}>
                  <Product
                    name={`Tes-tee ${product.color} cotton shirt`}
                    image={product.image}
                    sizes={product.sizes}
                  >
                    <Button
                      bg="primaryRegular"
                      color="primaryLightest"
                      onClick={() => selectProduct(product)}
                      fullWidth
                    >
                      Add to cart
                    </Button>
                  </Product>
                </div>
              ))}
            </S.ProductList>
          </S.ProductListBox>
        </S.MainContent>
        <Modal
          showModal={showModal}
          productId={selectedProduct.id}
          productImage={selectedProduct.image}
          productName={selectedProduct.name}
          productSizes={selectedProduct.sizes}
          onClickAdd={addProductToCart}
          closeModal={() => setShowModal(false)}
        />
        <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
          <Menu onClose={() => setShowMenu(false)} />
        </Drawer>
        <Drawer
          open={showCart}
          anchor="right"
          onClose={() => setShowCart(false)}
        >
          <Cart
            items={cartItems}
            updateItem={updateCartItem}
            removeItem={removeCartItem}
            clear={() => setCartItems([])}
            onClose={() => setShowCart(false)}
          />
        </Drawer>
      </S.Main>
    </>
  );
}

Home.propTypes = {
  shirts: PropTypes.array.isRequired,
};

export async function getStaticProps() {
  const shirtsDirectory = path.join(process.cwd(), '__mocks__');
  const filenames = fs.readdirSync(shirtsDirectory);

  const [shirts] = filenames.map(filename => {
    const filePath = path.join(shirtsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(fileContents);
  });

  return {
    props: {
      shirts,
    },
  };
}
