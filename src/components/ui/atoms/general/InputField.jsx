import React from "react";

export const InputField = ({
  placeholder,
  name,
  type,
  label,
  handleChange,
  value,
  background,
  required
}) => {
  return (
    <>
      <label htmlFor={name} className={`${label} p-2`}>
        {name}
      </label>
      <input
        value={value}
        className="form-control"
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        style={{ height: 50, boxShadow: "none", backgroundColor: `${background}` }}
        required={required}
      />
    </>
  );
};
