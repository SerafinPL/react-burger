import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

	state ={
		
			orderForm :{
						name: {
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Twoje Imię'
							},
							value: ''
						},
						street: {
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Ulica'
							},
							value: ''
						},
						zipCode: {
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Kod-pocztowy'
							},
							value: ''
						},
						city: {
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Miasto'
							},
							value: ''
						},
						country: {
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Kraj'
							},
							value: ''
						},
						email: {
							elementType: 'input',
							elementConfig: {
								type: 'email',
								placeholder: 'Twój Email'
							},
							value: ''
						},
						deliveryMethod: {
							elementType: 'select',
							elementConfig:{
								options:			
								[{value: 'fastest', displayValue:'Najszybciej'},
								{value: 'chipest', displayValue:'Najtaniej'}]
							} ,
							value: ''
						}
					},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
			this.setState({loading: true});
			const order = {
				ingredients: this.props.ingredients,
				price: this.props.price,
				
			}
			axios.post('/orders.json', order)
				.then(response => {
					this.setState({loading: false});
					this.props.history.push('/');
				} )
				.catch(error => {
					this.setState({loading: false});
				} );
	}

	render(){
		const formElementArr = [];
		for (let key in this.state.orderForm){}
		let form = (
			
					<form>
						{/*<Input elementType='...' elementConfig='...' value='...'/>*/}
						<Input input_type='input' type='email' name='email' placeholder='Twój Email'/>
						<Input input_type='input' type='text' name='street' placeholder='Ulica'/>
						<Input input_type='input' type='text' name='postalCode' placeholder='Kod pocztowy'/>
						<Input input_type='input' type='text' name='city' placeholder='Miasto'/>
						<Button btnType='Success' clicked={this.orderHandler}>Zamów</Button>
					</form>
			
					);

		if (this.state.loading){
			form = (<Spinner/>);
		}

		return(
				<div className={classes.ContactData}>
					<h4>Wprowadź dane do zamówienia:</h4>
				
					{form}
				</div>
			);
	}
}
	
export default ContactData