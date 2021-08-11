import React from "react";

const Button = ({ text, containerClass, buttonClass }) => (
  <div
    className={`${containerClass} transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 cursor-pointer`}
  >
    <button className={` ${buttonClass} font-bold font-mono`}>{text}</button>
  </div>
);

export { Button };
