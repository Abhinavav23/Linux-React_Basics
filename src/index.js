import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {AppV2} from './componentsV2/AppV2'
import { AppV3 } from './componentsV3/AppV3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AppV3/>
);


// ReactDOM.render()

// const reactDom = {
//   render: function(){
//   }
// }

// const react = {
//   createRoot: function(){
//   }
// }

const returnSum = () =>{
  return 10
}