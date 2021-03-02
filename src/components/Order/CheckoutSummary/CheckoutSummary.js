import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
	return(
		<div className={classes.CheckoutSummary}>
			<h1>Mamy nadzieje że będzie Ci samkować</h1>
			<div className='classes.burger'>
				<Burger ingredients={props.ingredients}/>
			</div>
			<Button 
				btnType='Danger'
				clicked>ANULUJ</Button>
			<Button 
				btnType='Success'
				clicked>KONTYNUUJ</Button>
		</div>

		);
}

export default CheckoutSummary;