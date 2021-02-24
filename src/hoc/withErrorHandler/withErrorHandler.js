import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent) => {
	return (props) => {
		return(
			<Aux>
				<Modal>
					Coś poszło nie tak!
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	}
}

export default withErrorHandler;