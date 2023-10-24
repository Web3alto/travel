"use client";

const Navbar = () => {
	return (
		<div className="w-[90vw] sm:w-[95vw] lg:w-[75vw] h-[10vh] sm:h-[5vh] lg:h-[10vh] flex justify-between items-center mx-auto z-10 relative">
			<img
				className="w-[20vw] sm:w-[10vw] lg:w-[5vw] cursor-pointer"
				src="/hilink-logo.svg"
				alt="hilink-logo"
			/>
			<nav className="w-[40vw] hidden lg:flex justify-center items-center text-[#7b7b7b] text-[.9vw] ">
				<li className="px-[1.35vw] cursor-pointer">Home</li>
				<li className="px-[1.35vw] cursor-pointer">How Hilink Work?</li>
				<li className="px-[1.35vw] cursor-pointer">Services</li>
				<li className="px-[1.35vw] cursor-pointer">Pricing</li>
				<li className="px-[1.35vw] cursor-pointer">Contact Us</li>
			</nav>
			<img
				className="flex lg:hidden w-[8vw] sm:w-[4vw] cursor-pointer"
				src="/menu.svg"
				alt="menu"
			/>
			<button className="px-[1.5vw] py-[1.5vh] bg-[#292C27] hidden lg:flex justify-center items-center rounded-[3vw] cursor-pointer">
				<img
					className="w-[1.25vw] mr-[.75vw]"
					src="/user.svg"
					alt="user"
				/>
				<label className="text-white text-[.9vw] font-bold whitespace-nowrap mt-[.1vw]">
					Login
				</label>
			</button>
		</div>
	);
};

export default Navbar;
