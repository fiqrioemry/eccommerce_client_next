import React from "react";

const SelectInput = ({
  title = null,
  handleChange,
  subtitle,
  option,
  keyName,
  optionValue,
  optionName,
}) => {
  const marginStyle = "flex flex-col";
  const titleStyle = "text-lg font-medium";
  const selectStyle =
    "border border-slate-500 p-2 rounded-md flex-center cursor-pointer";

  return (
    <div className={marginStyle}>
      {!title ? null : (
        <label htmlFor={keyName} className={titleStyle}>
          {title}
        </label>
      )}
      <select
        id={keyName}
        name={keyName}
        onChange={handleChange}
        className={selectStyle}
        required
      >
        <option value="">{subtitle}</option>
        {option.map((item, index) => (
          <option value={item[optionValue]} key={index}>
            {item[optionName]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
