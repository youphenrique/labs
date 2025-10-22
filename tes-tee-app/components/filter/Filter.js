import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Filter.style';

const colors = [
  { hex: '#FFFFFF', name: 'white' },
  { hex: '#333333', name: 'gray' },
  { hex: '#77A3FC', name: 'blue' },
  { hex: '#F59943', name: 'orange' },
  { hex: '#F25A5A', name: 'red' },
  { hex: '#38E893', name: 'green' },
  { hex: '#CE8BED', name: 'purple' },
  { hex: '#F0E04F', name: 'yellow' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

/**
 * @param {FilterProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Filter(props) {
  const { filterColor, filterSize } = props;
  const [activeFilterColor, setActiveFilterColor] = React.useState('all');
  const [activeFilterSize, setActiveFilterSize] = React.useState('all');

  return (
    <S.FilterRoot>
      <S.FilterCategory>
        <S.FilterText>Colors</S.FilterText>
        <S.FilterColors>
          <S.Color
            tabIndex="0"
            role="button"
            joker
            active={activeFilterColor === 'all'}
            onClick={() => {
              setActiveFilterColor('all');
              filterColor('all');
            }}
            onKeyDown={() => {
              setActiveFilterColor('all');
              filterColor('all');
            }}
          />
          {colors.map(color => (
            <S.Color
              tabIndex="0"
              key={color.name}
              color={color.hex}
              active={activeFilterColor === color.hex}
              role="button"
              onClick={() => {
                setActiveFilterColor(color.hex);
                filterColor(color.name);
              }}
              onKeyDown={() => {
                setActiveFilterColor(color.hex);
                filterColor(color.name);
              }}
            />
          ))}
        </S.FilterColors>
      </S.FilterCategory>
      <S.FilterCategory>
        <S.FilterText>Sizes</S.FilterText>
        <S.FilterSizes>
          {sizes.map(size => (
            <S.Size
              key={size}
              tabIndex="0"
              role="button"
              active={activeFilterSize === size}
              onClick={() => {
                setActiveFilterSize(size);
                filterSize(size);
              }}
              onKeyDown={() => {
                setActiveFilterSize(size);
                filterSize(size);
              }}
            >
              <span>{size}</span>
            </S.Size>
          ))}
        </S.FilterSizes>
      </S.FilterCategory>
    </S.FilterRoot>
  );
}

Filter.propTypes = {
  filterColor: PropTypes.func.isRequired,
  filterSize: PropTypes.func.isRequired,
};
