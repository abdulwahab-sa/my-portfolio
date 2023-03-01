import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Glitchytitle } from './../components/Glitchytitle';
import { MdArrowForward } from 'react-icons/md';
import { large } from '../responsive';
import myImage from './../images/abdulwahab-picture.jpg';

const Container = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 0;
`;

const Img = styled.img`
	width: 150px;
	height: 150px;
	margin: 1rem auto;
	border-radius: 50%;
`;

const Intro = styled.p`
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
	})}
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Span = styled.span`
	text-decoration: underline;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	color: #303030;
	margin-right: 10px;
`;

const Home = () => {
	return (
		<Container>
			<Glitchytitle />
			<Img src={myImage} alt="Picture of Abdul Wahab, full stack developer" />
			<Intro>
				Hello, I am a Full stack developer, currently working in JAVASCRIPT and its libraries/frameworks. I have a passion for creating
				robust and scalable web applications using modern technologies and frameworks. <br />
				I spend my day coding, learning new technologies and working with my hands to make magic on the internet. I am a quick learner,
				problem solver, and always willing to take on new challenges. <br />
			</Intro>
			<Link to="/skills">
				<LinkWrapper>
					<Span>Lets check out my Skills</Span>
					<MdArrowForward />
				</LinkWrapper>
			</Link>
		</Container>
	);
};

export default Home;
