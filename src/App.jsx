import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Projects } from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<div id="container">
				<Navigation />
				<div id="main-content">
					<Routes>
						<Route path="/" index element={<Home />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
