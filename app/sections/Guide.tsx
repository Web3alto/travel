"use client";

const Guide = () => {
	return (
		<div className="w-[75vw] h-full mx-auto my-[10vh] flex flex-col">
			<div className="flex justify-between items-center h-full w-full">
				<div className="h-full flex flex-col">
					<img className="w-[2.75vw]" src="/camp.svg" alt="camp" />
					<p className="text-[30AF5B] text-[.9vw]">
						WE ARE HERE FOR YOU
					</p>
					<h2 className="text-[3.35vw] font-bold leading-[4vw]">
						Guide You <br /> to Easy Path
					</h2>
				</div>

				<p className="w-1/3 mt-[3vh] text-[.9vw] text-[#7B7B7B]">
					Only with the hilink application you will no longer get lost
					and get lost again, because we already support offline maps
					when there is no internet connection in the field. Invite
					your friends, relatives and friends to have fun in the
					wilderness through the valley and reach the top of the
					mountain
				</p>
			</div>
			<div className="bg-[url('/boat.webp')] bg-center bg-cover w-full h-[60vh] rounded-[2vw] my-[10vh] px-[3vw] py-[7.5vh] flex items-start justify-start">
				<div className="flex items-center justify-between bg-[#ffffff] p-[1.25vw] w-[15vw] rounded-[1vw] ml-[2vw] z-10 h-fit">
					<img
						className="h-[20vh] w-auto"
						src="/meter.svg"
						alt="meter"
					/>
					<div className="flex-col">
						<div className="w-full flex items-start justify-between">
							<h2 className="text-[#A2A2A2] text-[.9vw] mb-[1vh]">
								Destination
							</h2>
							<p className="font-bold text-[30AF5B] text-[.9vw]">
								48 min
							</p>
						</div>
						<h2 className="text-black text-[1vw] font-bold">
							Aguas Calientes
						</h2>
						<div className="flex flex-col mt-[3.5vh]">
							<h2 className="text-[#A2A2A2] text-[.9vw] mb-[1vh]">
								Start track
							</h2>
							<h2 className="text-black text-[1vw] font-bold">
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
