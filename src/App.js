import React, { Component, useState, useEffect} from 'react' ;

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import OrdersPage from './containers/OrdersPage/OrdersPage';
import {Route,BrowserRouter, Switch} from 'react-router-dom';


const App = () => {

	const [testState, setTestState] = useState(true);

	useEffect(() =>{	//it is componentDidMount
		setTimeout(() => {
			setTestState(false)
		},5000);
		//return () => {} componentWillUnmount
	}, [] );  

  return (
    <div >
      <Layout>
      	<BrowserRouter>
      		<Switch>
	      		<Route path='/' exact component={BurgerBuilder} />
	        	{/*<BurgerBuilder/>*/}
	        	{/*<Checkout />*/}
	        	<Route path='/checkout' component={Checkout} />
        	</Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
