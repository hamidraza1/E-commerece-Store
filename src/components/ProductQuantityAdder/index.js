import React from 'react';

import { Input } from '../Input';
import {
  ProductQuantityAdderWrapper,
  AddToCartButton,
  IncrementBtn,
  DecrementBtn,
} from './styles';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ available, variantId }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };
  const aa = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(Number(quantity) + 1);
  };

  return (
    <ProductQuantityAdderWrapper>
      <div onSubmit={handleSubmit}>
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

        <AddToCartButton onClick={aa} type="submit" disbaled={!available}>
          Add
        </AddToCartButton>
      </div>
    </ProductQuantityAdderWrapper>
  );
}
