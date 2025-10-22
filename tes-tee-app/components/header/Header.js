import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import HamburgerIcon from '../icons/Hamburger';
import SearchIcon from '../icons/Search';
import CartIcon from '../icons/Cart';
import * as S from './Header.style';

/**
 * @param {HeaderProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Header(props) {
  const { children, onMenuClick, onSearchClick, onCartClick } = props;

  return (
    <S.HeaderRoot>
      <S.HeaderGroup>
        <S.HeaderMenuButton onClick={onMenuClick}>
          <HamburgerIcon />
        </S.HeaderMenuButton>
        <S.HeaderLogo src="/assets/tes-tee-logo.png" alt="Tes Tee" />
      </S.HeaderGroup>
      <S.DesktopSearch>{children}</S.DesktopSearch>
      <S.HeaderGroup>
        <S.MobileSearchIcon>
          <IconButton onClick={onSearchClick}>
            <SearchIcon />
          </IconButton>
        </S.MobileSearchIcon>
        <S.MyCart role="button" onClick={onCartClick}>
          <CartIcon />
          <S.CartText>My Cart</S.CartText>
        </S.MyCart>
      </S.HeaderGroup>
    </S.HeaderRoot>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
};
