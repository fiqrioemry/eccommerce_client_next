import React from "react";
import ButtonElement from "./ButtonElement";

const FormElement = ({
  formTitle,
  buttonTitle,
  children,
  titleStyle,
  formStyle,
  buttonStyle,
  wrapperStyle,
  handleSubmit,
}) => {
  return (
    <div className={wrapperStyle}>
      <div className={titleStyle}>{formTitle}</div>
      <form onSubmit={handleSubmit} className={formStyle}>
        {children}
        <ButtonElement title={buttonTitle} style={buttonStyle} />
      </form>
    </div>
  );
};

export default FormElement;
