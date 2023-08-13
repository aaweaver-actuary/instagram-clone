import React from 'react';

const SecondaryButton = ({ children, onClick }) => (
  <button
    className={`
    border-instagram-primaryButtonBg
    hover:border-instagram-primaryButtonBgHover
    active:border-instagram-primaryButtonBgActive
    border-2
    rounded-md
    px-5 py-3
    m-2
    text-instagram-primaryButtonBg text-xs
    bg-white
    hover:bg-slate-400
    active:bg-slate-200
  `}
    onClick={onClick}
  >
    {' '}
    {children}
  </button>
);

export default SecondaryButton;
