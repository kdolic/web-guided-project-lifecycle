import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  };
  console.log("APPFUNC: Component Constructed - 1st render starting");

  useEffect(()=>{
    console.log("APPFUNC: Component Mounted - Part of 1st render");
  }, []);

  useEffect(()=>{
    console.log("APPFUNC: Component Updated - Part of 1st render, and all other renders");
  });

  console.log("APPFUNC: Component Rendered");
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
