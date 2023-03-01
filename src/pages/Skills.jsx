import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import cssicon from './../images/css.svg';
import tailwind from './../images/tailwind.svg';
import reacticon from './../images/react.svg';
import reduxicon from './../images/redux.svg';
import bootstrapicon from './../images/bootstrap.svg';
import pugicon from './../images/pug.svg';
import routericon from './../images/router.svg';
import nodeicon from './../images/nodejs.svg';
import expressicon from './../images/express.svg';
import jwticon from './../images/jwt.svg';
import mysqlicon from './../images/mysql.svg';
import sequelizeicon from './../images/sequelize.svg';
import js from './../images/js.svg';
import mongodbicon from './../images/mongodb.svg';
import { large } from '../responsive';

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

const LogoWrapper = styled.div``;

const Title = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #303030;
	margin: 1rem 0;
`;

const Img = styled.img`
	width: 120px;
	margin: 14px;
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

const skillsData = [
	{
		id: 1,
		img: cssicon,
	},
	{
		id: 2,
		img: tailwind,
	},
	{
		id: 3,
		img: bootstrapicon,
	},
	{
		id: 4,
		img: js,
	},
	{
		id: 5,
		img: reacticon,
	},
	{
		id: 6,
		img: routericon,
	},
	{
		id: 7,
		img: reduxicon,
	},
	{
		id: 8,
		img: pugicon,
	},
	{
		id: 9,
		img: jwticon,
	},
	{
		id: 10,
		img: nodeicon,
	},
	{
		id: 11,
		img: expressicon,
	},

	{
		id: 12,
		img: mongodbicon,
	},
	{
		id: 13,
		img: mysqlicon,
	},
	{
		id: 14,
		img: sequelizeicon,
	},
];

const Skills = () => {
	return (
		<Container>
			<Title>MY SKILLS</Title>
			<Wrapper>
				{skillsData.map((el) => {
					return (
						<LogoWrapper key={el.id}>
							<Img src={el.img} />
						</LogoWrapper>
					);
				})}
			</Wrapper>
			<Link to="/projects">
				<LinkWrapper>
					<Span>Lets check out my Recent Projects</Span>
					<MdArrowForward />
				</LinkWrapper>
			</Link>
		</Container>
	);
};

export default Skills;
