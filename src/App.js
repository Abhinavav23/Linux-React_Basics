import './App.css';
// named import with same name and curly braces 
// and can be multiple in one file
import { Header } from './components/Header/Header';
// default import without curly braces, name can be anything 
// and only one from a file
import Footer from './components/Footer';
import { Product } from './components/Product';
import { Mobile } from './components/Mobile';
import { Login } from './components/Header/Login';

function App() {
  let name = 'Virat';
  const sellerInfo = {name: 'Abhinav', address: 'Delhi'}
  let ram = ['6gb', '4gb', '3gb', '2gb']

  return (
    <div>
      <Header/>
      {/* <Header2/> */}
      
      <Product/>
      <Mobile 
      company='Apple' 
      model={'iphone 14'} 
      price={80000} 
      color={'blue'} 
      rating={5} 
      instock={true} 
      ram ={ram}
      sellerInfo = {{name: 'Abhinav', address: 'Delhi'}}
      // sellerInfo={sellerInfo}
      {...sellerInfo}
      // functions can also be passed as props 
      />
      {/* <Mobile company='Samsung' model='Galaxy' price={60000} color='black' rating={4.5} ram ={['6gb', '4gb']}/>
      <Mobile company='Xiomi' model='Note 12' price={25000} color='black' rating={4.5}/>
      <Mobile company='Samsung' model='Galaxy' price={60000} color='black' rating={4.5}/> */}
      <Footer/>
      <Login/>
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

