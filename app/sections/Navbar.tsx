"use client";

const Navbar = () => {
	return (
		<div className="w-[75vw] h-[10vh] flex justify-between items-center mx-auto z-10">
			<img
				className="w-[5vw] cursor-pointer"
				src="/hilink-logo.svg"
				alt="hilink-logo"
			/>
			<nav className="w-[40vw] flex justify-center items-center text-[#7b7b7b] text-[.9vw] ">
				<li className="px-[1.35vw] cursor-pointer hover:font-bold transition duration-500 ease">
					Home
				</li>
				<li className="px-[1.35vw] cursor-pointer hover:font-bold transition duration-500 ease">
					How Hilink Work?
				</li>
				<li className="px-[1.35vw] cursor-pointer hover:font-bold transition duration-500 ease">
					Services
				</li>
				<li className="px-[1.35vw] cursor-pointer hover:font-bold transition duration-500 ease">
					Pricing
				</li>
				<li className="px-[1.35vw] cursor-pointer hover:font-bold transition duration-500 ease">
					Contact Us
				</li>
			</nav>
			<button className="px-[1.5vw] py-[1.5vh] bg-[#292C27] flex justify-center items-center rounded-[3vw] cursor-pointer">
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
