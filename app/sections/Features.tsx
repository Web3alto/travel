"use client";

const Features = () => {
	return (
		<div className="w-[90vw] sm:w-[95vw] lg:w-[75vw] h-full mx-auto mt-0 lg:mt-[10vh] mb-0 lg:mb-[15vh] flex flex-col items-start lg:items-center justify-center bg-[url('/feature-bg.webp')] bg-center bg-cover">
			<div className="relative mb-[5vh] lg:mb-[7.5vh]">
				<img
					className="absolute top-[-6.75vh] sm:top-[-3.5vh] left-[-.75vw] w-[10vw] sm:w-[5.5vw] lg:w-[2.75vw]"
					src="/camp.svg"
					alt="camp"
				/>
				<h2 className="text-[11vw] sm:text-[5.5vw] lg:text-[3.35vw] font-bold leading-[4vw]">
					Our Features
				</h2>
			</div>
			<div className="flex">
				<div className="hidden lg:block w-[40%] relative">
					<img
						className="absolute top-[-5vh] w-[22.5vw] rotate-12"
						src="/phone.webp"
						alt="phone"
					/>
				</div>
				<div className="w-full lg:w-[60%] flex flex-col">
					<div className="flex flex-col sm:flex-row items-start justify-between">
						<div className="flex flex-col w-full sm:w-[45%] mt-[5vh] sm:mt-0">
							<div className="rounded-full bg-[#30AF5B] p-[4vw] sm:p-[2vw] lg:p-[1.3vw] flex items-center justify-center w-[16vw] sm:w-[8vw] lg:w-[4vw]">
								<img
									className="w-[8vw] sm:w-[3.5vw] lg:w-[1.25vw]"
									src="/map.svg"
									alt="map"
								/>
							</div>
							<h2 className="font-bold text-[5vw] sm:text-[2.4vw] lg:text-[1.75vw] leading-[2vw] my-[4vh] sm:my-[2vh]">
								Real Maps Can Be Offline
							</h2>
							<p className="text-[#7B7B7B] text-[4vw] sm:text-[2vw] lg:text-[.9vw]">
								We provide a solution for you to be able to use
								our application when climbing, yes offline maps
								you can use at any time there is no signal at
								the location
							</p>
						</div>
						<div className="flex flex-col w-full sm:w-[45%] mt-[5vh] sm:mt-0">
						<div className="rounded-full bg-[#30AF5B] p-[4vw] sm:p-[2vw] lg:p-[1.3vw] flex items-center justify-center w-[16vw] sm:w-[8vw] lg:w-[4vw]">
								<img
									className="w-[8vw] sm:w-[3.5vw] lg:w-[1.25vw]"
									src="/calendar.svg"
									alt="map"
								/>
							</div>
							<h2 className="font-bold text-[5vw] sm:text-[2.4vw] lg:text-[1.75vw] leading-[2vw]  my-[4vh] sm:my-[2vh]">
								Set An Adventure Schedule
							</h2>
							<p className="text-[#7B7B7B] text-[4vw] sm:text-[2vw] lg:text-[.9vw]">
								Schedule an adventure with friends. On holidays,
								there are many interesting offers from Hilink.
								That way, there's no more discussion
							</p>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row items-start justify-between sm:mt-[7.5vh]">
						<div className="flex flex-col w-full sm:w-[45%] mt-[5vh] sm:mt-0">
						<div className="rounded-full bg-[#30AF5B] p-[4vw] sm:p-[2vw] lg:p-[1.3vw] flex items-center justify-center w-[16vw] sm:w-[8vw] lg:w-[4vw]">
								<img
									className="w-[8vw] sm:w-[3.5vw] lg:w-[1.25vw]"
									src="/tech.svg"
									alt="map"
								/>
							</div>
							<h2 className="font-bold text-[5vw] sm:text-[2.4vw] lg:text-[1.75vw] leading-[2vw] my-[4vh] sm:my-[2vh]">
								Technology Using Augment Reality
							</h2>
							<p className="text-[#7B7B7B] text-[4vw] sm:text-[2vw] lg:text-[.9vw]">
								Technology uses augmented reality as a guide to
								your hiking trail in the forest to the top of
								the mountain. Already supported by the latest
								technology without an internet connection
							</p>
						</div>
						<div className="flex flex-col w-full sm:w-[45%] mt-[5vh] sm:mt-0">
						<div className="rounded-full bg-[#30AF5B] p-[4vw] sm:p-[2vw] lg:p-[1.3vw] flex items-center justify-center w-[16vw] sm:w-[8vw] lg:w-[4vw]">
								<img
									className="w-[8vw] sm:w-[3.5vw] lg:w-[1.25vw]"
									src="/location.svg"
									alt="map"
								/>
							</div>
							<h2 className="font-bold text-[5vw] sm:text-[2.4vw] lg:text-[1.75vw] leading-[2vw] my-[4vh] sm:my-[2vh]">
								Many New Locations Every Month
							</h2>
							<p className="text-[#7B7B7B] text-[4vw] sm:text-[2vw] lg:text-[.9vw]">
								Lots of new locations every month, because we
								have a worldwide community of climbers who share
								their best experiences with climbing
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
