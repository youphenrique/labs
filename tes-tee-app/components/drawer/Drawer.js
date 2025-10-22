import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Drawer.style';

/**
 * @param {DrawerProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Drawer(props) {
  const { children, open, anchor, onClose } = props;

  return (
    <>
      {open && <S.DrawerBackdrop open={open} onClick={onClose} />}
      <S.DrawerRoot open={open} anchor={anchor}>
        {children}
      </S.DrawerRoot>
    </>
  );
}

Drawer.defaultProps = {
  anchor: 'left',
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
