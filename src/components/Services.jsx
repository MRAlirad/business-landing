import PropTypes from 'prop-types';
import { DisplayIcon, LikeIcon, PenIcon, ActivityIcon } from '../components/icons';

const Services = () => {
	const services = [
		{
			icon: <DisplayIcon />,
			text: 'طراحی وب سایت',
		},
		{
			icon: <LikeIcon />,
			text: 'ادمین اینستاگرام',
		},
		{
			icon: <PenIcon />,
			text: 'طراحی گرافیک',
		},
		{
			icon: <ActivityIcon />,
			text: 'سئو و بهینه سازی',
		},
	];
	return (
		<div className="max-w-screen-xl mx-auto space-y-20">
			<div className="flex flex-col items-center justify-center gap-6">
				<h2 className="text-blue-risd text-4xl font-bold">خدمات</h2>
				<span className="block w-16 h-3 bg-orange-dark rounded-full"></span>
			</div>
			<div className='grid grid-cols-4 gap-14'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						icon={service.icon}
						text={service.text}
					/>
				))}
			</div>
		</div>
	);
};

const ServiceCard = ({ icon, text }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 text-gray-charcoal hover:text-blue-risd bg-white-primary rounded-2xl py-11 hover:-translate-y-6 duration-300 cursor-pointer hover:shadow-md">
			<div>{icon}</div>
			<h4 className='text-2xl font-bold'>{text}</h4>
		</div>
	);
};

ServiceCard.propTypes = {
	icon: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
}
export default Services;
