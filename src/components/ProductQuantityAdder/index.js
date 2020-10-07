import React from 'react';

import { Input } from '../Input';
import {
  ProductQuantityAdderWrapper,
  AddToCartButton,
  IncrementBtn,
  DecrementBtn,
} from './styles';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ available, variantId, tileView }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <ProductQuantityAdderWrapper>
      <div onSubmit={handleSubmit} tile={tileView}>
        <span>
          <DecrementBtn onClick={handleDecrement}>-</DecrementBtn>
          <span>
            <Input
              disabled={!available}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </span>

          <IncrementBtn onClick={handleIncrement}>+</IncrementBtn>
        </span>

        <AddToCartButton type="submit" disbaled={!available}>
          Add
        </AddToCartButton>
      </div>
    </ProductQuantityAdderWrapper>
  );
}
