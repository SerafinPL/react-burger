import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {

	return(
			<div className={classes.Order}>
				<p>Składniki:</p>
				<p>Cena: <strong>15,00</strong> zł</p>
			</div>
		);

}

export default Order;