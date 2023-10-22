"use client";

const Slider = () => {
	return (
		<div className="w-[75vw] h-fit mx-auto flex flex-col justify-between items-end my-[8.5vh] z-10">
			<div className="w-full flex justify-between items-center">
				<div className="bg-[url('/img-1.webp')] bg-center bg-cover flex flex-col justify-between items-start w-[78%] h-[67.5vh] rounded-[2vw] p-[2vw]">
					<div className="flex items-center justify-center ml-[2vw]">
						<div className="rounded-full bg-[#30AF5B] p-[.9vw] flex items-center justify-center">
							<img
								className="w-[1.25vw]"
								src="/folded-map.svg"
								alt="map"
							/>
						</div>
						<div className="flex flex-col ml-[1.5vw] text-white">
							<h2 className="font-bold text-[1vw]">
								Putuk Truno Camp
							</h2>
							<p className="text-[.9vw]">Prigen, Pasuruan</p>
						</div>
					</div>
					<div className="flex items-center justify-center ml-[2vw]">
						<span className="flex items-center justify-start">
							<img
								className="w-[2vw]"
								src="/person-1.webp"
								alt="person-1"
							/>
							<img
								className="w-[2vw] ml-[-.75vw]"
								src="/person-2.webp"
								alt="person-2"
							/>
							<img
								className="w-[2vw] ml-[-.75vw]"
								src="/person-3.webp"
								alt="person-3"
							/>
							<img
								className="w-[2vw] ml-[-.75vw]"
								src="/person-4.webp"
								alt="person-4"
							/>
						</span>
						<p className="ml-[1vw] font-bold text-[1.25vw] text-white">
							50+ Joined
						</p>
					</div>
				</div>
				<div className="bg-[url('/img-2.webp')] bg-cover w-[20%] h-[67.5vh] rounded-l-[2vw] overflow-hidden"></div>
			</div>
			<div className="bg-[#30AF5B] rounded-[2vw] flex flex-col items-start text-white w-[38.5vw] p-[3.5vw] mt-[-25vh] mr-[2.5vw] relative">
				<h2 className="text-[3.5vw] leading-[4vw]">
					<span className="font-bold">Feeling Lost</span> And Not
					Knowing The Way?
				</h2>
				<p className="mt-[1vw] text-[.9vw]">
					Starting from the anxiety of the climbers when visiting a
					new climbing location, the possibility of getting lost is
					very large. That's why we are here for those of you who want
					to start an adventure.
				</p>
				<img
					className="absolute bottom-[5vh] right-0 w-[10vw]"
					src="/quote.svg"
					alt="quote"
				/>
			</div>
		</div>
	);
};

export default Slider;
