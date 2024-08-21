import LogoImg from '../assets/pics/LOGO.png';
import { SearchIcon, UserIcon, CartShopIcon, MenuIcon } from './icons';

const Header = () => {
	return (
		<header className="flex items-center justify-between max-w-screen-xl mx-auto bg-white-primary rounded-lg py-9 px-10">
			<div className="flex items-center gap-5">
				<div className="img-box w-20">
					<img
						src={LogoImg}
						alt="لوگو سایت"
					/>
				</div>
				<div className="flex items-center gap-2 text-lg bg-orange-dark text-white-primary py-2 px-5 rounded-md">
					<MenuIcon />
					لیست خدمات
				</div>
				<nav className="flex items-center list-none">
					<li className="text-gray-dim text-lg py-1 px-2 font-bold">صفحه اصلی</li>
					<li className="text-gray-dim text-lg py-1 px-2 font-bold">نمونه کارها</li>
					<li className="text-gray-dim text-lg py-1 px-2 font-bold">تماس با ما</li>
					<li className="text-gray-dim text-lg py-1 px-2 font-bold">وبلاگ</li>
				</nav>
			</div>

			<div className="flex items-center gap-6">
				<SearchIcon />
				<div className="flex items-center gap-2 text-lg bg-blue-risd text-white-primary py-2 px-5 rounded-md">
					<UserIcon />
					ورود / ثبت نام
				</div>
				<div className="text-lg bg-orange-dark text-white-primary p-2.5 rounded-md">
					<CartShopIcon />
				</div>
			</div>
		</header>
	);
};

export default Header;
