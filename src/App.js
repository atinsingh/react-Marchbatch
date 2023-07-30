import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Link } from "./components/Link";
import { Button } from "./components/Button";

const customer = {
  firstName: "Lavish",
  lastName: "Makkar",
  sayHello: function () {},
};

const names = ["Lavish", "Mohit", "John", "Jean"];

const newNameGenerator = () => `${customer.firstName}  ${customer.lastName}`;

function App() {
  const [heading, setHeading] = useState("Welcome to Pragra Coffee Time");
  const [cnt, setCount] = useState(0);

  function getNamesAsList() {
    return names.map((name) => <li>{name}</li>);
  }
  function updateHeading(e) {
    setHeading(e.target.value);
  }

  return (
    <div>
      <h1 id="site-header" className="bold green main-heading">
        {heading}
      </h1>
      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => updateHeading(e)}
          placeholder="type of your headnig"
        ></input>
      </div>
      <h2>{cnt}</h2>
      <Link href="/customer" linkText="Click for More Details"></Link>
      <Button
        btnText={"Click Me to See Action"}
        action={() => alert("Hello World")}
      />
      <div>
        <ul>{getNamesAsList()}</ul>
      </div>
      {customer.sayHello()}
    </div>
  );
}

export default App;
