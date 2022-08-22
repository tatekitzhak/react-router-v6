import loadable from "@loadable/component";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Invoices, { Invoice } from "./Invoices";
import RouteAsObj from "./RouteAsObj";
import Search from "./Search";

const Loading = () => {
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />,
});

function Router() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/object_route">
              Route as Object
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/public">
              Public Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoices">
              Invoices
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
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

export const Home = () => {
  return <div>You are in Home page</div>;
};
export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};
export const PublicPage = () => {
  return <div>This page can be accessed by anyone</div>;
};
export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default Router;
