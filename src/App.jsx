import React from "react";
import Users from "./Pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
