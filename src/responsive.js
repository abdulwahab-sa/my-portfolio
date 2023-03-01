import { css } from 'styled-components';

export const small = (props) => {
	return css`
		@media only screen and (min-width: 600px) {
			${props}
		}
	`;
};

export const medium = (props) => {
	return css`
		@media only screen and (min-width: 768px) {
			${props}
		}
	`;
};

export const large = (props) => {
	return css`
		@media only screen and (min-width: 992px) {
			${props}
		}
	`;
};

export const xlarge = (props) => {
	return css`
		@media only screen and (min-width: 1200px) {
			${props}
		}
	`;
};
