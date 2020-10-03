import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';

export function QuantityAdjuster({ item, onAdjust }) {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: +1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <div>{quantity}</div>
      <div>
        <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
        <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
      </div>
    </QuantityAdjusterWrapper>
  );
}
