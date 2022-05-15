import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Digital from './Digital';

export class Header extends Component {
    render() {
        return (
			
			<div>
			<header id="header">
			<div class="header_top">
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="contactinfo">
								<ul class="nav nav-pills">
									<li style={{fontWeight:"bold", backgroundColor:"black"}}><a href="#"><i class="fas fa-clock"></i><Digital /></a></li>
									<li><a href="#"><i class="fa fa-phone"></i> +91 9990235068</a></li>
									<li><a href="#"><i class="fa fa-envelope"></i> Vipinchauhanyaski@domain.com</a></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="social-icons pull-right">
								<ul class="nav navbar-nav">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="header-middle">
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<div class="logo pull-left">
								<a href="index.html"><img src="images/home/logo.png" alt="" /></a>
							</div>
							<div class="btn-group pull-right">
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										USA
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canada</a></li>
										<li><a href="#">UK</a></li>
									</ul>
								</div>
								
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										DOLLAR
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canadian Dollar</a></li>
										<li><a href="#">Pound</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-sm-8">
							<div class="shop-menu pull-right">
								<ul class="nav navbar-nav">
									<li><Link to="/account"><i class="fa fa-user"></i> Account</Link></li>
									<li><Link to="/wishlist"><i class="fa fa-star"></i> Wishlist</Link></li>
									<li><Link to="/checkout"><i class="fa fa-crosshairs"></i> Checkout</Link></li>
									<li><Link to="/card"><i class="fa fa-shopping-cart"></i> Cart</Link></li>
									<li><Link to="/login"><i class="fa fa-lock"></i> Login</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div class="header-bottom">
				<div class="container">
					<div class="row">
						<div class="col-sm-9">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<div class="mainmenu pull-left">
								<ul class="nav navbar-nav collapse navbar-collapse">
									<li><Link to="/" class="active">Home</Link></li>
									<li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><Link to="/checkout">Products</Link></li>
										<li><Link to="/checkout">Product Details</Link></li> 
										<li><Link to="/checkout">Checkout</Link></li> 
										<li><Link to="/card">Cart</Link></li> 
										<li><Link to="/login">Login</Link></li> 
                                    </ul>
                                </li> 
								<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><Link to="/blog_list">Blog List</Link></li>
										<li><Link to="/blog_single">Blog Single</Link></li>
                                    </ul>
                                </li> 
								<li><Link to="/posts">Posts</Link></li>
								<li><Link to="/photos">Photos</Link></li>
								<li><Link to="/users">Users</Link></li>
								<li><Link to="/error">404</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/form">Redux({this.props.mycount})</Link></li>

								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="search_box pull-right">
								<input type="text" placeholder="Search"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		</div>
        )
    }
}

const mapStateToProps = (state) =>{
	return{
		mycount:state.count
	}
}


export default connect(mapStateToProps)(Header)

