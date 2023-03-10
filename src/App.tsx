import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./layout/nav/Nav";
import Sidebar from "./layout/sidebar/Sidebar";
import Booking from "./pages/booking/Booking";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route element={<Sidebar />}>
            <Route element={<Nav />}>
              <Route index element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
