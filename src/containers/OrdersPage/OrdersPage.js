import React, {useEffect, useState}from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

const OrdersPage = () => {

	const [loadingHook, loadingSetHook] = useState(true);
	const [ordersHook, ordersSetHook] = useState([]);

	useEffect(() => {

		axios.get('/ordes.json')
			.then(response => {
				loadingSetHook(false);
			})
			.catch(error => {
				loadingSetHook(false);
			});

	},[]); 

	return(
			<div>
				<Order/>
				<Order/>
			</div>
		);

}

export default OrdersPage;