import React from "react";

const Home = () => {
	return (
		<div className="w-[75vw] h-full mx-auto my-[10vh] flex justify-between items-start">
			<div className="h-full w-2/4 relative">
				<img
					className="w-[2.75vw] absolute top-[-1.7vw] left-[-.5vw]"
					src="/camp.svg"
					alt="camp"
				/>
				<h1 className="text-[4.6vw] font-bold leading-[5.5vw]">
					Putuk Truno Camp Area
				</h1>
				<p className="text-[#7b7b7b] mt-[1.5vw] w-8/12 text-[.9vw]">
					We want to be on each of your journeys seeking the
					satisfaction of seeing the incorruptible beauty of nature.
					We can help you on an adventure around the world in just one
					app
				</p>
				<div className="flex justify-start items-center my-[3.5vh]">
					<img
						className="w-[1.25vw] mr-[.5vw]"
						src="/star.svg"
						alt="star"
					/>
					<img
						className="w-[1.25vw] mr-[.5vw]"
						src="/star.svg"
						alt="star"
					/>
					<img
						className="w-[1.25vw] mr-[.5vw]"
						src="/star.svg"
						alt="star"
					/>
					<img
						className="w-[1.25vw] mr-[.5vw]"
						src="/star.svg"
						alt="star"
					/>
					<img
						className="w-[1.25vw] mr-[.5vw]"
						src="/star.svg"
						alt="star"
					/>
					<h2 className="text-[#021639] text-[1.05vw]">
						<span className="font-bold">198k</span> Excellent
						Reviews
					</h2>
				</div>
				<div className="flex items-center justify-start">
					<button className="px-[1.5vw] py-[1.5vh] bg-[#30AF5B] flex justify-center items-center rounded-[3vw] cursor-pointer mr-[1vw]">
						<label className="text-white text-[.9vw] font-bold mt-[.1vw]  cursor-pointer">
							Download App
						</label>
					</button>
					<button className="px-[1.5vw] py-[1.5vh] flex justify-center items-center rounded-[3vw] cursor-pointer">
						<img
							className="w-[1.25vw] mr-[.5vw]"
							src="/play.svg"
							alt="play"
						/>
						<label className="text-[.9vw] font-bold mt-[.1vw] cursor-pointer">
							How we work?
						</label>
					</button>
				</div>
			</div>
			<div className="h-full w-2/4 flex justify-start items-start ">
				<div className="absolute bg-[url('/pattern-bg.webp')] bg-center bg-cover w-screen h-screen top-[-12.5vh] right-[-5vw]"></div>
				<div className="flex flex-col items-start justify-between bg-[#292C27] p-[1.5vw] w-[14vw] rounded-[1vw] ml-[2vw] z-10 h-fit">
					<div className="w-full flex items-center justify-between">
						<h2 className="text-[#A2A2A2] text-[.9vw]">Location</h2>
						<img
							className="w-[1.25vw]"
							src="/close.svg"
							alt="close"
						/>
					</div>
					<h2 className="text-white text-[1.15vw] font-bold">
						Aguas Calientes
					</h2>
					<div className="w-full flex items-start justify-between mt-[1.75vw]">
						<div className="flex flex-col">
							<h2 className="text-[#A2A2A2] text-[.9vw]">
								Distance
							</h2>
							<h2 className="text-white text-[1.15vw] font-bold">
								173.28mi
							</h2>
						</div>
						<div className="flex flex-col">
							<h2 className="text-[#A2A2A2] text-[.9vw]">
								Elevation
							</h2>
							<h2 className="text-white text-[1.15vw] font-bold">
								2.040 km
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
