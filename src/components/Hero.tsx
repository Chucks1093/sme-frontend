import { Link } from "react-router";

function Hero() {
	return (
		<section
			className='  relative bg-[#854e0e12]
      '>
			<img
				src='https://framerusercontent.com/images/5RlXjISAoh2vfp5MeLPNxQZkTE.svg'
				alt='grids'
				className='h-screen w-screen -z-10 object-cover absolute top-0 left-0 object-top  -10'
			/>
			<div className='h-screen flex items-center justify-between mx-auto w-[80%]'>
				<div className='w-1/2'>
					<p className='border border-green-900 text-green-900 rounded-[1rem] w-fit px-5 py-1 text-sm mb-4'>
						Smart lending decisions
					</p>
					<h1 className='text-[3rem] leading-[4rem] text-green-900 font-semibold mb-4 font-manrope'>
						Empowering Businesses with Hassle-free Loans
					</h1>
					<p className='text-[1rem] w-[80%] mb-[3rem] text-[#3e3e3e]'>
						Get instant loan approvals with AI-powered approval in
						minutes. No hidden fees, transparent processes, and dedicated
						support to help you achieve your financial goals.
					</p>
					<div className='flex items-center gap-4'>
						<Link to='/loan'>
							<button className='bg-green-900 text-zinc-200 text-sm px-12 py-4 rounded-md'>
								Apply now
							</button>
						</Link>

						<button className='border border-green-900 text-green-900 text-sm px-12 py-4 rounded-md'>
							Learn more
						</button>
					</div>
				</div>
				<div className='w-1/2 relative'>
					<img
						src='/images/hero-img.jpg'
						alt=''
						className='h-[32rem] w-full object-cover grayscale rounded-[.8rem]'
					/>
					<img
						src='https://framerusercontent.com/images/TzDnAP0onPiEEPLj2DqE10lHe6Y.png'
						alt=''
						className='absolute w-[20rem] -bottom-6 shadow-lg -left-6'
					/>
				</div>
			</div>
		</section>
	);
}
export default Hero;
