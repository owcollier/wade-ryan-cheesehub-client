import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

const dummyCheese = [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
];

ReactDOM.render(
<CheeseList cheeses={dummyCheese}/>,
 document.getElementById('root'));
registerServiceWorker();
