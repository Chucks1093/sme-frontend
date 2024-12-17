import { showToast } from "@/lib/utils";
import { useNavigate } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import LoanApplicationForm from "@/components/LoanApplicationForm";
import Footer from "@/components/Footer";

type UserData = {
	name: string;
	photoURL?: string;
	email: string;
	password: string;
	displayName: string;
};

const UserAvatar = () => {
	const storedUserData = localStorage.getItem("sme-user");
	const userData = storedUserData
		? (JSON.parse(storedUserData) as UserData)
		: undefined;
	console.log(userData);
	const initial = userData?.name || userData?.displayName || "";
	return (
		userData && (
			<Avatar className='bg-[#854e0e1c] text-[#1c1e219e] border'>
				<AvatarImage src={userData?.photoURL} />
				<AvatarFallback className='uppercase'>
					{initial.substring(0, 2)}
				</AvatarFallback>
			</Avatar>
		)
	);
};

function LoanPage() {
	const navigate = useNavigate();
	const [showForm, setShowForm] = useState(false);
	const showApplyModal = () => {
		const storedUserData = localStorage.getItem("sme-user");
		const userData = storedUserData
			? (JSON.parse(storedUserData) as UserData)
			: undefined;
		if (!userData) {
			showToast.error("Please login to apply");
			return navigate("/login");
		}
		showToast.message("Fill form to Apply");
		setShowForm(true);
	};
	return (
		<Fragment>
			<header className='bg-white shadow-sm z-20 fixed h-[10vh] flex items-center justify-between w-[100%] px-[10%] -translate-x-1/2 left-1/2'>
				<div className='flex items-center justify-between gap-2 md:gap-3'>
					<img
						src='/icons/smedan_footer.png'
						alt='logo'
						className='md:w-9 md:h-9 w-6 h-6'
					/>
					<p className='font-manrope font-semibold text-sm md:text-xl text-zinc-700'>
						SMEDAN{" "}
					</p>
				</div>
				<div className=' items-center justify-center gap-10 text-lg text-zinc-700 hidden md:flex'>
					<p> SME Growth Business Loan</p>
				</div>
				<div className='flex items-center gap-2'>
					<button
						onClick={showApplyModal}
						className='bg-green-900 text-zinc-100 text-sm px-8 md:px-12 py-3 md:py-4 rounded-md'>
						Apply now
					</button>
					<UserAvatar />
				</div>
			</header>
			<div className='max-w-4xl mx-auto p-8 space-y-6 pt-[17vh]'>
				<h1 className='text-4xl font-bold font-manrope text-zinc-600'>
					SME Growth Accelerator Loan Program
				</h1>
				<p className='text-zinc-600 leading-7'>
					Are you ready to take your business to the next level? Not many
					financial institutions truly understand the unique challenges
					faced by Nigerian SMEs. We are not just another lender – we are
					your growth partner! Our SME Growth Accelerator Loan Program is
					specifically designed for ambitious business owners who are ready
					to scale their operations and create lasting impact in their
					communities.
				</p>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Product Overview
					</h2>
					<p className='text-zinc-600 leading-7'>
						Are you ready to take your business to the next level? Not
						many financial institutions truly understand the unique
						challenges faced by Nigerian SMEs. We are not just another
						lender – we are your growth partner! Our SME Growth
						Accelerator Loan Program is specifically designed for
						ambitious business owners who are ready to scale their
						operations and create lasting impact in their communities. We
						are offering the SME Growth Accelerator Loan to support
						established small and medium enterprises ready for expansion.
						This loan product is essential for businesses seeking working
						capital, equipment financing, or expansion funding with
						flexible terms and competitive rates.
					</p>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Loan Features
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Loan Amount: ₦500,000 - ₦5,000,000</li>
						<li>Tenure: 6 - 24 months</li>
						<li>Interest Rate: Starting from 15% per annum</li>
						<li>Processing Time: 48 hours from complete documentation</li>
						<li>Disbursement: Direct to business</li>
						<li>Repayment: Flexible monthly installments</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Addtional Benefits
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Free business advisory services</li>
						<li>Access to entrepreneurship workshops</li>
						<li>Network of business partnerships</li>
						<li>Priority banking services</li>
						<li>Dedicated relationship manager</li>
						<li>Online account management</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Business Criteria
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Registered business operation in Nigeria</li>
						<li>Minimum 12 months of active operations</li>
						<li>Valid business documentation</li>
						<li>Regular banking transactions</li>
						<li>Clean credit history</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Documentation Required
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>CAC registration documents</li>
						<li>Bank statements (6 months)</li>
						<li>Valid ID of business owner</li>
						<li>Proof of business address</li>
						<li> Tax clearance certificate</li>
						<li>Financial records/statements</li>
						<li>Business plan/proposal</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Assessment Process
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Initial eligibility screening</li>
						<li>Document verification</li>
						<li>Business site visit</li>
						<li>Credit assessment</li>
						<li>Loan committee review</li>
						<li>Offer letter issuance</li>
						<li>Documentation and disbursement</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Cost Breakdown
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Processing Fee: 1% of loan amount</li>
						<li>Insurance: 0.5% of loan amount</li>
						<li>Monthly Interest: 1.25% flat</li>
						<li>Late Payment Fee: 1% of overdue amount</li>
						<li>Early Settlement Fee: 1% of outstanding balance</li>
					</ul>
					<p className='mt-5 italic text-red-600 leading-7 font-manrope font-medium'>
						For a ₦1,000,000 loan over 12 months, you'll have a monthly
						principal of ₦83,333 plus monthly interest of ₦12,500, making
						your total monthly payment ₦95,833, with a total repayment
						amount of ₦1,150,000.
					</p>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Application Process
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Initial eligibility screening</li>
						<li>Document verification</li>
						<li>Business site visit</li>
						<li>Credit assessment</li>
						<li>Loan committee review</li>
						<li>Offer letter issuance</li>
						<li>Documentation and disbursement</li>
					</ul>
				</section>
				<section>
					<h2 className='text-2xl font-bold font-manrope mb-3 text-zinc-700'>
						Support and Contact
					</h2>
					<ul className='list-disc pl-6 text-zinc-600 leading-7 font-manrope font-medium'>
						<li>Customer Service: 0800-SME-LOAN</li>
						<li>Email: sme.loans@institution.com</li>
						<li>WhatsApp: +234 800 XXX XXXX</li>
						<li>Website: www.institution.com/sme-loans</li>
					</ul>
				</section>

				<div className='mt-4 italic'>
					<p>Last Updated: December 15, 2024</p>
					<p>Document Reference: BL/SME/2024/001</p>
				</div>
				<div className='mt-8'>
					<button
						onClick={showApplyModal}
						className='bg-green-900 text-zinc-100 text-sm px-16 py-4 rounded-md'>
						Apply now
					</button>
				</div>
			</div>
			<Footer />

			{showForm && <LoanApplicationForm setShowForm={setShowForm} />}
		</Fragment>
	);
}
export default LoanPage;
