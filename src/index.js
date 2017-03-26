import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { apiClient } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'
import './index.css';

// Initialize mob-rest API adapter
const apiPath = 'https://jsonplaceholder.typicode.com'
apiClient(adapter, { apiPath })

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
