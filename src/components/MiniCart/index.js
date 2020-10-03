import React from 'react';
import CartContext from 'context/CartContext';
import {
  MyItems,
  CartItem,
  Titles,
  QuantityAdjusterWrapper,
  Del,
  Price,
  Btns,
  Total,
  TotalPrice,
  Bin,
} from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { navigate } from '@reach/router';
import { FaShoppingCart, FaLock, FaTag, FaTrashAlt } from 'react-icons/fa';

export function MiniCart() {
  const { checkout, updateLineItem } = React.useContext(CartContext);
  const [savingsDes, setSavingsDes] = React.useState(false);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  const handleSavingsDes = () => {
    setSavingsDes(!savingsDes);
  };
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  const moveToBasketPage = () => {
    navigate(`/cart`);
  };

  return (
    <MyItems>
      <Btns>
        <div onClick={moveToBasketPage}>View Basket</div>
        <div>CheckOut</div>
      </Btns>

      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <img src={item.variant.image.src} />
          <Titles>
            <div>{item.title}</div>
          </Titles>
          <QuantityAdjusterWrapper>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </QuantityAdjusterWrapper>
          <Del>
            <RemoveLineItem lineItemId={item.id} />
          </Del>
          <Price>${item.variant.price}</Price>
        </CartItem>
      ))}
      <Total>
        <Bin>
          <span>
            <FaTrashAlt />
          </span>
          <span>Empty Basket</span>
        </Bin>
        <TotalPrice>
          Subtotal:<span>${checkout?.totalPrice}</span>
        </TotalPrice>

        {/* <div>${(item.quantity * item.variant.price).toFixed(2)}</div> */}
      </Total>
    </MyItems>
  );
}
