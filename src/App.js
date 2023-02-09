import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCard1 from "./components/cardsLayouts/firscard";
import Main from "./components/mainLayout";
import LoginLayout from "./components/loginLayout";
import MainCard2 from "./components/cardsLayouts/secondcard";
import MainCard3 from "./components/cardsLayouts/thirdcard";
import MainCard4 from "./components/cardsLayouts/fourthcard";
import MainCard5 from "./components/cardsLayouts/fifthcard";
import MainCard6 from "./components/cardsLayouts/sixthcard";
import InnerCard from "./components/innerComponents/innerComp1";
import Register from "./components/register";
import Admin from "./components/adminLoyout";
import Login2 from "./components/login";



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/login" element={<LoginLayout/>}>
          <Route index element={<Login2/>}/>
          <Route path='/login/register' element={<Register/>}/>
        </Route>

        <Route path="/" element={<Main/>}>
          <Route index element={<MainCard1/>}/>
          <Route path="/secondcard" element={<MainCard2/>}/>
          <Route path="/thirdcard" element={<MainCard3/>}/>
          <Route path="/fourthcard" element={<MainCard4/>}/>
          <Route path="/fifthcard" element={<MainCard5/>}/>
          <Route path="/sixthcard" element={<MainCard6/>}/>
          <Route path="/innerCard" element={<InnerCard/>}/>
          <Route path='/admin' element ={<Admin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
