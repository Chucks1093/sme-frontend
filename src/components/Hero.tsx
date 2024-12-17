import { Link } from "react-router";

function Hero() {
	return (
		<section
			className='md:pt-0 pt-[15vh]  relative bg-[#854e0e12]
      '>
			<img
				src='https://framerusercontent.com/images/5RlXjISAoh2vfp5MeLPNxQZkTE.svg'
				alt='grids'
				className='h-screen w-screen -z-10 object-cover absolute top-0 left-0 object-top  -10'
			/>
			<div className=' md:h-screen flex items-center justify-between mx-auto w-[85%] md:w-[80%] flex-col-reverse md:flex-row'>
				<div className='w-full mt-4 md:mt-4'>
					<p className='border hidden md:block border-green-900 text-green-900 rounded-[1rem] w-fit px-5 py-1 text-[.7rem] md:text-sm mb-2 md:mb-4'>
						Smart lending decisions
					</p>
					<h1 className='  text-[1.8rem] md:text-[3rem] leading-[2.2rem] md:leading-[4rem] text-green-900 font-semibold mb-4 font-manrope'>
						Empowering Businesses with Hassle-free Loans
					</h1>
					<p className='text-sm md:text-[1rem] md:leading-[1.7rem] w-[95%] md:w-[80%] mb-4 md:mb-[3rem] text-[#3e3e3e]'>
						Get instant loan approvals with AI-powered approval in
						minutes. No hidden fees, transparent processes, and dedicated
						support to help you achieve your financial goals.
					</p>
					<div className='flex items-center gap-4 mt-8 mb-8 md:mb-0 '>
						<Link to='/loan'>
							<button className='bg-green-900 text-zinc-100 text-sm px-8 md:px-12 py-3 md:py-4 rounded-md'>
								Apply now
							</button>
						</Link>

						<button className='border border-green-900 text-green-900 text-sm px-8 md:px-12 py-3 md:py-4 rounded-md'>
							Learn more
						</button>
					</div>
				</div>
				<div className='w-full relative  md:block'>
					<img
						src='/images/hero-img.jpg'
						alt=''
						className='h-[16rem] md:h-[32rem] w-full object-cover grayscale rounded-[.8rem]'
					/>
					<img
						src='https://framerusercontent.com/images/TzDnAP0onPiEEPLj2DqE10lHe6Y.png'
						alt=''
						className='absolute hidden md:block w-[8rem] md:w-[20rem] -bottom-6 shadow-lg -right-6 md:-left-6'
					/>
				</div>
			</div>
		</section>
	);
}
export default Hero;
