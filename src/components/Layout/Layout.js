import React, {Component} from 'react';

import classes from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	constructor(props){
		super(props);
	}

	state ={
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () =>{
		this.setState({showSideDrawer: false})
	}

	// sideDrawerOpenedHandler = () =>{
	// 	this.setState({showSideDrawer: true})
	// }

	render(){
		return(
		<Aux>
			<Toolbar /*opened={this.sideDrawerOpenedHandler}*//>
			<SideDrawer 
				open={this.state.showSideDrawer} 
				closed={this.sideDrawerClosedHandler}/>
			<main className={classes.content}>
				{this.props.children}
			</main>
		</Aux>
		)
	}
};

export default Layout;