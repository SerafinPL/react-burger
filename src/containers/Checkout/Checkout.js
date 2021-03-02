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
	});

	const searchQuery = () => {
        const query = new URLSearchParams(props.location.search);
        
        let newIngredients = {};
        newIngredients.salad = Number(query.get('salad'));
        
        newIngredients.cheese = Number(query.get('cheese'));
        newIngredients.bacon = Number(query.get('bacon'));
        newIngredients.meat = Number(query.get('meat'));
         if (ingredients.salad != newIngredients.salad || 
        		ingredients.cheese != newIngredients.cheese ||
        		ingredients.bacon != newIngredients.bacon ||
        		ingredients.meat != newIngredients.meat){
         	ingredientsSet(newIngredients);
         console.log(ingredients);
         console.log(newIngredients);
         }
        console.log(ingredients.salad);
        console.log(ingredients.salad !== newIngredients.salad);
        console.log(ingredients);
        
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