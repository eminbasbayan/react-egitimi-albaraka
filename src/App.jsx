import React from "react";
import ProductItem from "./components/ProductItem";

function App() {
  const appName = 'E-Ticaret';
  const condition = false;

  function handleClick(){
    console.log("Click!");
  }

  return (
    <React.Fragment>
      <h1>App Name: {condition ? appName : "App Name Yok"}</h1>

      <ProductItem />

      <button onClick={handleClick}>Click!</button>
    </React.Fragment>
  );
}

export default App;
