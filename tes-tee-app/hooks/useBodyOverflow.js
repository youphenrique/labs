import * as React from 'react';

/**
 * @param {boolean} showCart
 * @param {boolean} showMenu
 */
export function useBodyOverflow(showCart, showMenu) {
  React.useEffect(() => {
    if (showCart || showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart, showMenu]);
}
