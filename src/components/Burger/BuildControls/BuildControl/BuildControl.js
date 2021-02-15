import React from 'react';

import classes from './BuildControl.module.css'

const bulidControl = (props) => (
		<div className={classes.BulidControl}>
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less}>Mniej</button>
			<button className={classes.More}>Więcej</button>
		</div>
	);

export default bulidControl;