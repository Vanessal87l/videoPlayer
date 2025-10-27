import React, { useState } from "react";
import PropTypes from "prop-types";

let Child = React.memo(({ name }) => {
  console.log("Child render boldi");
  return <h1> Name: {name}</h1>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jass");

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName(name === "Jass" ? "877" : "Jass")}>
        Ism ozgardi
      </button>
      <Child name={name} />
    </div>
  );
}
Parent.displayName = "Parent";
Child.displayName = "Child";
Child.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Parent;
