import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "@/Router";
import Container from "@/components/pages/container";
import store from '@/store/index';

// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss';
import '@/styles/index.css';
 
console.log('store:',store)
 
const root = document.getElementById("root");
const view = createRoot(root);

view.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    );
