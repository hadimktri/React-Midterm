import { useState } from "react";
import Upper from "./Upper";
import Lower from "./Lower";

import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
 
  return (
    <>
      <Upper index={index} />
      <Lower setIndex={setIndex} />
    </>
  );
}

export default App;
