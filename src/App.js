import './App.css';
// named import with same name and curly braces 
// and can be multiple in one file
import { Header } from './components/Header/Header';
// default import without curly braces, name can be anything 
// and only one from a file
import Footer from './components/Footer';
import { Product } from './components/Product';

function App() {
  let name = 'Virat';
  return (
    <div>
      <Header/>
      {/* <Header2/> */}
      <Footer/>
      <Product/>
    </div>
  );
}

export default App; 

// JSX ---> javascript and XML

// let name = 'abhinav';

// <div id="test">
// write a variable --> name
// </div>

// dynamic behaviuor in HTML code which is not possible by default 
// document.getElementById('test').innerText = 'virat'


// HTML --> view
// css ---> look and feel
// js ---> logic

// function sum (){
//   return 10
// }

// let result  = sum()