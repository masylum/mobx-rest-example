import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { apiClient } from 'mobx-rest'
import jqueryAdapter from 'mobx-rest-jquery-adapter'
import './index.css';

// Initialize mob-rest API adapter
const apiPath = 'https://jsonplaceholder.typicode.com'
apiClient(jqueryAdapter, { apiPath })

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
