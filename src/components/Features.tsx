import {
	Building2,
	Factory,
	Cpu,
	FileText,
	Flame,
	ListChecks,
	Rocket,
} from "lucide-react";

const features = [
	{
		title: "AI-Powered Decisions",
		subtitle: "Get instant feedback on your application status",
		icon: Cpu,
	},
	{
		title: "Simple 3-Step Journey",
		subtitle:
			"From application to approval, we've made getting a business loan effortless",
		icon: ListChecks,
	},
	{
		title: "Minimal Documentation Required",
		subtitle:
			"Just upload basic business details and KYC documents to get started",
		icon: FileText,
	},
	{
		title: "For Businesses of All Sizes",
		subtitle:
			"Whether you're just starting or growing, we have options for every stage",
		icon: Building2,
	},
	{
		title: "Priority Processing",
		subtitle: "Special fast-track approval for rural and underserved areas",
		icon: Rocket,
	},
	{
		title: "Multi-Industry Support",
		subtitle: "From agriculture to retail, we understand your unique needs",
		icon: Factory,
	},
];

function FeatureCard(props: (typeof features)[number]) {
	return (
		<article className='border border-gray-200 p-8 rounded-[.8rem]'>
			<props.icon className='w-7 h-7 text-[#854e0e4e]' />
			<h1 className='mt-4 text-[1.1rem] mb-2 font-semibold text-[#1f2e22b8]'>
				{props.title}
			</h1>
			<p className='text-gray-500'>{props.subtitle}</p>
		</article>
	);
}

function Features() {
	return (
		<section className='w-[80%] mx-auto py-[4rem]'>
			<p className='flex items-center justify-center mx-auto w-fit bg-gray-100 text-gray-600 px-3 py-1 text-sm border border-gray-300 rounded-[1rem]'>
				<Flame className='w-5 h-5' /> Our Features
			</p>
			<h2 className='text-center font-manrope font-semibold text-[2rem] mt-2 mb-1 text-green-900'>
				Designed for Your Business Success
			</h2>
			<p className='text-center text-gray-600'>
				Everything you need to secure the right financing for your growth
				and achieve project success with ease.
			</p>
			<div className='grid grid-cols-3 items-center justify-center gap-10 mt-10'>
				{features.map((feature, index) => (
					<FeatureCard
						{...feature}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
export default Features;
