import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
			 
			return(

			<li key={igKey}>
				<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
			)
		});

	;
	return (
		<Aux>
			<h3>Twoje zamówinie</h3>
			<p>Przepyszny Burger z poniższymi składnikami</p>
			<ul> 
				{ingredientSummary}
			</ul>
			<p>Chcesz złożyć zamówienie?</p>
		</Aux>
	)
};

export default orderSummary;