import loadable from "@loadable/component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {routes} from '@/utils/menus';
import Header from '@/components/navigation/navLinks/Header';
import Invoices, { Invoice } from "../Invoices";
import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import TopicsRouter from '@/components/navigation/TopicsRouter';
import Topic from '@/components/navigation/navLinks/Topic';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Public from '@/components/pages/Public';
import NotFound from '@/components/pages/NotFound';
import Search from "../Search";

function Loading(){
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("@/components/navigation/Dashboard"), {
  fallback: <Loading />,
});

function Router(props) {
  console.log("Router:",routes)
  return (
    <div className="App">
      <Header/>
     
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="topics/*" element={<TopicsRouter routes={routes}/>}>
            <Route index element={<p>Please select a Topic</p>} />
            <Route path=":topic_type/*" element={<Topic {...props}/>} />
          </Route>
          {/* <Route path="topics" element={<Topics />}></Route> */}
          
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<Public />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<p>Please select an invoice</p>}
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
