import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';

const CheckoutSummary = (props) => {
	return(
		<div>
			<h1>Mamy nadzieje że będzie Ci samkować</h1>
			<div className='classes.burger'>
				<Burger/>
			</div>
		</div>

		);
}

export default CheckoutSummary;