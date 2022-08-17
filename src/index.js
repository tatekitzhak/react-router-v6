import React from "react";
import { createRoot } from "react-dom/client";
// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'
 
function App() {
  return (
    <div>
      <React.StrictMode>
        <div>
          <h1>App</h1>
        </div>
      </React.StrictMode>
    </div>
  );
}
 
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
