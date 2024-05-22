import React, { forwardRef } from "react";
const InputField = forwardRef(({ unit, func, cls }, ref) => (
  <input
    className={cls}
    ref={ref}
    disabled={unit ? false : true}
    type="text"
    maxLength={15}
    onChange={func}
  />
));

export default InputField;
