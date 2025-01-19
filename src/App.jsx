import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
function App() {
	return (
		<div className="business-landing-app space-y-28 bg-white-flash py-12">
			<Header />
			<Banner />
			<Services />
		</div>
	);
}

export default App;
