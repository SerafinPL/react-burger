import React, {useEffect, useState}from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';



const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [errorState, useErrorState] = useState(null);

		useEffect(() => {
			axios.interceptors.request.use(req => {
				useErrorState(null);
			});
			axios.interceptors.response.use(null, error => {
				useErrorState(error);
			});
		}, []);

		return(
			<Aux>
				<Modal 
					show={(errorState)}

				>
					{errorState.message}
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	}
}

export default withErrorHandler;