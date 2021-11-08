import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import dataset from "./data/dataset.json";
import Component from './components/Component';

const App = () => {
  return (
    <ThemeProvider>
      <Component dataset={dataset} />
    </ThemeProvider>
  );
}

export default App;
