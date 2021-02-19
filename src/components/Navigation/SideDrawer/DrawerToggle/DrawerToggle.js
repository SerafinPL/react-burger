import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
		<div onClick={props.clicked} className={classes.Menu}>Menu</div>
	);

export default drawerToggle;