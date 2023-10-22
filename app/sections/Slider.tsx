"use client";

const Slider = () => {
	return (
		<div className="w-[75vw] h-fit mx-auto flex flex-col justify-between items-center my-[10vh] z-10">
			<div className="w-full flex justify-between items-center">
				<div className="bg-[url('/img-1.webp')] bg-center bg-cover flex flex-col justify-between items-start w-[78%] h-[65vh] rounded-[2vw] p-[2vw]">
					<div className="flex items-center justify-center ml-[2vw]">
						<div className="rounded-full bg-[#30AF5B] p-[.9vw] flex items-center justify-center">
							<img
								className="w-[1.25vw]"
								src="/folded-map.svg"
								alt="map"
							/>
						</div>
						<div className="flex flex-col ml-[1.5vw] text-white ">
							<h2 className="font-bold text-[1vw]">
								Putuk Truno Camp
							</h2>
							<p className="text-[.9vw]">Prigen, Pasuruan</p>
						</div>
					</div>
					<div className="bottom"></div>
				</div>
				<div className="bg-[url('/img-2.webp')] bg-cover w-[20%] h-[65vh] rounded-l-[2vw]"></div>
			</div>
			<div className="bg-[#30AF5B] rounded-[2vw]"></div>
		</div>
	);
};

export default Slider;
