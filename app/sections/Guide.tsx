"use client";

const Guide = () => {
	return (
		<div className="w-[100vw] lg:w-[75vw] h-full mx-auto lgmy-[10vh] flex flex-col">
			<div className="block lg:flex justify-between items-center h-full w-[90vw] sm:w-[95vw] lg:w-full mx-auto">
				<div className="h-full flex flex-col">
					<img
						className="w-[12.5vw] sm:w-[7.5vw] lg:w-[2.75vw]"
						src="/camp.svg"
						alt="camp"
					/>
					<p className="text-[30AF5B] text-[4.5vw] sm:text-[2.1vw] lg:text-[.9vw]">
						WE ARE HERE FOR YOU
					</p>
					<h2 className="mt-[1.5vh] lg:mt-0 w-full lg:w-2/3 text-[11vw] sm:text-[5.5vw] lg:text-[3.35vw] font-bold leading-[12vw] sm:leading-[4vw]">
						Guide You to Easy Path
					</h2>
				</div>

				<p className="w-full lg:w-1/3 mt-[3vh] text-[4vw] sm:text-[2.1vw] lg:text-[.9vw] text-[#7B7B7B]">
					Only with the hilink application you will no longer get lost
					and get lost again, because we already support offline maps
					when there is no internet connection in the field. Invite
					your friends, relatives and friends to have fun in the
					wilderness through the valley and reach the top of the
					mountain
				</p>
			</div>
			<div className="bg-[url('/boat.webp')] bg-center bg-cover w-full h-[50vh] sm:h-[30vh] lg:h-[60vh] lg:rounded-[2vw] my-[10vh] lg:px-[3vw] lg:py-[7.5vh] flex items-center justify-center sm:justify-start lg:items-start">
				<div className="flex items-center justify-start lg:justify-between bg-[#ffffff] p-[7.5vw] sm:p-[3vw] lg:p-[1.25vw] w-[80vw] sm:w-[35vw] lg:w-[15vw] rounded-[5vw] sm:rounded-[3vw] lg:rounded-[1vw] sm:ml-[5vw] lg:ml-[2vw] z-10 h-fit">
					<img
						className="h-[25vh] sm:h-[15vh] lg:h-[20vh] w-auto"
						src="/meter.svg"
						alt="meter"
					/>
					<div className="flex-col ml-[2vw] lg:ml-[1vw] h-full w-full">
						<div className="w-full flex items-start justify-between">
							<h2 className="text-[#A2A2A2] text-[4vw] sm:text-[2.1vw] lg:text-[.9vw] mb-[.75vh] lg:mb-[1vh]">
								Destination
							</h2>
							<p className="font-bold text-[30AF5B] text-[4vw] sm:text-[2.1vw] lg:text-[.9vw]">
								48 min
							</p>
						</div>
						<h2 className="text-black text-[5vw] sm:text-[2.5vw] lg:text-[1vw] font-bold">
							Aguas Calientes
						</h2>
						<div className="flex flex-col mt-[3.5vh]">
							<h2 className="text-[#A2A2A2] text-[4vw] sm:text-[2.1vw] lg:text-[.9vw] mb-[.75vh] lg:mb-[1vh]">
								Start track
							</h2>
							<h2 className="text-black text-[5vw] sm:text-[2.5vw] lg:text-[1vw] font-bold">
								Wonorejo Pasuruan
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Guide;
