import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import ScrollSpy from "./ScrollSpy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollSpy />
      <Outlet />
    </>
  );
}

export default App;
