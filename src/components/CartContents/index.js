import React from 'react';
import CartContext from 'context/CartContext';
import {
  CartContentsWrapper,
  InnerContent,
  MyItems,
  CartItem,
  Titles,
  QuantityAdjusterWrapper,
  Del,
  Price,
  OrderTotalWrapper,
  OrderTotal,
  BasketTotal,
  Savings,
  CheckoutBtn,
  HelpWrapper,
  SecureCheckout,
  Returns,
} from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { FaShoppingCart, FaLock, FaTag } from 'react-icons/fa';

export function CartContents() {
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

  return (
    <CartContentsWrapper>
      <h2>
        <FaShoppingCart />
        My Basket
      </h2>

      <InnerContent>
        <MyItems>
          <h4>My Items</h4>

          <p>Non-prescription items ({totalQuantity})</p>
          {checkout?.lineItems?.map(item => (
            <CartItem key={item.variant.id}>
              <img alt="" src={item.variant.image.src} />
              <Titles>
                <div>{item.title}</div>
                {/*  <div>
                  {item.variant.title === 'Default Title'
                    ? ''
                    : item.variant.title}
                </div> */}
              </Titles>
              <QuantityAdjusterWrapper>
                <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
              </QuantityAdjusterWrapper>
              <Del>
                <RemoveLineItem lineItemId={item.id} />
              </Del>
              <Price>${item.variant.price}</Price>

              {/* <div>${(item.quantity * item.variant.price).toFixed(2)}</div> */}
            </CartItem>
          ))}
        </MyItems>
        <OrderTotalWrapper>
          <h4>Order Total</h4>
          <OrderTotal>
            <BasketTotal>
              <span>Basket total</span> <span>${checkout?.totalPrice}</span>
            </BasketTotal>
            <Savings>
              <div>
                <span>Your total savings today</span>{' '}
                <span>${checkout?.totalPrice}</span>
              </div>
              <div role="presentation" onClick={handleSavingsDes}>
                What is this?
              </div>
              {savingsDes ? (
                <div>
                  Total savings shows you all the money you have saved today by
                  adding up savings from RRP.
                </div>
              ) : (
                ''
              )}
            </Savings>
          </OrderTotal>
          <CheckoutBtn>Proceed to Checkout </CheckoutBtn>
        </OrderTotalWrapper>
      </InnerContent>

      <HelpWrapper>
        <SecureCheckout>
          <div>
            <FaLock size="2rem" />
          </div>
          <span>
            <div>Secure Checkout</div>
            <div>Safe, secure and private place to shop.</div>
          </span>
        </SecureCheckout>
        <Returns>
          <div>
            <FaTag size="2rem" />
          </div>
          <span>
            <div>Returns</div>
            <div>Our team is here to help</div>
          </span>
        </Returns>
      </HelpWrapper>

      {/* <div>
        <span>${checkout?.totalPrice}</span>
      </div> */}
    </CartContentsWrapper>
  );
}
