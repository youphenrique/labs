import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import CloseIcon from '../icons/Close';
import CartIcon from '../icons/Cart';
import { SHIPPING_PRICE } from '../../utils/constants';
import CostPrice from '../cost-price/CostPrice';
import * as S from './Cart.style';

/**
 * @param {CartProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Cart(props) {
  const { items, updateItem, removeItem, clear, onClose } = props;
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const totalSum = items.reduce(
      (accumulator, currentItem) => accumulator + currentItem.totalPrice,
      0,
    );
    setTotal(totalSum);
  }, [items]);

  function handleChangeItem(id, item) {
    if (item.quantity === 0) {
      removeItem(id, item);
    } else {
      updateItem(id, item);
    }
  }

  const emptyCart = items.length === 0;
  const grandTotal = total + SHIPPING_PRICE;

  return (
    <S.CartRoot>
      <S.CartHeader>
        <div>
          <CartIcon />
          <S.CartHeaderText>My cart</S.CartHeaderText>
        </div>
        <S.CartHeaderClose onClick={onClose}>
          <CloseIcon />
        </S.CartHeaderClose>
      </S.CartHeader>
      <S.CartBody emptyCart={emptyCart}>
        {emptyCart ? (
          <S.CartEmptyText>You cart is empty.</S.CartEmptyText>
        ) : (
          <>
            <S.CartItems>
              {items.map(item => (
                <S.Item key={`${item.id}-${item.size}`}>
                  <S.ItemImage src={item.image} alt={item.name} />
                  <div>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemCostPrice>
                      <CostPrice
                        units={item.quantity}
                        size={item.size}
                        handleChange={newItemData => {
                          handleChangeItem(item.id, newItemData);
                        }}
                      />
                    </S.ItemCostPrice>
                  </div>
                </S.Item>
              ))}
            </S.CartItems>
            <S.CartEmptyButton>
              <Button
                color="primaryLight"
                onClick={clear}
                outlined
                fullWidth
              >
                Empty cart
              </Button>
            </S.CartEmptyButton>
            <S.CartDivider />
            <S.CartTotals>
              <S.CartTotal>{`Shipping — $${SHIPPING_PRICE}`}</S.CartTotal>
              <S.CartTotal>{`Shirts — $${total}`}</S.CartTotal>
              <S.CartGrandTotal>{`Grand total — $${grandTotal}`}</S.CartGrandTotal>
            </S.CartTotals>
            <S.CartDivider />
          </>
        )}
      </S.CartBody>
      <S.CartFooter>
        <Button
          bg="primaryRegular"
          color="primaryLightest"
          disabled={emptyCart}
          fullWidth
        >
          Proceed to checkout
        </Button>
      </S.CartFooter>
    </S.CartRoot>
  );
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
