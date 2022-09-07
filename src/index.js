import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "@/Router";
import Container from "@/components/pages/container";
// import store from '@/store/connect_mapState_mapDispatch/index';
// import store_test from '@/store/pure_js_redux/index';
// import store1 from '@/store/useSelector_useDispatch/index';
//import store2 from '@/store/useSelector_useDispatch2/index';
// import store_logger from '@/store/home-redux-logger/index';
// redux-thunk
import store_thunk from '@/store/aboutPage-redux-thunk/store';

// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss';
import '@/styles/index.css';
 
console.log('store_thunk:',store_thunk)
 
const root = document.getElementById("root");
const view = createRoot(root);

view.render(
    <Provider store={store_thunk}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    );
