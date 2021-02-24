import React, {useEffect, useState}from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';



const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [errorState, useErrorState] = useState(null);

		useEffect(() => {
			axios.interceptors.request.use(req => {
				useErrorState(null);
				return req;
			});
			axios.interceptors.response.use(res => res, error => {
				useErrorState(error);
			});
		}, []);

		const showing = errorState ? true : false;

		const ErrorConfirmedHandler = () => {
			useErrorState(null);
		}
		
		return(
			<Aux>
				<Modal 	show={showing}
						modalClosed={ErrorConfirmedHandler}
				>
					{showing ? errorState.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	}
}

export default withErrorHandler;