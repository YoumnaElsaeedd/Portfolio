import React from 'react';

const Shiny = ({ left, right, top, size = 500 }) => (
  <div className="shiny-effect" style={{ top: `${top}px`, width: `${size}px`, height: `${size}px`, zIndex: -1,
      left: left ? `${left}px` : undefined,
      right: right ? `${right}px` : undefined,
    }}
  ></div>
);

export default Shiny;
