import {
	FileCheck,
	FileSignature,
	LucideIcon,
	Search,
	Workflow,
} from "lucide-react";

type ProcessFlowCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	stepNumber: string;
};

const applicationSteps = [
	{
		title: "Submit Loan Request",
		description: "Specify your loan amount, purpose, and business challenges",
		icon: FileSignature,
	},
	{
		title: "Application Review",
		description:
			"Our AI system reviews your application and provides instant feedback",
		icon: Search,
	},
	{
		title: "Loan Offer",
		description:
			"If approved, review your personalized loan amount, interest rate, and repayment terms",
		icon: FileCheck,
	},
];

const ProcessFlowCard = (props: ProcessFlowCardProps) => {
	return (
		<article className='w-[20rem] mx-auto'>
			<p className='mx-auto text-center w-[4rem] h-[4rem] rounded-full bg-[#2c5d3f33] text-green-800 text-[1.2rem] font-semibold flex items-center justify-center'>
				<props.icon />
			</p>
			<h1 className='mt-4 text-center text-[1.1rem] mb-2 font-semibold text-[#1f2e22b8]'>
				{props.title}
			</h1>
			<p className='text-center text-sm text-gray-400 px-4'>
				{props.description}
			</p>
		</article>
	);
};

function ProcessFlow() {
	return (
		<section className='md:w-[80%] w-[90%] mx-auto py-[4rem]'>
			<p className='flex items-center justify-center mx-auto w-fit bg-gray-100 text-gray-600 px-3 py-1 text-sm border border-gray-300 rounded-[1rem]'>
				<Workflow className='w-5 h-5 mr-2' /> Process flow
			</p>
			<h2 className='text-center font-manrope font-semibold text-[1.5rem] md:text-[2rem] mt-2 mb-4 md:mb-1 text-green-900'>
				How LendWise works
			</h2>
			<p className='text-center text-gray-600 text-sm'>
				Simple steps to get the funding your business needs
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 mt-12 relative'>
				{applicationSteps.map((step, index) => (
					<ProcessFlowCard
						{...step}
						stepNumber={(index + 1).toString()}
					/>
				))}
				<div className=' justify-between h-full absolute w-full inset-0 items-start hidden md:flex'>
					<div className='w-[20rem] mx-auto' />
					<img
						className='w-[4rem]'
						src='/icons/curved-arrow.svg'
						alt=''
					/>
					<div className='w-[20rem] mx-auto' />
					<img
						className='w-[4rem]'
						src='/icons/curved-arrow.svg'
						alt=''
					/>
					<div className='w-[20rem] mx-auto' />
				</div>
			</div>
		</section>
	);
}
export default ProcessFlow;
