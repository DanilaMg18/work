import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCard1 from "./components/firscard";
import Main from "./components/mainLayout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<MainCard1/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
