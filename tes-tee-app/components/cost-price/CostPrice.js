import * as React from 'react';
import PropTypes from 'prop-types';
import SubtractIcon from '../icons/Subtract';
import AddIcon from '../icons/Add';
import MultiplyIcon from '../icons/Multiply';
import EqualsIcon from '../icons/Equals';
import { PRODUCT_UNIT_PRICE } from '../../utils/constants';
import * as S from './CostPrice.style';

/**
 * @param {CostPriceProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function CostPrice(props) {
  const { units, size, handleChange } = props;
  const [quantity, setQuantity] = React.useState(units);

  React.useEffect(() => {
    setQuantity(units);
  }, [units]);

  React.useEffect(() => {
    const totalPrice = quantity * PRODUCT_UNIT_PRICE;
    handleChange({ quantity, size, totalPrice });
  }, [quantity]);

  function subtractUnit() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addUnit() {
    setQuantity(quantity + 1);
  }

  return (
    <>
      <S.ActionOptions>
        <S.SubtractButton onClick={subtractUnit}>
          <SubtractIcon />
        </S.SubtractButton>
        <S.AddButton onClick={addUnit}>
          <AddIcon />
        </S.AddButton>
      </S.ActionOptions>
      <S.PriceResult>
        <S.ProductQuantity>{quantity}</S.ProductQuantity>
        <MultiplyIcon />
        <S.ProductSize>
          <span>{size}</span>
        </S.ProductSize>
        <EqualsIcon />
        <S.TotalPrice>{quantity * PRODUCT_UNIT_PRICE}</S.TotalPrice>
      </S.PriceResult>
    </>
  );
}

CostPrice.defaultProps = {
  units: 1,
};

CostPrice.propTypes = {
  units: PropTypes.number,
  size: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
