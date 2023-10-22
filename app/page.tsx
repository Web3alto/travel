import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Slider from "./sections/Slider";

export default function Home() {
	return (
		<main className="w-full h-fit flex flex-col overflow-x-hidden">
			<Navbar />
			<Header />
		</main>
	);
}
