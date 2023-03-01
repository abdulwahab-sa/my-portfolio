import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Container = styled.div`
	height: 50px;
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #686868;
`;

const Icon = styled.div`
	margin: 0 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	height: 30px;
	width: 30px;
	color: #303030;
`;

const iconData = [
	{
		id: 1,
		icon: <FaGithub />,
		link: 'https://github.com/abdulwahab-sa',
	},
	{
		id: 2,
		icon: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/in/abdul-wahab-sa-dev/',
	},
	{
		id: 3,
		icon: <FaInstagram />,
		link: 'https://www.instagram.com/abdulw.dev/',
	},
];

const Footer = () => {
	return (
		<Container>
			{iconData.map((el) => {
				return (
					<Icon key={el.id}>
						<Link to={el.link} style={{ color: '#303030' }}>
							{el.icon}
						</Link>
					</Icon>
				);
			})}
		</Container>
	);
};

export default Footer;
