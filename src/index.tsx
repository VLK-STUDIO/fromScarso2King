import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import theme from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './state';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
