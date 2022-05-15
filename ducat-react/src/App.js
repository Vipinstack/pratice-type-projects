import React from 'react';
import Home from './components/Home';
import Myclass from './components/Myclass';
import Myfirst from './components/Myfirst';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NotFund from './components/NotFund';



function App() {


let arr=['a','b','c','d','f'];

const empData=[
  {name:'vipin', Age:'12', city:'Moradabad'},
  {name:'kapil', Age:'10', city:'Rampur'},
  {name:'SAchin', Age:'22', city:'Ghaziabad'},
  {name:'Jaspal', Age:'45', city:'Meerut'}
]

const arr2=[
 {
      "id": 1,
      "name": "Home Page",
      "info": "This little bit of info is being loaded from a Rails API.",
  
  },
  {
    "id": 2,
    "name": "Home Page",
    "info": "This little bit of info is being loaded from a Rails API.",

},
{
  "id": 3,
  "name": "Home Page",
  "info": "This little bit of info is being loaded from a Rails API.",

}
]






  return (
    <main>
      <Router>
         
        <nav>
          <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/about'>About</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/gallery'>Gallery</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/contact'>Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        </nav>
        <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/contact" exact component={Contact}/>
          <Route component={NotFund}/>
        </Switch>
        </div>
        </Router>
        {/* <h1>My first Progrme !!</h1>
      <p>My Name Is vipin</p> 
      <Myfirst value="200"  name ="Chauhan" course={arr} />
      <Myclass  name={empData} cast={arr2}/>
       <Home />  */}
      </main>

    
  );
}

export default App

