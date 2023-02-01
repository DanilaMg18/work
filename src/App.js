import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCard1 from "./components/firscard";
import Main from "./components/mainLayout";
import Login from "./components/login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<MainCard1/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
