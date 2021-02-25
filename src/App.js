import React, { Component, useState, useEffect} from 'react' ;

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

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
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
