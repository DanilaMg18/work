import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCard1 from "./components/CardsLayouts/firstCardPage";
import Main from "./components/mainLayout";
import LoginLayout from "./components/loginLayout";
import MainCard2 from "./components/CardsLayouts/secondCardPage";
import MainCard3 from "./components/CardsLayouts/thirdCardPage";
import MainCard4 from "./components/CardsLayouts/fourthCardPage";
import MainCard5 from "./components/CardsLayouts/fifthCardPage";
import MainCard6 from "./components/CardsLayouts/sixthCardPage";
import InnerCard from "./components/ProductPageCards/productPageCard1";
import Register from "./components/LoginAndRegisterPanel/register";
import Cart from "./components/shoppingCart";
import Login2 from "./components/LoginAndRegisterPanel/login";
import Donate from "./components/donate";
import Adminka from "./components/adminPanel";



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
          <Route path='/shoppingCart' element={<Cart/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path="/admin" element={<Adminka/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
