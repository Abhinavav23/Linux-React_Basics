import './App.css';
// named import with same name and curly braces 
// and can be multiple in one file
import { Header } from './components/Header/Title/Header';
// default import without curly braces, name can be anything 
// and only one from a file
import Footer from './components/Footer';
import { Product } from './components/Product';
import { Mobile } from './components/Mobile';
import { Login } from './components/Header/Login/Login';
import { List } from './components/Lists/List';
import { ReactElements } from './components/ReactElements/ReactElements';
import { ProductList } from './components/ProductList/ProductList';
import MultipleReturn from './components/ConditionalRendering/MultipleReturn';

function App() {
  let name = 'Virat';
  const sellerInfo = {name: 'Abhinav', address: 'Delhi'}
  let ram = ['6gb', '4gb', '3gb', '2gb']

  return (
    <div>
      {/* <Header/> */}
      {/* <Header2/> */}
      
      {/* <Product/> */}

      {/* <Mobile 
      company='Apple' 
      model={'iphone 14'} 
      price={80000} 
      color={'blue'} 
      rating={5} 
      ram ={ram}
      instock
      sellerInfo = {{name: 'Abhinav', address: 'Delhi'}}
      // sellerInfo={sellerInfo}
      {...sellerInfo}
      // functions can also be passed as props 
      /> */}
      {/* <Mobile company='Samsung' model='Galaxy' price={60000} color='black' rating={4.5} ram ={['6gb', '4gb']}/> */}
      {/* <Mobile company='Xiomi' model='Note 12' price={25000} color='black' rating={4.5}/>
      <Mobile company='Samsung' model='Galaxy' price={60000} color='black' rating={4.5}/> */}

      {/* props and children both */}

      {/* <Footer batchName='Java'>
        <section>
          <div>This is copyright Linux </div>
        </section>
      </Footer> */}

      {/* <Footer>
        <div>This is a copyright Java</div>
      </Footer> */}

      {/* <Footer batchName='Linux'>
        <Login/>  
      </Footer> */}

      {/* <Login/> */}
      {/* <List/> */}
      {/* <ReactElements/> */}
      <ProductList/>
      {/* <MultipleReturn segment='grocery'/>
      <Product/> */}
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

{/* <Mobile/> ---> self closing tags */}

{/* <div class="dark" id="">
  This is a div
  <div></div>
</div>


<br/>
<input type='text'/> */}

// props.children = <Login/> <Login/>

// let a = 10

// for passing boolean values
// true 1.instock = {true}  2.instock
// false 1. instock = {false} 2.
