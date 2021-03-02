import React, {useState} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

const Checkout = (props) => {

	const [ingredients, ingredientsSet] = useState({
		salad:1,
		meat:1,
		cheese: 1,
		bacon: 1
	});

	return(
		<div>
			<CheckoutSummary ingredients={ingredients}/>
		</div>
		);
}

export default Checkout;