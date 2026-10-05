import React from "react";

function App() {
  const appName = 'E-Ticaret';
  const condition = false;

  function handleClick(){
    console.log("Click!");
  }

  return (
    <React.Fragment>
      <h1>App Name: {condition ? appName : "App Name Yok"}</h1>

      <button onClick={handleClick}>Click!</button>
    </React.Fragment>
  );
}

export default App;
