import Button from './Button';
import BannerImg from '../assets/pics/Banner.png';

const Banner = () => {
	return (
		<div className="grid grid-cols-2 items-center bg-blue-risd max-w-screen-xl mx-auto rounded-[50px] h-[440px]">
			<div className="ps-16 grid gap-8">
				<h1 className="text-white-primary font-bold text-5xl">شروع کسب و کار با</h1>
				<p className="text-white-primary font-normal text-3xl">
					تیم طراحی سایت و پشتیبانی وردپرس
				</p>
				<div className="flex items-center gap-3">
					<Button
						color="white"
						text="درخواست مشاوره رایگان"
					/>
					<Button
						color="white"
						text="نمونه کارها"
					/>
				</div>
			</div>

			<div className='justify-self-center'>
				<div className="img-box size-96 scale-200">
					<img
						src={BannerImg}
						alt="Banner"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
