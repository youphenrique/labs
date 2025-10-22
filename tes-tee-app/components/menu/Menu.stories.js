import React from 'react';
import Menu from './Menu';
import Button from '../button/Button';
import Drawer from '../drawer/Drawer';

export default {
  title: 'Menu',
  component: Menu,
};

export const standard = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  function onCloseMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <Button onClick={() => setShowMenu(true)}>Open menu</Button>
      <Drawer open={showMenu} onClose={onCloseMenu}>
        <Menu onClose={onCloseMenu} />
      </Drawer>
    </>
  );
};

standard.story = {
  name: 'default',
};

export const content = () => <Menu onClose={() => {}} />;
