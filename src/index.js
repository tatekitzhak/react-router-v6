import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";

// Test import of a JavaScript module
import { example } from '@/js/example';
import {useRoutesNestedElement} from '@/utils/menus';

// Test import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'


// Test import of styles
import '@/styles/index.scss';
 

 
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
    <BrowserRouter>
        {useRoutesNestedElement()}
        <React.StrictMode>
            <App/>
        </React.StrictMode>
       
    </BrowserRouter>
    );


