import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { large } from '../responsive';

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 20px;
`;

const Title = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #303030;
	margin: 1rem 0;
`;

const Statement = styled.p`
	text-align: left;
	line-height: 30px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	color: #303030;
	padding: 15px;
	width: 100%;
	margin-top: 1rem;
	${large({
		width: '70%',
		lineHeight: '36px',
		margin: '0 auto',
	})}
`;

const Contact = () => {
	return (
		<Container>
			<Title>CONTACT ME</Title>

			<Statement>
				{' '}
				If you are interested in hiring me for a job or freelance project, You can reach out at my email <b>abdulw.dev@gmail.com</b>
			</Statement>

			<Statement>
				You can also view my resume by clicking{' '}
				<Link to="https://drive.google.com/file/d/1syVLCh9a-vP9LZojgJIYywVcFa5msPSm/view?usp=share_link">here.</Link>
			</Statement>
		</Container>
	);
};

export default Contact;
