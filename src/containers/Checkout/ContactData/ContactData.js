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

	inputChangeHandler = (event, id) => {
		console.log(event.target.value);
		const updatedOrderForm = {...this.state.orderForm}; // wewnętrzne obiekty są wskaźnikami trzeba klonować dalej
		const updatedFormElement = {...updatedOrderForm[id]};
		updatedFormElement.value = event.target.value;
		updatedOrderForm[id] = updatedFormElement;
		this.setState({orderForm: updatedOrderForm});


	}

	render(){
		const formElementArr = [];
		for (let key in this.state.orderForm){
			formElementArr.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			
					<form>
						
						{formElementArr.map(formElement => (
								<Input 
									key={formElement.id}
									elementType={formElement.config.elementType}
									elementConfig={formElement.config.elementConfig}
									value={formElement.config.value}
									changed={(event) => this.inputChangeHandler(event, formElement.id)}
								/>
							))}
						
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