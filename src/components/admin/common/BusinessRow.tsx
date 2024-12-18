import { useState } from "react";
import "./style.css";
import { showToast } from "@/lib/utils";

type AvatarProps = {
	image?: string;
	initial: string;
	backgroundColor: string;
	color: string;
};

function ShopAvatar(props: AvatarProps) {
	// const initials = props.initial[0]
	return (
		<div className='w-10 h-10 rounded-full overflow-hidden flex justify-center items-center'>
			{props.image ? (
				<img
					src={props.image}
					alt=''
				/>
			) : (
				<span
					style={{
						backgroundColor: props.backgroundColor,
						color: props.color,
					}}
					className='h-full w-full flex justify-center items-center font-bold uppercase'>
					{props.initial}
				</span>
			)}
		</div>
	);
}

type CustomeCardProps = {
	name: string;
	walletAddress: string;
	date: string;
	orders: number;
	price: number;
	status: string;
	backgroundColor: string;
	color: string;
	email: string;
};

function BusinessRow(props: CustomeCardProps) {
	const [status, setStatus] = useState(props.status);

	const handleAccept = () => {
		setStatus("accepted");
		showToast.success("Accepted");
	};

	const handleReject = () => {
		setStatus("rejected");
		showToast.error("Rejected");
	};
	return (
		<article className='customer__card items-center [&>p]:text-sm [&>p]:text-gray-700 border-b border-b-gray-100  px-3 py-3'>
			<div className='customere__details flex items-center gap-2'>
				<ShopAvatar
					backgroundColor={props.backgroundColor}
					color={props.color}
					initial={`${props.name[0]}${props.name[1]}`}
				/>
				<p className='text-sm'>{props.name}</p>
			</div>
			<p className='status'>
				{status === "pending" ? (
					<span className='text-yellow-500 py-1 px-2 rounded'>
						Pending
					</span>
				) : status === "accepted" ? (
					<span className='text-green-500 py-1 px-2 rounded'>
						Accepted
					</span>
				) : status === "rejected" ? (
					<span className='text-red-500 py-1 px-2 rounded'>Rejected</span>
				) : (
					<></>
				)}
			</p>
			<p className='email'>{props.email}</p>

			<p className='date'>{props.date}</p>
			<div className='flex gap-2'>
				{status !== "accepted" && (
					<button
						onClick={handleAccept}
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
						Accept
					</button>
				)}
				{status !== "rejected" && (
					<button
						onClick={handleReject}
						className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
						Reject
					</button>
				)}
			</div>
		</article>
	);
}
export default BusinessRow;
