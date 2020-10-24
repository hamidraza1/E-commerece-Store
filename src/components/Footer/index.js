import React from 'react';
import { navigate } from '@reach/router';
import { FooterWrapper, FooterInnerOne, FooterLogo, BottomImg } from './styles';
import { FooterAnimation } from 'components';
export function Footer() {
  return (
    <FooterWrapper>
      <FooterInnerOne>
        <div>
          <FooterAnimation title={'Help & Support'}>
            <div>Customer Service</div>
            <div>Returns</div>
            <div>Tips & Advice</div>
            <div>FAQs</div>
          </FooterAnimation>
          <FooterAnimation title={'Our Services'}>
            <div>Over the Counter Medicines</div>
            <div>Price Promise</div>
            <div>Baby Club Signup</div>
          </FooterAnimation>
          <FooterAnimation title={'About Us'}>
            <div>Our Company</div>
            <div>Our Team</div>
            <div>Careers</div>
            <div>Affliates</div>
          </FooterAnimation>
          <FooterAnimation title={'Social'}>
            <div>Facebook</div>
            <div>Twitter</div>
          </FooterAnimation>
        </div>
      </FooterInnerOne>

      <div>
        <FooterLogo>
          <div>
            <div>Logo1</div>
            <div>Logo2</div>
            <div>Logo3</div>
          </div>
        </FooterLogo>
        <div>
          <span>
            <div>2020 Manchesterchemist.shop</div>
            <div>
              <span>Privacy</span>|<span>Terms & conditions</span>|
              <span> Site map</span>
            </div>
          </span>
          <BottomImg
            onClick={() => {
              navigate(
                `https://medicine-seller-register.mhra.gov.uk/search-registry/637`
              );
            }}
          >
            <img src={require('./bottom-img.jpg')} alt="" />
            <div>Prescriptions</div>
          </BottomImg>
        </div>
      </div>
    </FooterWrapper>
  );
}
