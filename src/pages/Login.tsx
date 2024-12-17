import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { showToast } from "@/lib/utils";
import handleGoogleAuth from "@/lib/firebase/firebase.google";
import { useNavigate } from "react-router";

const Login = () => {
	const navigate = useNavigate();
	const loginWithGoogle = async () => {
		showToast.loading("Logging in");
		try {
			const userDetails = await handleGoogleAuth();
			localStorage.setItem("sme-user", JSON.stringify(userDetails));
			navigate("/loan");
			showToast.success("Welcome Back");
		} catch (error) {
			showToast.error("Login Failed");
			console.log(error);
		}
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		showToast.loading("Logging In");
		const userString = localStorage.getItem("sme-user");
		if (!userString) {
			return showToast.error("User not found");
		}
		const user = JSON.parse(userString);

		setTimeout(() => {
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;
			console.log(email, password);
			if (user.email !== email || user.password !== password) {
				showToast.error("Invalid email or password");
				throw new Error("Invalid email or password");
			}
			navigate("/loan");
			showToast.success("Welcome Back");
		}, 2000);
	};
	return (
		<Fragment>
			<div className='min-h-screen flex items-center justify-center p-4 auth-layout -z-10 bg-gradient-to-t from-black/50 to-transparent '>
				{/* <div className='absolute inset-0 bg-gradient-to- from-black/50 to-transparent w-full'></div> */}
				{/* Left Side - Auth Form */}
			</div>
			<div className='fixed inset-0 p-8 max-w-xl w-full bg-white  overflow-hidden shadow-md border z-20 '>
				<div className='mb-8 text-center'>
					<div className='flex items-center justify-center gap-1'>
						<img
							src='/icons/smedan_footer.png'
							alt='logo'
							className='w-7 h-7'
						/>
						{/* <p className='font-manrope font-semibold text-[1.1rem] text-zinc-700'>
							SMEDAN{" "}
						</p> */}
					</div>
					<h1 className='text-xl font-manrope font-semibold text-gray-700 mb-1 mt-3'>
						Create your account
					</h1>
					<p className='text-gray-500 text-sm'>
						Get instant loan approvals in minutes.
					</p>
				</div>

				{/* Google Sign In Button */}
				<button
					onClick={loginWithGoogle}
					className='w-full mb-6 flex items-center justify-center gap-2 border rounded-lg p-2.5 hover:bg-gray-50 transition-colors'>
					<img
						src='/icons/goggle.svg'
						alt='Google'
						className='w-5 h-5'
					/>
					<span className='text-sm text-gray-700'>Login with Google</span>
				</button>

				<div className='flex items-center gap-2 mb-6'>
					<div className='flex-1 h-px bg-gray-200'></div>
					<span className='text-sm text-gray-500'>or</span>
					<div className='flex-1 h-px bg-gray-200'></div>
				</div>

				{/* Sign Up Form */}
				<form
					className='space-y-4'
					onSubmit={handleSubmit}>
					<div>
						<label className='block text-sm text-gray-700 mb-1'>
							Email
						</label>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>

					<div>
						<label className='block text-sm text-gray-700 mb-1'>
							Password
						</label>
						<input
							type='password'
							name='password'
							placeholder='Enter your password'
							className='w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>

					<button
						type='submit'
						className='w-full bg-green-950 text-white rounded-lg p-2.5 py-3 text-sm hover:bg-gray-800 transition-colors'>
						Login
					</button>
				</form>

				<p className='text-sm text-gray-600 text-center mt-6'>
					Don't have an account?{" "}
					<Link
						to='/signup'
						className='text-green-900 underline'>
						Sign up
					</Link>
				</p>
			</div>
		</Fragment>
	);
};

export default Login;
