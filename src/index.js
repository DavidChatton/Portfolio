import './style.css';
import Router from './router';


const routes = [{
  url: '/',
  controller: Portfolio
}];

new Router(routes);