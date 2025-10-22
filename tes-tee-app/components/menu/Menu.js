import * as React from 'react';
import PropType from 'prop-types';
import CloseIcon from '../icons/Close';
import InstagramIcon from '../icons/Instagram';
import FacebookIcon from '../icons/Facebook';
import TwitterIcon from '../icons/Twitter';
import * as S from './Menu.style';

/**
 * @param {MenuProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Menu(props) {
  const { onClose } = props;

  return (
    <S.MenuRoot>
      <S.MenuLogo>
        <S.MenuIconClose>
          <S.MenuIconCloseButton onClick={onClose}>
            <CloseIcon />
          </S.MenuIconCloseButton>
        </S.MenuIconClose>
        <S.Logo src="/assets/tes-tee-logo.png" alt="Tes Tee" />
        <S.Slogan>
          Developer apparel <sup>TM</sup>
        </S.Slogan>
      </S.MenuLogo>
      <nav>
        <ul>
          <S.MenuNavItem>
            <S.MenuNavItemText color="primaryDark">
              About us
            </S.MenuNavItemText>
          </S.MenuNavItem>
          <S.MenuNavItem bg="primaryLighter">
            <S.MenuNavItemText color="primaryDark">
              Products
            </S.MenuNavItemText>
          </S.MenuNavItem>
          <S.MenuNavItem bg="primaryLight">
            <S.MenuNavItemText color="primaryDark">
              Be our artist
            </S.MenuNavItemText>
          </S.MenuNavItem>
          <S.MenuNavItem bg="primaryRegular">
            <S.MenuNavItemText color="primaryLightest">
              FAQ
            </S.MenuNavItemText>
          </S.MenuNavItem>
          <S.MenuNavItem bg="primaryDark">
            <S.MenuNavItemText color="primaryLightest">
              Contact us
            </S.MenuNavItemText>
          </S.MenuNavItem>
        </ul>
      </nav>
      <S.MenuSocialNetworks>
        <S.MenuSocialNetworksButton>
          <InstagramIcon />
        </S.MenuSocialNetworksButton>
        <S.MenuSocialNetworksButton>
          <FacebookIcon />
        </S.MenuSocialNetworksButton>
        <S.MenuSocialNetworksButton>
          <TwitterIcon />
        </S.MenuSocialNetworksButton>
      </S.MenuSocialNetworks>
    </S.MenuRoot>
  );
}

Menu.propTypes = {
  onClose: PropType.func.isRequired,
};
