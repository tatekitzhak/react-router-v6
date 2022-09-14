import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from "@/App";
import store from '@/store/configureStore.dev';


import { apiPosts, apiCommentsOostId, apiMultipleConcurrentRequests, apiRequestRemoteImage, axiosCreateInstance } from '@/api/axios';
import {useRoutesNestedElement} from '@/utils/menus';

// Import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';

// Tests
console.log('store:',store() )
////
/**
 * https://balajisblog.com/environment-variables-in-react/
 * 
 "scripts": {
  "dev": "cross-env NODE_ENV=dev node index.js",
  "prod": "cross-env NODE_ENV=prod node index.js",
  "error": "cross-env NODE_ENV=dev && node index.js"
}

 */

let baseURL = '';
if (process.env.NODE_ENV == 'development') {
    console.log('process.env.NODE_ENV:',process.env.NODE_ENV )
  baseURL = 'sampleapi.com/end-point';
} else if (process.env.NODE_ENV == 'production') {
  baseURL = 'productionapi.com/end-point';
} else {
  baseURL = 'sampleapi.com/end-point';
}


// --- Render on the DOM ---
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
    <Provider store={store('development')} >
        <BrowserRouter>
        {/* {axiosCreateInstance()} */}
            <App/>       
        </BrowserRouter>
    </Provider>
    );


