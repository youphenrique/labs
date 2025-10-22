import React from 'react';
import Button from '../button/Button';
import Modal from './Modal';
import uuid from '../../utils/uuid';

export default {
  title: 'Modal',
  component: Modal,
};

export const standard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const productId = uuid();

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open modal</Button>
      <Modal
        showModal={showModal}
        productId={productId}
        productImage="/assets/shirts/blue-tee.png"
        productName="TES-TEE blue cotton shirt"
        productSizes={['XS', 'L', 'XL']}
        onClickAdd={() => {}}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};

export const content = () => {
  const productId = uuid();

  return (
    <Modal
      showModal
      productId={productId}
      productImage="/assets/shirts/red-tee.png"
      productName="TES-TEE red cotton shirt"
      productSizes={['XS', 'XXL', 'L', 'XL']}
      onClickAdd={() => {}}
      closeModal={() => {}}
    />
  );
};
