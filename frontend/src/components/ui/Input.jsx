import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { title, classNameLabel = "", classNameInput = "", type = "text", onchange ,...props },
  ref
) {
  return (
    <>
      <label className={`text-md md:text-xl ${classNameLabel}`}>{title}</label>
      <input
        className={` mt-2 rounded-md  ${classNameInput}`}
        {...props}
        type={type}
        ref={ref}
        onChange={onchange}
      />
    </>
  );
});
export default Input;
