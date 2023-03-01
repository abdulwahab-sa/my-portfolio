import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { large } from '../responsive';

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 5px #686868;
	padding: 10px 18px;
	${large({
		padding: '10px 20px',
	})}
`;

const Title = styled.h1`
	font-family: 'Shantell Sans', cursive;
	font-weight: 700;
	font-size: 2rem;
	color: #484848;
	${large({
		fontSize: '2.8rem',
	})}
`;

const Toggle = styled.div`
	text-align: center;
	font-size: 2rem;
	display: flex;
	align-items: center;
	color: #484848;
	${large({
		fontSize: '2.2rem',
	})}
`;

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 80vh;
	position: absolute;
	top: 71px;
	transition: all 0.5s ease-out;
	left: ${(props) => props.left};
	font-family: 'Montserrat', sans-serif;
	padding-top: 3rem;
	z-index: 9;
	background-color: #fff;
	opacity: 0.9;
	overflow: hidden;
`;

const MenuItems = styled.a`
	text-decoration: none;
	display: flex;
	color: #606060;
	font-weight: 700;
	font-size: 1.4rem;
	align-items: flex-start;
	margin: 0 0 3.5rem;
	z-index: 99;
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid grey;
	}
`;

const navData = [
	{
		id: 1,
		title: 'Home',
		link: '/',
	},
	{
		id: 2,
		title: 'Skills',
		link: '/skills',
	},
	{
		id: 3,
		title: 'Projects',
		link: '/projects',
	},
	{
		id: 4,
		title: 'Contact',
		link: '/contact',
	},
];

const Navigation = () => {
	const [menu, setMenu] = useState(false);
	let activeStyle = {
		color: 'navy',
		textDecoration: 'none',
	};

	let normalStyle = {
		textDecoration: 'none',
		color: '#606060',
	};

	const handleClick = (e) => {
		setMenu(false);
	};

	return (
		<>
			<Container>
				<Title>-AW-</Title>
				<Toggle>
					{menu ? (
						<FaTimes
							onClick={() => {
								setMenu(!menu);
							}}
						/>
					) : (
						<FaBars
							onClick={() => {
								setMenu(!menu);
							}}
						/>
					)}
				</Toggle>
			</Container>
			<MenuWrapper left={menu ? '0' : '-100%'}>
				{navData.map((el) => {
					return (
						<MenuItems key={el.id} onClick={handleClick}>
							<NavLink to={el.link} style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
								{el.title}
							</NavLink>
						</MenuItems>
					);
				})}
			</MenuWrapper>
		</>
	);
};

export default Navigation;
