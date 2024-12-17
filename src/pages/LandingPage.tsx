import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessFlow from "@/components/ProcessFlow";
import Review from "@/components/Review";

function LandingPage() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<ProcessFlow />
			<Review />
			<Contact />
			<Footer />
		</div>
	);
}
export default LandingPage;
