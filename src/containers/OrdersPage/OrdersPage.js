import React, {useEffect, useState, Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class OrdersPage extends Component{


	// const [loadingHook, loadingSetHook] = useState(true);
	// const [ordersHook, ordersSetHook] = useState([]);
	


	// useEffect(() => {
		
	// 	axios.get('/orders.json')
	// 		.then(response => {
	// 			const fatchedOrders = [];
	// 			for (let key in response.data){
	// 				fatchedOrders.push({
	// 					...response.data[key],
	// 					id: key

	// 				});
	// 			}

	// 			console.log(fatchedOrders);
	// 			ordersSetHook(...fatchedOrders);
	// 			console.log(ordersHook);
	// 			loadingSetHook(false);
	// 		})
	// 		.catch(error => {
	// 			loadingSetHook(false);
	// 		});

	// },[]); 

	state ={
		orders: [],
		loading: true
	}

	componentDidMount() {
		axios.get('/orders.json')
			.then(response => {
				const fatchedOrders = [];
				for (let key in response.data){
					fatchedOrders.push({
						...response.data[key],
						id: key

					});
				}
				this.setState({loading:false, orders: fatchedOrders});
			})
			.catch(error => {
				this.setState({loading:false});
			});
	}

	render(){
		return(
			<div>
				{this.state.orders.map(order => (
						<Order 
							key={order.id}
							ingredients={order.ingredients}
							price={order.price}
						/>
					))}
				
				
			</div>
		);

	}
	

}

export default withErrorHandler(OrdersPage, axios);