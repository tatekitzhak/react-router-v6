import loadable from "@loadable/component";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Header from '@/components/navigation/navLinks/Header';
import Invoices, { Invoice } from "./Invoices";
import Topics from '@/components/navigation/Topics';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Public from '@/components/pages/Public';
import NotFound from '@/components/pages/NotFound';
import Search from "./Search";

function Loading(){
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />,
});

function Router() {
  return (
    <div className="App">
      <Header/>
     
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="topics/*" element={<Topics />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<Public />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<p>Please select an invoice above</p>}
            ></Route>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
