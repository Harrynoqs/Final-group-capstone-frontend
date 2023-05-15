import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/configureStore';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>,
);
