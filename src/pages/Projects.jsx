import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { large } from '../responsive';
import { RiGlobalLine, RiGithubFill } from 'react-icons/ri';

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 20px;
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
	padding: 15px;
	margin: 0 auto;
	${large({
		width: '70%',
	})}
`;

const Title = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #303030;
	margin: 1rem 0;
`;

const ProjectWrapper = styled.div`
	width: 240px;
	min-height: 300px;
	max-height: 100%;
	margin: 15px;
	padding: 14px;
	border-radius: 10px;
	background-color: #383838;
	font-family: 'Montserrat', sans-serif;
	${large({
		width: '300px',
	})}
`;
const Projectitle = styled.h2`
	color: #fff;
	font-weight: 600;
	font-size: 22px;
	margin: 10px 0 5px;
`;
const TechSkills = styled.span`
	color: #fff;
	font-family: 500;
	font-size: 14px;
`;
const ProjectInfo = styled.p`
	color: #989898;
	font-weight: 500;
	font-size: 14px;
	margin-top: 10px;
	min-height: 120px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border: none;
	padding: 8px 14px;
	background-color: #686868;
	color: #fff;
	font-weight: 500;
	margin: 10px;
	border-radius: 10px;
	cursor: pointer;
	transition: transform 0.2s ease-out;
	&:hover {
		transform: scale(1.1);
	}
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

const linkStyles = {
	textDecoration: 'none',
	display: 'flex',
	color: '#fff',
	alignItems: 'center',
};

const projectData = [
	{
		id: 1,
		title: 'TradeCity',
		tech: 'React, Styled-components, Express, mySQL',
		info: 'TradeCity is a B2B portfolio website, user can send inquiry for their desired product. It also has a custom admin dashboard for adding, updating and deleting products.',
		demo: 'http://tradecity.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/sportscompanyportfolio',
	},
	{
		id: 2,
		title: 'SurgiGlass',
		tech: 'React, Styled-components, Express, mySQL',
		info: 'This is a B2B portfolio website, users can search through products and send inquiry. It also has a custom admin dashboard for adding, updating and deleting products.',
		demo: 'https://surgiglass.netlify.app',
		github: 'https://github.com/abdulwahab-sa/surgiglass-portfolio-website',
	},
	{
		id: 3,
		title: 'Textly App',
		tech: 'React & Bootstrap',
		info: 'Textly is a text formatter app which can count characters, capitalize letters, remove extra space from text and other formatting as well.',
		demo: 'https://textly-text.netlify.app',
		github: 'https://github.com/abdulwahab-sa/textly',
	},
	{
		id: 4,
		title: 'Notes App',
		tech: 'React & CSS',
		info: 'A simple notes app for taking notes and saving them. The app uses local Storage to save the notes.',
		demo: 'https://abduls-notes-app.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/notes-app',
	},
	{
		id: 5,
		title: 'Meme-Generator',
		tech: 'React & Bootstrap',
		info: 'This is a fun meme app that displays random meme from meme-data and allows user to create a meme by writing desired text.',
		demo: 'https://mymemegen.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/meme-generator',
	},
	{
		id: 6,
		title: 'TradeCity API',
		tech: 'NodeJs, Express, mySQL, Sequelize',
		info: 'This is an API built for a react B2B website and has routes for CRUD as well as image processing. It saves and fetches data from mySQL database using Sequelize',
		github: 'https://github.com/abdulwahab-sa/tradecityapi',
	},
];

export const Projects = () => {
	return (
		<Container>
			<Title> RECENT PROJECTS</Title>
			<Wrapper>
				{projectData.map((el) => {
					return (
						<ProjectWrapper key={el.id}>
							<Projectitle>{el.title}</Projectitle>
							<TechSkills>{el.tech}</TechSkills>
							<ProjectInfo> {el.info}</ProjectInfo>
							<ButtonWrapper>
								<Button>
									<Link to={el.github} style={linkStyles}>
										<RiGithubFill />
										<span style={{ marginLeft: '5px' }}>Github</span>
									</Link>
								</Button>
								{el.demo && (
									<Button>
										<Link to={el.demo} style={linkStyles}>
											<RiGlobalLine />
											<span style={{ marginLeft: '5px' }}>Demo</span>
										</Link>
									</Button>
								)}
							</ButtonWrapper>
						</ProjectWrapper>
					);
				})}
			</Wrapper>
			<Link to="/contact">
				<LinkWrapper>
					<Span>Interested in Hiring me? Contact me here </Span>
					<MdArrowForward />
				</LinkWrapper>
			</Link>
		</Container>
	);
};
