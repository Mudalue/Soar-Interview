import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import { getUsers } from "../../../utils/api";

const Multiselect = () => {
;
  const [selectValue, setSelectValue] = useState("");
  const [response, setResponse] = useState([]);
  const handleChange = (selectValue) => {
    setSelectValue(selectValue);
  };
  //datalist for multi select
  const options = response.map((item) => {
    return { label: item.name, value: item.id };
  })
  //get users
  const users = async () => {
    const response = await getUsers();
    setResponse(response.data)
  };
  useEffect(() => {
    users();
  }, []);

  return (
    <>
      <Select
        options={options}
        value={selectValue}
        onChange={handleChange}
        isMulti={true}
      />
    </>
  );
};

export default Multiselect;
