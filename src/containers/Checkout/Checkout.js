import React, {useState} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

const Checkout = (props) => {

	const [ingredients, ingredientsSet] = useState({
		salad:1,
		meat:1,
		cheese: 1,
		bacon: 1
	});

	const CheckoutCancelHandler = () => {
		props.history.goBack();
	}

	const CheckoutContinueHandler = () => {
		props.history.replace('/checkout/contact-data');
	}

	return(
		<div>
			<CheckoutSummary 
				ingredients={ingredients} 
				CheckoutCancel={CheckoutCancelHandler} 
				CheckoutContinue={CheckoutContinueHandler}
			/>
		</div>
		);
}

export default Checkout;