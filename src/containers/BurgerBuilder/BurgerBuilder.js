import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	// constructor(props){
	// 	super(props)

	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false
	}


	updatePurchaseState(ingredients) {
		
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey]
					}).reduce( (summ, el)=> {
						return summ + el;
					}, 0);
		this.setState({purchasable: sum > 0});

	}

	addIngredientHandler = (type) =>{
		const oldCount = this.state.ingredients[type];
		const updateCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients
		};
		updateIngredients[type] = updateCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updateIngredients
		});
		this.updatePurchaseState(updateIngredients);

	}

	removeIngredientHandler = (type) =>{
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updateCount = oldCount - 1;
		const updateIngredients = {
			...this.state.ingredients
		};
		updateIngredients[type] = updateCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({
			totalPrice: newPrice,
			ingredients: updateIngredients
		});
		this.updatePurchaseState(updateIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
			//alert('kontynuujesz ale niestety kanapki nie skosztujesz :/');
			this.setState({loading: true});
			const order = {
				ingredients: this.state.ingredients,
				price: this.state.totalPrice,
				customer: {
					name: 'KubaKoder',
					address:{
						street: 'zamkowa 3',
						zipCode: '40555',
						city: 'K-ce',
						country: 'Poland'
					},
					email: 'testowy@test.pl'
				},
				deliveryMethod: 'fastest'
			}
			axios.post('/orders.json', order)
				.then(response => {
					this.setState({loading: false, purchasing: false});
				} )
				.catch(error => {
					this.setState({loading: false, purchasing: false});
				} );
	}

	render(){

		const disabledInfo = {
			...this.state.ingredients
		};

		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = <OrderSummary 
							ingredients={this.state.ingredients}
							purchaseCanceled={this.purchaseCancelHandler}
							purchaseContinue={this.purchaseContinueHandler}
							price={this.state.totalPrice}
						/>

		if (this.state.loading) {
			orderSummary = <Spinner />
		}

		return(
				<Aux>
					<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
						{orderSummary}
					</Modal>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls 
						ingredientAdded={this.addIngredientHandler}
						ingredientRemove={this.removeIngredientHandler}
						disabled={disabledInfo}
						purchasable={this.state.purchasable}
						price={this.state.totalPrice}
						ordered={this.purchaseHandler}
					/>
				</Aux>
			);
	}
}


export default BurgerBuilder;