import React, {useState, useEffect} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

const Checkout = (props) => {

	const [ingredients, ingredientsSet] = useState({
		salad:1,
		meat:1,
		cheese: 1,
		bacon: 1
	});

	useEffect(() => {
		searchQuery();
	},[]);

	const searchQuery = () => {
        const query = new URLSearchParams(props.location.search);
        
        let newIngredients = {};
        newIngredients.salad = query.get('salad');
        
        newIngredients.cheese = query.get('cheese');
        newIngredients.bacon = query.get('bacon');
        newIngredients.meat = query.get('meat');
        // if (ingredients != newIngredients){
        // 	ingredientsSet(newIngredients);
        // }
        console.log(newIngredients);
        
    }

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