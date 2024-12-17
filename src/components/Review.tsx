import { ClipboardCheck, User } from "lucide-react";

const Review: React.FC = () => {
	return (
		<section className='w-[80%] mx-auto py-[4rem]'>
			<p className='flex items-center justify-center mx-auto w-fit bg-gray-100 text-gray-600 px-3 py-1 text-sm border border-gray-300 rounded-[1rem]'>
				<ClipboardCheck className='w-5 h-5 mr-2' /> Customer Reviews
			</p>

			<h2 className='text-center font-manrope font-semibold text-[2rem] mt-2 mb-8 text-gray-900'>
				What Our Customers Say
			</h2>
			<div className='flex justify-center gap-[5rem] '>
				<div className='h-[33rem] w-1/2'>
					<img
						className='w-[80%] h-full  object-cover object-top ml-auto rounded-md'
						src='/images/review-3.jpg'
						alt=''
					/>
				</div>
				<div className='w-1/2'>
					<p className='font-manrope  text-[1.8rem] w-[80%] mt-8  text-zinc-800'>
						"Thanks to this loan platform, we transformed our small retail
						business. The instant approval process and flexible terms
						meant we could purchase inventory during peak season without
						the usual stress"
					</p>
					<div className='mt-[3rem] flex gap-4'>
						<User className='w-12 h-12 text-zinc-700 rounded-full p-2 bg-[#2c5d3f33]' />
						<div>
							<h2 className='font-bold text-[1rem] font-manrope'>
								Emma Thompson role
							</h2>
							<p className='text-zinc-700 flex items-center gap-2 '>
								Business Analyst
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Review;