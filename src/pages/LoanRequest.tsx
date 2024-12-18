import { textColorMap } from "@/utils/formatters";
import BusinessRow from "@/components/admin/common/BusinessRow";
import { Fragment } from "react/jsx-runtime";

export const customerData = [
	{
		name: "John's Electronics",
		walletAddress: "0x1234567890123456789012345678901234567890",
		date: "2024-07-15",
		orders: 5,
		price: 250.5,
		backgroundColor: "#F0F4F8",
		color: "#1A365D",
		email: "joe@electronic.com",
		status: getRandomStatus(),
	},
	{
		name: "Smith's Carpentry",
		walletAddress: "0xABCDEF0123456789ABCDEF0123456789ABCDEF01",
		date: "2024-07-14",
		orders: 3,
		price: 150.75,
		backgroundColor: "#FEFCBF",
		color: "#744210",
		email: "bob@carpentry.com",
		status: getRandomStatus(),
	},
	{
		name: "Brown's Restaurant",
		walletAddress: "0x9876543210987654321098765432109876543210",
		date: "2024-07-13",
		orders: 7,
		price: 350.25,
		backgroundColor: "#E6FFFA",
		color: "#234E52",
		email: "charlie@restaurant.com",
		status: getRandomStatus(),
	},
	{
		name: "Wonder Woman's Landscaping",
		walletAddress: "0xFEDCBA9876543210FEDCBA9876543210FEDCBA98",
		date: "2024-07-12",
		orders: 2,
		price: 100.0,
		backgroundColor: "#FFF5F5",
		color: "#63171B",
		email: "diana@landscaping.com",
		status: getRandomStatus(),
	},
	{
		name: "Mission Impossible",
		walletAddress: "0x0123456789ABCDEF0123456789ABCDEF01234567",
		date: "2024-07-11",
		orders: 4,
		price: 200.3,
		backgroundColor: "#EBF8FF",
		color: "#2A4365",
		email: "ethan@missionimpossible.com",
		status: getRandomStatus(),
	},
	{
		name: "Shameless",
		walletAddress: "0x89ABCDEF0123456789ABCDEF0123456789ABCDEF",
		date: "2024-07-10",
		orders: 6,
		price: 300.6,
		backgroundColor: "#F0FFF4",
		color: "#22543D",
		email: "fiona@shameless.com",
		status: getRandomStatus(),
	},
	{
		name: "Seinfeld",
		walletAddress: "0x3210987654321098765432109876543210987654",
		date: "2024-07-09",
		orders: 1,
		price: 50.25,
		backgroundColor: "#FAF5FF",
		color: "#44337A",
		email: "george@seinfeld.com",
		status: getRandomStatus(),
	},
];

function getRandomStatus() {
	const statusOptions = ["pending", "accepted", "rejected"];
	return statusOptions[Math.floor(Math.random() * statusOptions.length)];
}

function Customer() {
	return (
		<main className='p-8'>
			<h1 className='font-bold text-xl text-gray-700'>Loan Requests</h1>
			<div className='mt-8 bg-white rounded-xl pt-0 py-6 px-4'>
				<div className='customer__table  mt-4'>
					<div className='customer__card pt-7 pb-3 border-b border-b-gray-100  px-4 [&>p]:text-sm [&>p]:font-bold [&>p]:text-gray-600  mb-2'>
						<p>Business</p>
						<p>Status</p>
						<p>Email</p>
						<p>Date</p>
						<p>Actions</p>
					</div>
					<Fragment>
						{Object.keys(textColorMap).map((key, index) => (
							<BusinessRow
								key={index}
								status={customerData[index].status}
								email={customerData[index].email}
								name={customerData[index].name}
								backgroundColor={key}
								color={textColorMap[key as keyof typeof textColorMap]}
								date={customerData[index].date}
								walletAddress={customerData[index].walletAddress}
								price={customerData[index].price}
								orders={customerData[index].orders}
							/>
						))}
					</Fragment>
				</div>
			</div>
		</main>
	);
}
export default Customer;
