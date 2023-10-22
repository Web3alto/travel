"use client";

const Download = () => {
	return (
		<div className="w-[75vw] h-full mx-auto my-[10vh]">
			<div className="w-full h-[65vh] bg-[url('/pattern.webp')] bg-center bg-cover rounded-[2vw] flex items-center justify-between overflow-hidden">
				<div className="flex-col w-2/4 p-[6vw]">
					<h2 className="text-white font-bold text-[3.35vw] leading-[4vw]">
						Get for <br />
						free now!
					</h2>
					<p className="text-[#EEEEEE] text-[.9vw] my-[4vh]">
						Available on iOS and Android
					</p>
					<div className="flex">
						<button className="bg-white rounded-[2vw] flex items-center justify-center px-[3vw] py-[1.5vh] cursor-pointer mr-[1vw]">
							<img
								className="w-[1.25vw] mr-[.5vw]"
								src="/apple.svg"
								alt="apple"
							/>
							<h2 className="text-[#30AF5B] font-bold  mt-[.2vw] cursor-pointer">
								App Store
							</h2>
						</button>
						<button className="bg-[#292C27] rounded-[2vw] flex items-center justify-center px-[3vw] py-[1.5vh] cursor-pointer border-white border-[1px]">
							<img
								className="w-[1.25vw] mr-[.5vw]"
								src="/android.svg"
								alt="android"
							/>
							<h2 className="text-white font-bold  mt-[.2vw] cursor-pointer">
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
