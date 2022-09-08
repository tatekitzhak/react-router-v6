import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from "@/App";
import store from '@/store/configureStore.dev';


import { apiPosts, apiCommentsOostId, apiMultipleConcurrentRequests, apiRequestRemoteImage, axiosCreateInstance } from '@/api/axios';
import {useRoutesNestedElement} from '@/utils/menus';

// Test import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'


// Test import of styles
import '@/styles/index.scss';
 
console.log('store:',store())
 
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


