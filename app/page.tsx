import Download from "./sections/Download";
import Features from "./sections/Features";
import Guide from "./sections/Guide";
import Header from "./sections/Header";
import Slider from "./sections/Slider";

export default function Home() {
	return (
		<main className="w-full h-fit flex flex-col overflow-x-hidden">
			<Header />
			<Slider />
			<Guide />
			<Features />
			<Download />
		</main>
	);
}
