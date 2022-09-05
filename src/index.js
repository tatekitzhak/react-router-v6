import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "@/Router";
import Container from "@/components/pages/container";
// import store from '@/store/connect_mapState_mapDispatch/index';
// import store_test from '@/store/pure_js_redux/index';
import store1 from '@/store/useSelector_useDispatch/index';

// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss';
import '@/styles/index.css';
 
console.log('store1:',store1)
 
const root = document.getElementById("root");
const view = createRoot(root);

view.render(
    <Provider store={store1}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    );
