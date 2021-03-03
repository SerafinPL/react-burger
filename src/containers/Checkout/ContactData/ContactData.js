import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

	state ={
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
			city: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
				//this.setState({loading: true});
			const order = {
				ingredients: this.props.ingredients,
				price: this.props.price,
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
					console.log(order);
				} )
				.catch(error => {
					this.setState({loading: false, purchasing: false});
				} );
	}

	render(){

		return(
				<div className={classes.ContactData}>
					<h4>Wprowadź dane do zamówienia:</h4>
					<form>
						<input type='text' name='name' placeholder='Twoje Imię'/>
						<input type='text' name='email' placeholder='Twój Email'/>
						<input type='text' name='street' placeholder='Ulica'/>
						<input type='text' name='postalCode' placeholder='Kod pocztowy'/>
						<input type='text' name='city' placeholder='Miasto'/>
						<Button btnType='Success' clicked={this.orderHandler}>Zamów</Button>
					</form>
				</div>
			);
	}
}
	
export default ContactData