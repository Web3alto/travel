"use client";

const Download = () => {
	return (
		<div className="w-full lg:w-[75vw] h-full mx-auto my-[10vh]">
			<div className="w-full h-[65vh] bg-[url('/pattern.webp')] bg-center bg-cover lg:rounded-[2vw] flex items-center justify-between overflow-hidden">
				<div className="flex-col w-3/4 p-[3vw] ml-[2vw]">
					<h2 className="lg:w-2/4 text-white font-bold text-[5vw] lg:text-[3.35vw] leading-[4vw]">
						Get for free now!
					</h2>
					<p className="text-[#EEEEEE] text-[2vw] lg:text-[.9vw] my-[4vh]">
						Available on iOS and Android
					</p>
					<div className="flex flex-col lg:flex-row">
						<button className="bg-white rounded-[4vw] lg:rounded-[2vw] flex items-center justify-center px-[2vw] lg:px-[3vw] py-[1.5vh] cursor-pointer mb-[1vh] lg:mb-0 lg:mr-[1vw]">
							<img
								className="w-[2.5vw] lg:w-[1.25vw] mr-[1vw] lg:mr-[.5vw]"
								src="/apple.svg"
								alt="apple"
							/>
							<h2 className="text-[2vw] lg:text-[.9vw] text-[#30AF5B] font-bold  mt-[.2vw] cursor-pointer">
								App Store
							</h2>
						</button>
						<button className="bg-[#292C27] rounded-[4vw] lg:rounded-[2vw] flex items-center justify-center px-[2vw] lg:px-[3vw] py-[1.5vh] cursor-pointer border-white border-[1px]">
							<img
								className="w-[2.5vw] lg:w-[1.25vw] mr-[1vw] lg:mr-[.5vw]"
								src="/android.svg"
								alt="android"
							/>
							<h2 className="text-[2vw] lg:text-[.9vw] text-white font-bold  mt-[.2vw] cursor-pointer">
								App Store
							</h2>
						</button>
					</div>
				</div>
				<img
					className="w-[40%] mr-[3vw]"
					src="/phones.webp"
					alt="phones"
				/>
			</div>
		</div>
	);
};

export default Download;
