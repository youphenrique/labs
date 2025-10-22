import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import CloseIcon from '../icons/Close';
import CostPrice from '../cost-price/CostPrice';
import { PRODUCT_UNIT_PRICE } from '../../utils/constants';
import * as S from './Modal.style';

/**
 * @param {ModalProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Modal(props) {
  const {
    showModal,
    productId,
    productImage,
    productName,
    productSizes,
    onClickAdd,
    closeModal,
  } = props;
  const [validAmount, setValidAmount] = React.useState(true);
  const [activeSize, setActiveSize] = React.useState('');
  const [product, setProduct] = React.useState({
    id: '',
    quantity: 0,
    size: '',
    totalPrice: 0,
  });

  React.useEffect(() => {
    if (showModal) {
      setActiveSize(productSizes[0]);
      setProduct({
        id: productId,
        quantity: 1,
        size: productSizes[0],
        totalPrice: PRODUCT_UNIT_PRICE,
      });
    }
  }, [showModal]);

  function handleChangePrice(productData) {
    if (productData.quantity === 0) {
      setValidAmount(false);
    } else {
      setValidAmount(true);
    }

    setProduct(prevState => ({ ...prevState, ...productData }));
  }

  function handleChangeSize(size) {
    setActiveSize(size);
    setProduct(prevState => ({ ...prevState, size }));
  }

  function addToCart() {
    if (validAmount) {
      closeModal();

      const pickedProduct = {
        id: productId,
        name: productName,
        image: productImage,
        size: product.size,
        quantity: product.quantity,
      };

      onClickAdd(pickedProduct);
    }
  }

  return showModal ? (
    <>
      <S.ModalRoot>
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalProduct>
                <S.ModalProductImage
                  src={productImage}
                  alt={productName}
                />
                <S.ModalProductName>{productName}</S.ModalProductName>
              </S.ModalProduct>
              <S.ModalHeaderClose onClick={closeModal}>
                <CloseIcon />
              </S.ModalHeaderClose>
            </S.ModalHeader>
            <S.ModalBody>
              <S.ProductPurchaseDetails>
                <S.ProductDetailsText>Which size?</S.ProductDetailsText>
                <S.ProductSizes>
                  {productSizes.map(size => (
                    <S.Size
                      key={size}
                      tabIndex="0"
                      role="button"
                      active={activeSize === size}
                      onClick={() => {
                        handleChangeSize(size);
                      }}
                      onKeyDown={() => {
                        handleChangeSize(size);
                      }}
                    >
                      <span>{size}</span>
                    </S.Size>
                  ))}
                </S.ProductSizes>
              </S.ProductPurchaseDetails>
              <S.ProductPurchaseDetails>
                <S.ProductDetailsText>How many?</S.ProductDetailsText>
                <S.ProductQuantities>
                  <CostPrice
                    size={activeSize}
                    handleChange={handleChangePrice}
                  />
                </S.ProductQuantities>
              </S.ProductPurchaseDetails>
            </S.ModalBody>
            <S.ModalDivider />
            <S.ModalFooter>
              <Button
                onClick={addToCart}
                bg="primaryRegular"
                color="primaryLightest"
                disabled={!validAmount}
                fullWidth
              >
                Add to cart
              </Button>
            </S.ModalFooter>
          </S.ModalContent>
        </S.ModalContainer>
      </S.ModalRoot>
      <S.ModalOverlay />
    </>
  ) : null;
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productSizes: PropTypes.array.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
