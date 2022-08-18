import React from 'react';
import ReactDOM from 'react-dom';
// import { Breadcrumbs } from 'react-breadcrumbs-light';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                              Routes
/* ------------------------------------------------------------------- */

const routes = [
  { link: '/', icon: '✅' },
  { link: '/home', icon: '✊', 
    children: [
    { link: '/home/settings', icon: '✋' },
    { link: '/home/clients', icon: '📋', 
      children: [
      { link: '/home/clients/:id', title: 'Welcome, ', suffix: ', to the new world!', icon: '🙂' },
    ] },
  ] },
];

/* ------------------------------------------------------------------- */
/*                             Pages
/* ------------------------------------------------------------------- */

const Root = () => (
  <div>
    <div>You're at Root page</div>

    <Link to='/home'>Go to Home</Link>
  </div>
);

const Home = () => (
  <div>
    <div>You're at Home page</div>

    <Link to='/home/settings'>Go to Settings</Link>
    <br />
    <Link to='/home/clients'>Go to Clients</Link>
  </div>
);

const Settings = () => (
  <div>
    <div>You're at Settings page</div>

    <Link to='/'>Go to Root</Link>
  </div>
);

const Clients = () => (
  <div>
    <div>You're at all clients page</div>

    <Link to='/home/clients/Some client'>Go to client</Link>
  </div>
);

const Client = () => (
  <div>
    <div>You're at some client's page</div>

    <Link to='/'>Go to Root</Link>
    <br />
    <Link to={window.location.pathname + '/notFound'}>Go to Not Found Page</Link>
  </div>
);

const NotFound = () => (
  <div>
    <div>You're at Not Found Page</div>

    <Link to='/'>Go to Root</Link>
  </div>
);

/* ------------------------------------------------------------------- */
/*                               App
/* ------------------------------------------------------------------- */

function App () {
  return (
    <>
      <div >
        {/* <Breadcrumbs routes={routes} notFoundIcon='❗' noTitlesOnMobile={true} /> */}
  
        <Routes>
          <Route  path='/' element={Root} />
          {/* <Route path='/home' element={Home} />
          <Route path='/home/settings' element={Settings} />
          <Route path='/home/clients' element={Clients} />
          <Route path='/home/clients/:id' element={Client} />
          <Route element={NotFound} /> */}
        </Routes>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------- */
/*                             Render
/* ------------------------------------------------------------------- */
export default App;