import * as React from 'react';
import PropTypes from 'prop-types';

export default function Equals({ size }) {
  const sizes = { small: 1, medium: 1.5, large: 2 };
  const inlineStyle = {
    transform: sizes[size] ? `scale(${sizes[size]})` : 'scale(1)',
  };

  return (
    <svg
      style={inlineStyle}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="12"
        height="2"
        transform="matrix(0.996917 0.0784591 0 1 0 5)"
        fill="#4882F7"
      />
      <rect
        width="12"
        height="2"
        transform="matrix(0.996917 0.0784591 0 1 0 0)"
        fill="#4882F7"
      />
    </svg>
  );
}

Equals.defaultProps = {
  size: 'small',
};

Equals.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
