import React from 'react';

const CppIcon = ({ size = 50, color = 'black' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 296"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <polygon
        points="128,0 256,74 256,222 128,296 0,222 0,74"
        fill={color}
      />
      <text
        x="50%"
        y="50%"
        fill="white"
        fontSize="80"
        fontWeight="bold"
        textAnchor="middle"
        dy=".3em"
      >
        C++
      </text>
    </svg>
  );
};

export default CppIcon;
