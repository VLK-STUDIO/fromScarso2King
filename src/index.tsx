import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import theme from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
