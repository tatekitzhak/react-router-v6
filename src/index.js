import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "@/Router";
import Container from "@/components/pages/container";
// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss';
import '@/styles/index.css';
 

 
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    );
