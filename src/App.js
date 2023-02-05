import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import data from "./component/data.js";
import "./style.css";

function App() {
  const travelJournal = data.map((item) => {
    return <Main key={item.id} item={item} />;
  });

  return (
    <>
      <div className="wrapper">
        <Navbar />
        {travelJournal}
      </div>
    </>
  );
}

export default App;
