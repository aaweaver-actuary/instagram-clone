import React from 'react';

const PrimaryButton = ({ children, onClick }) => (
  <button
    className={`
    border-instagram-primaryButtonBg
    hover:border-instagram-primaryButtonBgHover
    active:border-instagram-primaryButtonBgActive
    border-2
    rounded-md
    px-5 py-3
    m-2
    text-white text-xs
    bg-instagram-primaryButtonBg 
    hover:bg-instagram-primaryButtonBgHover
    active:bg-instagram-primaryButtonBgActive
  `}
    onClick={onClick}
  >
    {' '}
    {children}
  </button>
);

export default PrimaryButton;
