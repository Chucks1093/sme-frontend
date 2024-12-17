interface FooterLink {
	name: string;
	href: string;
}

interface FooterLinks {
	explore: FooterLink[];
	knowMore: FooterLink[];
	about: FooterLink[];
}

const Footer = () => {
	const footerLinks: FooterLinks = {
		explore: [
			{ name: "Download Android app", href: "#" },
			{ name: "Business Solution", href: "#" },
			{ name: "PagerCare", href: "#" },
			{ name: "About Product", href: "#" },
		],
		knowMore: [
			{ name: "Health Portal", href: "#" },
			{ name: "Stories from Field", href: "#" },
			{ name: "Profit Hub", href: "#" },
			{ name: "Release Pages", href: "#" },
		],
		about: [
			{ name: "Distributed World-Wide", href: "#" },
			{ name: "Who we help", href: "#" },
			{ name: "Community rights", href: "#" },
			{ name: "Marketing", href: "#" },
		],
	};

	return (
		<footer
			className='bg-[#854e0e1c] pt-16 pb-8'
			role='contentinfo'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
					{/* Brand Section */}
					<div>
						<div className='flex items-center gap-3'>
							<img
								src='/icons/smedan_footer.png'
								alt='LendWise Logo'
								className='w-9 h-9'
							/>
							<p className='font-manrope font-semibold text-xl text-zinc-700'>
								SMEDAN
							</p>
						</div>
						<p className='text-sm text-[#1c1e219e] mt-4'>
							Get instant loan approvals with AI-powered approval in
							minutes.
						</p>
					</div>

					{/* Links Sections */}
					<nav aria-label='Explore'>
						<h3 className='text-gray-900 font-medium mb-4'>EXPLORE</h3>
						<ul className='space-y-2'>
							{footerLinks.explore.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className='text-[#1c1e219e] hover:text-gray-900 text-sm transition-colors'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label='Know More'>
						<h3 className='text-gray-900 font-medium mb-4'>KNOW MORE</h3>
						<ul className='space-y-2'>
							{footerLinks.knowMore.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className='text-[#1c1e219e] hover:text-gray-900 text-sm transition-colors'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label='About'>
						<h3 className='text-gray-900 font-medium mb-4'>ABOUT</h3>
						<ul className='space-y-2'>
							{footerLinks.about.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className='text-[#1c1e219e] hover:text-gray-900 text-sm transition-colors'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
