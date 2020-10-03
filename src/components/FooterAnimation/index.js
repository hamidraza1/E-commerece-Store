import React from 'react';
import { Menu, Options, FooterAnimationWrapper } from './styles';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

export function FooterAnimation(props) {
  const [options, setOptions] = React.useState(false);

  const handleMenu = e => {
    setOptions(!options);
  };

  const container = {
    hidden: {
      height: 0,

      transition: { duration: 0.3 },
    },
    show: {
      height: 'auto',
      transition: { duration: 0.3 },
    },
  };
  return (
    <FooterAnimationWrapper>
      <div>
        <span role="presentation" onClick={handleMenu}>
          <Menu>{props.title}</Menu>
          {options ? (
            <MdArrowDropUp size="1.5em" />
          ) : (
            <MdArrowDropDown size="1.5em" />
          )}
        </span>
        <Options
          variants={container}
          initial="hidden"
          animate={options ? 'show' : 'hidden'}
          style={{ originY: '0' }}
        >
          {props.children}
        </Options>
      </div>
    </FooterAnimationWrapper>
  );
}
