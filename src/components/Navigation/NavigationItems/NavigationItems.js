import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const navigationItems = (props) => (
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/' active{/*to zrobi true*/}>Burger Builder</NavigationItem>
			<NavigationItem link='/'>Zamówienie</NavigationItem>

		</ul>
	);

export default navigationItems;