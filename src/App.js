import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import dataset from "./data/dataset.json";
import Component from './components/Component';
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <Component dataset={dataset} />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
