import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import RunningmanImg from '../assets/pics/RunningMan.png';
import ArcheryImg from '../assets/pics/Archery.png';
import GirlFlyingImg from '../assets/pics/GirlFlying.png';

const Portfolio = () => {
	const portfolios = [
		{
			image: RunningmanImg,
			text: 'دقیقا مطابق با نیازتان می‌سازیم!',
			title: 'طراحی سایت با ظاهر اختصاصی',
			description:
				'وب سایت امروزه بیشترین و پر مخاطب ترین بستر برای افراد می باشد که به راحت ترین شکل ممکن می تواند کسب و کار شما را پرزنت کند.شما می توانید با داشتن یک وب سایت فروشگاهی حرفه ای، بدون هیچ محدودیتی بازار هدف خود را نه تنها در یک محله یا شهر خاص و بلکه در سطح کشور توسعه دهید و مشتری جذب کنید.',
		},
		{
			image: ArcheryImg,
			text: 'در تمام بخش های سایت همراه شما هستیم : )',
			title: 'دیجیتال مارکتینگ وپشتیبانی سایت',
			description:
				'در بخش خدمات دیجیتال مارکتینگ و پشتیبانی سایت، ما به شما راهکار هایی ارائه میکنیم که بتوانید سایت خود را به صفحات اول گوگل برسانید. با ارائه روش های سئو و بهینه سازی محتوای صفحات سایت و همچنین ارائه انواع روش های تبلیغاتی مثل، تبلیغات گوگل، پیامک، ایمیل و … ممی توانیم سایت شما را به نتایج اول گوگل برسانیم.',
		},
		{
			image: GirlFlyingImg,
			text: 'همه چیز از قبل آماده شده، انتخاب کنید و شروع!',
			title: 'خرید سایت آماده حرفه ای',
			description:
				'خرید سایت آماده به این صورت است که شما یکی از قالب هایی که توسط تیم طراحی الیت دیزاین، پیاده سازی و اجرا شده را انتخاب میکنید و ما با توجه به نوع محصولات و نیاز کسب و کارتان، قالب را ویرایش میکنیم. ۰ تا ۱۰۰ کار طراحی و اجرای سایت توسط ما انجام می شود.',
		},
		{
			image: RunningmanImg,
			text: 'دقیقا مطابق با نیازتان می‌سازیم!',
			title: 'طراحی سایت با ظاهر اختصاصی',
			description:
				'وب سایت امروزه بیشترین و پر مخاطب ترین بستر برای افراد می باشد که به راحت ترین شکل ممکن می تواند کسب و کار شما را پرزنت کند.شما می توانید با داشتن یک وب سایت فروشگاهی حرفه ای، بدون هیچ محدودیتی بازار هدف خود را نه تنها در یک محله یا شهر خاص و بلکه در سطح کشور توسعه دهید و مشتری جذب کنید.',
		},
		{
			image: ArcheryImg,
			text: 'در تمام بخش های سایت همراه شما هستیم : )',
			title: 'دیجیتال مارکتینگ وپشتیبانی سایت',
			description:
				'در بخش خدمات دیجیتال مارکتینگ و پشتیبانی سایت، ما به شما راهکار هایی ارائه میکنیم که بتوانید سایت خود را به صفحات اول گوگل برسانید. با ارائه روش های سئو و بهینه سازی محتوای صفحات سایت و همچنین ارائه انواع روش های تبلیغاتی مثل، تبلیغات گوگل، پیامک، ایمیل و … ممی توانیم سایت شما را به نتایج اول گوگل برسانیم.',
		},
		{
			image: GirlFlyingImg,
			text: 'همه چیز از قبل آماده شده، انتخاب کنید و شروع!',
			title: 'خرید سایت آماده حرفه ای',
			description:
				'خرید سایت آماده به این صورت است که شما یکی از قالب هایی که توسط تیم طراحی الیت دیزاین، پیاده سازی و اجرا شده را انتخاب میکنید و ما با توجه به نوع محصولات و نیاز کسب و کارتان، قالب را ویرایش میکنیم. ۰ تا ۱۰۰ کار طراحی و اجرای سایت توسط ما انجام می شود.',
		},
	];
	return (
		<div className="space-y-56">
			{portfolios.map((portfolio, index) => (
				<PortfolioCard
					key={index}
					{...portfolio}
					color={index % 2 !== 0 ? 'blue' : 'orange'}
				/>
			))}
		</div>
	);
};

const PortfolioCard = ({ image, text, title, description, color }) => {
	return (
		<div
			className={classNames({
				'w-5/6 ': true,
				'ms-auto': color === 'orange',
				'me-auto': color === 'blue',
			})}
		>
			<div
				className={classNames({
					'py-10 px-14 flex gap-4': true,
					'flex-row-reverse bg-gradient-to-r from-orange-dark/15 rounded-tl-[50px]': color === 'orange',
					'flex-row bg-gradient-to-l from-blue-risd/15 rounded-tr-[50px]': color === 'blue',
				})}
			>
				<Button
					text="دیدن نمونه کار ها"
					color={color === 'orange' ? 'orange' : 'blue'}
				/>
				<Button
					text="مشاهده بیشتر"
					color={color === 'orange' ? 'outline-orange' : 'outline-blue'}
				/>
			</div>

			<div
				className={classNames({
					'grid ': true,
					'grid-cols-[2fr_3fr] bg-orange-dark rounded-s-[70px]': color === 'orange',
					'grid-cols-[3fr_2fr] bg-blue-risd rounded-e-[70px]': color === 'blue',
				})}
			>
				<div
					className={classNames({
						'img-box size-96 scale-150 scale-x-[-1.5] row-[1/2]': true,
						'col-[1/2]': color === 'orange',
						'col-[2/3]': color === 'blue',
					})}
				>
					<img src={image} />
				</div>
				<div className="p-16 ps-3 text-white-primary space-y-4">
					<p className="text-2xl">{text}</p>
					<h2 className="text-5xl">{title}</h2>
					<p className="text-xl">{description}</p>
				</div>
			</div>
		</div>
	);
};

PortfolioCard.propTypes = {
	color: PropTypes.oneOf(['blue', 'orange']),
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Portfolio;
