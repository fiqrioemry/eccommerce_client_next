import React from "react";
import ButtonElement from "./ButtonElement";

const FormElement = ({
  formTitle,
  buttonTitle,
  children,
  formStyle,
  buttonStyle,
  wrapperStyle,
  handleSubmit,
}) => {
  return (
    <div className={wrapperStyle}>
      <div className="flex-center text-2xl uppercase font-medium">
        {formTitle}
      </div>
      <form onSubmit={handleSubmit} className={formStyle}>
        {children}
        <ButtonElement title={buttonTitle} style={buttonStyle} />
      </form>
    </div>
  );
};

export default FormElement;
