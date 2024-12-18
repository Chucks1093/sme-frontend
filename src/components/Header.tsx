import { Link } from "react-router";

function Header() {
	return (
		<header className='bg-white shadow-sm z-20 fixed h-[10vh] flex items-center justify-between w-[100%] px-[10%] -translate-x-1/2 left-1/2'>
			<div className='flex items-center justify-between gap-2 md:gap-3'>
				<img
					src='/icons/smedan_footer.png'
					alt='logo'
					className='md:w-9 md:h-9 w-6 h-6'
				/>
				<p className='font-manrope font-semibold text-sm md:text-xl text-zinc-700'>
					SMELOANS
				</p>
			</div>
			<div className=' items-center justify-center gap-10 text-sm text-zinc-800 hidden md:flex'>
				<a href='#hero'>Home</a>
				<a href='#hero'>Features</a>
				<a href='#hero'>Contact</a>
				<a href='#hero'>Reviews</a>
			</div>
			<Link to='/loan'>
				<button className='bg-green-900 text-zinc-100 text-sm px-8 md:px-12 py-3 md:py-4 rounded-md'>
					Apply now
				</button>
			</Link>
		</header>
	);
}
export default Header;
