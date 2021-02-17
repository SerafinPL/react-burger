import React from 'react';

import classes from './Backdrop.moudle.css';

const backdrop = (props) => (
	props.show ? <div className={classes.Backdrop}></div> : null
)

export default backdrop;