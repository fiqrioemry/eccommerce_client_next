import React from "react";
import ButtonElement from "./ButtonElement";

const FormElement = ({
  status,
  loading,
  message,
  children,
  formStyle,
  formTitle,
  titleStyle,
  buttonTitle,
  buttonStyle,
  wrapperStyle,
  handleSubmit,
  loadingStyle,
}) => {
  return (
    <div className={wrapperStyle}>
      <div className={titleStyle}>{formTitle}</div>
      {status && <div className="text-red-500">{message}</div>}
      <form onSubmit={handleSubmit} className={formStyle}>
        {children}
        <ButtonElement
          title={buttonTitle}
          style={buttonStyle}
          loading={loading}
          loadingStyle={loadingStyle}
        />
      </form>
    </div>
  );
};

export default FormElement;
