import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Wrapper.scss";

const Wrapper = () => {
  return (
    <div className="Wrapper">
      <Form />
      <List />
    </div>
  );
};

export default Wrapper;
