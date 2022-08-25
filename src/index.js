import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import { createServer, Model } from 'miragejs';
import { categories } from './db';

createServer({
  models: {
    categories: Model,
    projects: Model,
  },

  seeds(server) {
    server.db.loadData({
      categories
    });
  },

  routes() {
    this.namespace = 'api';
    this.timing = 750;

    this.get('/categories', () => {
      return this.shema.all('categories');
    });
    this.get('/projects', () => {
      return this.shema.all('projects');
    });
    this.post('/projects', (shema, request) => {
      const data = JSON.parse(request.requestBody);

      return shema.create('projects', data);
    });
    
  }

});
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
