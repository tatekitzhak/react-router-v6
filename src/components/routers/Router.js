import loadable from "@loadable/component";
import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { routes } from '@/utils/menus';
import Breadcrumbs from '@/components/navigation/navLinks/Breadcrumbs';
import Header from '@/components/navigation/navLinks/Header';
import Invoices, { Invoice } from "../navigation/Invoices";
import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import TopicsRouter from '@/components/routers/TopicsRouter';
import Topic from '@/components/navigation/navLinks/Topic';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Public from '@/components/pages/Public';
import NotFound from '@/components/pages/NotFound';
import Search from "../navigation/Search";
/**
 * https://www.codingdeft.com/posts/react-router-tutorial/
 * https://github.com/collegewap/react-router-tutorial
 * https://react-router-tutorial.vercel.app/
 */
function Loading() {
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("@/components/navigation/Dashboard"), {
  fallback: <Loading />,
});

function Router(props) {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="topics/*" element={<TopicsRouter routes={routes} />}>
            <Route index element={<p>Please select a Topic</p>} />
            <Route path=":subtopic/*" element={<Topic {...props} />} />
          </Route>
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
