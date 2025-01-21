import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
function App() {
	return (
		<div className="business-landing-app space-y-28 bg-white-flash py-12">
			<Header />
			<Banner />
			<Services />
			<Portfolio />
		</div>
	);
}

export default App;
