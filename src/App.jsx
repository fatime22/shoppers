import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Edit from "./Pages/Edit";
import Add from "./Pages/Add";
import Products from "./Pages/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/" element={<Admin />}>
          <Route path="/admin/" element={<Products />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
     
    </div>
  );
};

export default App;
