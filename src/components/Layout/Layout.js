import React from 'react';

import classes from './Layout.module.css';

import Aux from '../../hoc/Aux';

const layout = (props) => {

	return(
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.content}>
			{props.children}
		</main>
	</Aux>
	)
};

export default layout;