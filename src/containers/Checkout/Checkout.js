import React, {useState, useEffect} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

const Checkout = (props) => {

	const [ingredientsHook, ingredientsSetHook] = useState({
		salad:1,
		meat:1,
		cheese: 1,
		bacon: 1
		

	});

	useEffect(() => {
		//searchQuery();

		const query = new URLSearchParams(props.location.search);
		const ingredients = {};
		for (let param of query.entries()){
			ingredients[param[0]] = +param[1];
		}

		ingredientsSetHook(ingredients);
	},[]);
	// My Version
	/*const searchQuery = () => {
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
         }
        
        
    } */

	const CheckoutCancelHandler = () => {
		props.history.goBack();
	}

	const CheckoutContinueHandler = () => {
		props.history.replace('/checkout/contact-data');
	}

	return(
		<div>
			<CheckoutSummary 
				ingredients={ingredientsHook} 
				CheckoutCancel={CheckoutCancelHandler} 
				CheckoutContinue={CheckoutContinueHandler}
			/>
			<Route path='/checkout/contact-data' component={ContactData} />
		</div>
		);
}

export default Checkout;