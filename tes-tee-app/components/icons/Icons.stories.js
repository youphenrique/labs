import React from 'react';
import styled from 'styled-components';
import AddIcon from './Add';
import CartIcon from './Cart';
import CloseIcon from './Close';
import EqualsIcon from './Equals';
import FacebookIcon from './Facebook';
import HamburgerIcon from './Hamburger';
import InstagramIcon from './Instagram';
import MultiplyIcon from './Multiply';
import SearchIcon from './Search';
import SubtractIcon from './Subtract';
import TwitterIcon from './Twitter';

const Decorator = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.palette.primaryDarker};
`;

export default {
  title: 'Icons',
};

export const add = () => <AddIcon />;

export const cart = () => <CartIcon />;

export const close = () => <CloseIcon />;

export const equals = () => <EqualsIcon />;

export const hamburger = () => <HamburgerIcon />;

export const multiply = () => <MultiplyIcon />;

export const search = () => <SearchIcon />;

export const subtract = () => <SubtractIcon />;

export const instagram = () => <InstagramIcon />;

export const facebook = () => <FacebookIcon />;

export const twitter = () => <TwitterIcon />;

const socialNetworksDecorator = storyFn => (
  <Decorator>{storyFn()}</Decorator>
);

instagram.story = {
  decorators: [socialNetworksDecorator],
};

facebook.story = {
  decorators: [socialNetworksDecorator],
};

twitter.story = {
  decorators: [socialNetworksDecorator],
};
