import React from 'react';

import classes from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {

	return(
	<Aux>
		<Toolbar/>
		<SideDrawer/>
		<main className={classes.content}>
			{props.children}
		</main>
	</Aux>
	)
};

export default layout;