import Header from './component/Header';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Contact from './component/Contact';
import Blog_list from './component/Blog_list';
import Blog_Single from './component/Blog_Single';
import Account from './component/Account';
import Wishlist from './component/Wishlist';
import Checkout from './component/Checkout';
import Card from './component/Card';
import  Error  from './component/Error';
import Users from './component/Users';
import Posts from './component/Posts';
import Photos from './component/Photos';
// import Form from './component/Form';


function App() {
  return (
    <div>
     
  <Router>
      <Header /> 
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route path="/login"  component={Login}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/blog_list" component={Blog_list}/>
          <Route path="/blog_single" component={Blog_Single}/>
          <Route path="/account" component={Account}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/card" component={Card}/>
          <Route path="/error" component={Error} />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts}/>
          <Route path="/photos" component={Photos}/>
          {/* <Route path="/form" component={Form} /> */}
        </Switch>
      <Footer />
  </Router>

    </div>
  );
}

export default App;
