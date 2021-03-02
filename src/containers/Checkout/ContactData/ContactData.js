import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {

	state ={
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
			city: ''
		}
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
						<Button btnType='Success'>Zamów</Button>
					</form>
				</div>
			);
	}
}
	
export default ContactData