import styled from 'styled-components';
import { IconButtonRoot } from '../icon-button/IconButton.style';

export const ModalRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  position: relative;
  margin: 1.5rem auto;
  width: auto;
  max-width: 18rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: ${props => props.theme.palette.primaryLightest};
  box-shadow: 0px 4px 80px #9dbcfb;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  align-items: flex-start;
  padding: 1.5rem;
`;

export const ModalHeaderClose = styled(IconButtonRoot)`
  padding: 0;
  margin-left: 0.5rem;
  margin-right: 0;
`;

export const ModalProduct = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalProductImage = styled.img`
  border: 3px solid ${props => props.theme.palette.primaryLighter};
  margin-right: 1.25rem;
  border-radius: 5px;
  width: 4rem;
`;

export const ModalProductName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.187rem;
  color: ${props => props.theme.palette.primaryDark};
`;

export const ModalBody = styled.div`
  padding: 0 1.5rem;
`;

export const ProductPurchaseDetails = styled.div`
  margin-bottom: 1.25rem;
`;

export const ProductDetailsText = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 1.812rem;
  font-weight: bold;
  color: ${props => props.theme.palette.primaryDark};
`;

export const ProductSizes = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Size = styled.div`
  cursor: pointer;
  margin-top: 0.875rem;
  margin-right: 1rem;
  border-radius: 39px;
  padding: 0.375rem 0.875rem;
  display: flex;
  align-items: center;
  border: 3px solid
    ${props =>
      props.active
        ? props.theme.palette.primaryRegular
        : props.theme.palette.primaryLighter};

  span {
    font-size: ${props => (props.selected ? '0.75rem' : '1.25rem')};
    line-height: 1rem;
    font-weight: bold;
    color: ${props =>
      props.active
        ? props.theme.palette.primaryRegular
        : props.theme.palette.primaryLight};
  }
`;

export const ProductQuantities = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.875rem;
  padding-bottom: 0.5rem;
`;

export const ModalDivider = styled.hr`
  background: ${props => props.theme.palette.primaryLighter};
  border-radius: 4px;
  border: transparent;
  height: 3px;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

export const ModalFooter = styled.div`
  padding: 1.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 40;
  background: ${props => props.theme.palette.primaryLightest};
`;
