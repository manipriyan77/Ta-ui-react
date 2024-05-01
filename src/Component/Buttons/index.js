import React from 'react';

export default function Buttons(props) {
  let { children } = props;
  return (
    <>
      <button className="btn">{children}</button>
    </>
  );
}
