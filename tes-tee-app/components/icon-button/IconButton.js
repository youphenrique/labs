import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './IconButton.style';

/**
 * @param {IconButtonProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function IconButton(props) {
  const { children, onClick, disabled, label } = props;

  return (
    <S.IconButtonRoot
      type="button"
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </S.IconButtonRoot>
  );
}

IconButton.defaultProps = {
  disabled: false,
  label: '',
  onClick: () => {},
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
