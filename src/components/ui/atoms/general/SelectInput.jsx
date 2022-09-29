import React from "react";
const style = {
    input : {
        boxShadow: "none"
    }
}
const SelectInput = ({ data, label }) => {
  return (
    <>
      <label htmlFor={label}>
        {label}
      </label>
      <select className="form-select" aria-label="Default select example" style={style.input}>
        {data.length === 0 ? (
          <option>No data available</option>
        ) : (
          data.map((dataValue) => (
            <option key={dataValue.id}>{dataValue}</option>
          ))
        )}
        <option selected>Open this select menu</option>
      </select>
    </>
  );
};

export default SelectInput;
