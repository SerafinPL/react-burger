import React from 'react';

import classes from './BulidControl.module.css'

const bulidControl = (props) => (
		<div className={classes.BulidControl}>
			<div {classes.Label}>{props.label}</div>
			<button {classes.Less}>Mniej</button>
			<button {classes.More}>Więcej</button>
		</div>
	);

export default bulidControl;