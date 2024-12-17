import { MessageSquare } from "lucide-react";

import { useState } from "react";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactOptions = () => {
	const contactCards = [
		{
			icon: Mail,
			title: "You can email us here",
			action: "hello@sap.com",
			link: "mailto:hello@sap.com",
		},
		{
			icon: Phone,
			title: "Or give us a call",
			action: "Book a Call",
			link: "#book-call",
		},
		{
			icon: MapPin,
			title: "Locations",
			action: "Get Directions",
			link: "#directions",
		},
	];

	return (
		<div className='space-y-4 md:w-[40%]'>
			{contactCards.map((card, index) => (
				<a
					key={index}
					href={card.link}
					className='block bg-white rounded-2xl p-4 shadow-sm border 
            hover:shadow-md transition-shadow duration-200'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<div className='w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center'>
								<card.icon className='w-6 h-6 text-green-950' />
							</div>
							<div>
								<p className='text-gray-600 text-sm'>{card.title}</p>
								<p className='text-green-950 font-medium mt-0.5 font-manrope '>
									{card.action}
								</p>
							</div>
						</div>
						<div className='w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center'>
							<ArrowUpRight className='w-5 h-5 text-gray-600' />
						</div>
					</div>
				</a>
			))}
		</div>
	);
};

/**
 * Renders a contact form that allows users to enter their name, email, and message,
 * and submits the form data to the console.
 *
 * @returns A JSX element representing the contact form.
 */
const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<section className='bg-white rounded-3xl p-4 shadow-sm border  md:w-[60%]'>
			<form
				onSubmit={handleSubmit}
				className='space-y-6'>
				<div>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Enter your name'
						className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 
                text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 
                focus:ring-green-900 focus:border-transparent transition-all'
					/>
				</div>

				<div>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Enter your email'
						className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 
                text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 
                focus:ring-green-900 focus:border-transparent transition-all'
					/>
				</div>

				<div>
					<textarea
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Enter your message'
						rows={6}
						className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 
                text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 
                focus:ring-green-900 focus:border-transparent transition-all resize-none'
					/>
				</div>

				<button
					type='submit'
					className='w-full bg-green-950 text-white py-4 px-6 rounded-xl 
              hover:bg-gray-800 font-manrope transition-colors duration-200 font-medium'>
					Submit
				</button>
			</form>
		</section>
	);
};

function Contact() {
	return (
		<section className='w-[85%] md:w-[80%] mx-auto py-[4rem]'>
			<p className='flex items-center justify-center mx-auto w-fit bg-gray-100 text-gray-600 px-3 py-1 text-sm border border-gray-300 rounded-[1rem]'>
				<MessageSquare className='w-5 h-5 mr-2' /> Contact Us
			</p>
			<h2 className='text-center font-manrope font-semibold text-[1.5rem] md:text-[2rem] mt-2 mb-4 md:mb-1 text-green-900'>
				Get In Touch With Our Team
			</h2>
			<p className='text-center text-gray-500 mb-8 text-sm'>
				Have questions about your loan? Our support team is here to help
				24/7
			</p>
			<div className='flex flex-col md:flex-row justify-between gap-8 md:gap-[4rem]'>
				<ContactForm />
				<ContactOptions />
			</div>
		</section>
	);
}
export default Contact;
