"use client";

const Footer = () => {
	return (
		<div className="w-[95vw] lg:w-[75vw] h-full mx-auto my-[5vh] flex flex-col items-center justify-center">
			<div className="hidden sm:flex justify-between items-start w-full">
				<img src="/hilink-logo.svg" alt="hilink-logo" />
				<div className="flex flex-col justify-start items-start">
					<h2 className="text-[2.1vw] lg:text-[.9vw] font-bold mb-[2vh]">
						Learn More
					</h2>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						About Hilink
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Press Realeases
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Environment
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Jobs
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Privacy Policy
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Contact Us
					</p>
				</div>
				<div className="flex flex-col justify-start items-start">
					<h2 className="text-[2.1vw] lg:text-[.9vw] font-bold mb-[2vh]">
						Our Community
					</h2>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Climbng xixixi
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Hiking hilink
					</p>
					<p className="text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						hilink kinthil
					</p>
				</div>
				<div className="flex flex-col justify-start items-start">
					<h2 className="text-[2.25vw] lg:text-[.9vw] font-bold mb-[2vh]">
						Contact Us
					</h2>
					<p className="block lg:flex text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Admin Officer :{" "}
						<a className="hidden lg:block text-[#021639] font-bold">
						123-456-7890
						</a>
					</p>
					<span className="lg:hidden text-[#021639] text-[1.6vw] font-bold mb-[1vh]">
					123-456-7890
					</span>
					<p className="block lg:flex text-[#7B7B7B] text-[1.6vw] lg:text-[.8vw] mb-[1vh]">
						Email Officer :{" "}
						<a className="hidden lg:block text-[#021639] font-bold">
							hilink@akinthil.com
						</a>
					</p>
					<span className="lg:hidden text-[#021639] text-[1.6vw] font-bold mb-[1vh]">
						hilink@akinthil.com
					</span>
				</div>
				<div className="hidden lg:flex flex-col">
					<h2 className="text-[.9vw] font-bold mb-[2vh]">Socials</h2>
					<div className="flex">
						<img
							className="w-[1.35vw] mr-[1vw]"
							src="/facebook.svg"
							alt="facebook"
						/>
						<img
							className="w-[1.35vw] mr-[1vw]"
							src="/instagram.svg"
							alt="instagram"
						/>
						<img
							className="w-[1.35vw] mr-[1vw]"
							src="/twitter.svg"
							alt="twitter"
						/>
						<img
							className="w-[1.35vw]"
							src="/youtube.svg"
							alt="youtube"
						/>
					</div>
				</div>
			</div>
			{/* /-----------------------------------------------------------------------------------/ */}
			{/* /-----------------------------------------------------------------------------------/ */}
			<div className="flex flex-col sm:hidden justify-between items-start w-[80vw]">
				<img src="/hilink-logo.svg" alt="hilink-logo" />
				<div className="flex items-start justify-between w-full my-[5vh]">
					<div className="flex flex-col justify-start items-start">
						<h2 className="text-[5vw] font-bold mb-[2vh]">
							Learn More
						</h2>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							About Hilink
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Press Realeases
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Environment
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Jobs
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Privacy Policy
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Contact Us
						</p>
					</div>
					<div className="flex flex-col justify-start items-start">
						<h2 className="text-[5vw] font-bold mb-[2vh]">
							Our Community
						</h2>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Climbng xixixi
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							Hiking hilink
						</p>
						<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
							hilink kinthil
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-start items-start mb-[2.5vh]">
					<h2 className="text-[5vw] font-bold mb-[2vh]">
						Contact Us
					</h2>

					<p className="text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
						Admin Officer :{" "}
						<a className="text-[#021639] font-bold">123-456-7890</a>
					</p>
					<p className="block lg:flex text-[#7B7B7B] text-[3.75vw] mb-[1vh]">
						Email Officer :{" "}
						<a className=" text-[#021639] font-bold">
							hilink@akinthil.com
						</a>
					</p>
				</div>
				<div className="flex flex-col justify-start items-start mb-[2.5vh]">
					<h2 className="text-[5vw] font-bold mb-[2vh]">Socials</h2>
					<div className="flex">
						<img
							className="w-[6vw] mr-[3vw]"
							src="/facebook.svg"
							alt="facebook"
						/>
						<img
							className="w-[6vw] mr-[3vw]"
							src="/instagram.svg"
							alt="instagram"
						/>
						<img
							className="w-[6vw] mr-[3vw]"
							src="/twitter.svg"
							alt="twitter"
						/>
						<img
							className="w-[6vw]"
							src="/youtube.svg"
							alt="youtube"
						/>
					</div>
				</div>
			</div>
			{/* /-----------------------------------------------------------------------------------/ */}
			{/* /-----------------------------------------------------------------------------------/ */}
			<div className="mt-[2.5vw] w-[95vw] lg:w-[75vw] h-0.5 bg-[#E5E7EB] mb-[3.5vw] lg:mb-[2.5vw]"></div>
			<h2 className="text-[#7B7B7B] text-[3.75vw] sm:text-[1.75vw] lg:text-[.9vw] mt-[2.5vh] sm:mt-0">
				2023 Hilink | All rights reserved
			</h2>
		</div>
	);
};

export default Footer;
