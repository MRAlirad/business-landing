import Button from './Button';
import RunningmanImg from '../assets/pics/RunningMan.png';

const Portfolio = () => {
	return (
		<div className="space-y-10">
			<PortfolioCard />
		</div>
	);
};

const PortfolioCard = () => {
	return (
		<div>
			<div className="py-10 px-14 flex flex-row-reverse gap-4 bg-gradient-to-r from-orange-dark/15 rounded-tl-[50px]">
				<Button
					text="دیدن نمونه کار ها"
					color="orange"
				/>
				<Button
					text="مشاهده بیشتر"
					color="outline-orange"
				/>
			</div>

			<div className="grid grid-cols-[2fr_3fr] bg-orange-dark">
				<div className='img-box size-96 scale-200 scale-x-[-2]'>
					<img src={RunningmanImg} />
				</div>
				<div className="p-16 ps-3 text-white-primary space-y-4">
					<p className="text-2xl">دقیقا مطابق با نیازتان می‌سازیم!</p>
					<h2 className="text-5xl">طراحی سایت با ظاهر اختصاصی</h2>
					<p className="text-xl">
						وب سایت امروزه بیشترین و پر مخاطب ترین بستر برای افراد می باشد که به راحت ترین شکل ممکن می تواند کسب و کار شما را پرزنت کند.شما می توانید با داشتن یک وب سایت فروشگاهی حرفه ای،
						بدون هیچ محدودیتی بازار هدف خود را نه تنها در یک محله یا شهر خاص و بلکه در سطح کشور توسعه دهید و مشتری جذب کنید.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
