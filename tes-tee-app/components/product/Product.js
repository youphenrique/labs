import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Product.style';

/**
 * @param {ProductProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Product(props) {
  const { children, name, image, sizes } = props;

  return (
    <S.ProductRoot>
      <S.ProductImage src={image} alt={name} />
      <S.ProductName>{name}</S.ProductName>
      <S.ProductSizes>
        {sizes.map(size => (
          <S.Size key={size}>
            <span>{size}</span>
          </S.Size>
        ))}
      </S.ProductSizes>
      {children}
    </S.ProductRoot>
  );
}

Product.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};
