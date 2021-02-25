import React, { Component, useState, useEffect} from 'react' ;

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {

	const [testState, setTestState] = useState(true);

	useEffect(() =>{
		setTimeout(() => {
			setTestState(false)
		},5000);
	}, [] );

  return (
    <div >
      <Layout>
        {testState ? <BurgerBuilder/> : null}
      </Layout>
    </div>
  );
}

export default App;
