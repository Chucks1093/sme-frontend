import { useState } from "react";
import {
	LayoutDashboard,
	FileText,
	FileUp,
	FileSearch,
	FileCheck,
	FileX,
	MapPin,
	Home,
	Building2,
	BarChart2,
	TrendingUp,
	Map,
	PieChart,
	Users,
	Briefcase,
	Shield,
	Settings,
	ChevronDown,
	ChevronRight,
	LogOut,
} from "lucide-react";

type SidebarItem = {
	key: string;
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	path?: string;
	subItems?: SidebarItem[];
};

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState<string>("dashboard");
	const [expandedItems, setExpandedItems] = useState<string[]>([
		"loan_applications",
	]);

	const toggleExpand = (itemKey: string) => {
		setExpandedItems((prev) =>
			prev.includes(itemKey)
				? prev.filter((item) => item !== itemKey)
				: [...prev, itemKey]
		);
	};

	const sidebarItems: SidebarItem[] = [
		{
			key: "dashboard",
			title: "Dashboard",
			icon: LayoutDashboard,
			path: "/dashboard",
		},
		{
			key: "loan_applications",
			title: "Loan Applications",
			icon: FileText,
			subItems: [
				{
					key: "new",
					title: "New Applications",
					icon: FileUp,
					path: "/applications/new",
				},
				{
					key: "review",
					title: "In Review",
					icon: FileSearch,
					path: "/applications/review",
				},
				{
					key: "approved",
					title: "Approved",
					icon: FileCheck,
					path: "/applications/approved",
				},
				{
					key: "rejected",
					title: "Rejected",
					icon: FileX,
					path: "/applications/rejected",
				},
			],
		},
		{
			key: "location",
			title: "Location Management",
			icon: MapPin,
			subItems: [
				{
					key: "rural",
					title: "Rural Quotas",
					icon: Home,
					path: "/location/rural",
				},
				{
					key: "urban",
					title: "Urban Distribution",
					icon: Building2,
					path: "/location/urban",
				},
			],
		},
		{
			key: "reports",
			title: "Reports",
			icon: BarChart2,
			subItems: [
				{
					key: "performance",
					title: "Loan Performance",
					icon: TrendingUp,
					path: "/reports/performance",
				},
				{
					key: "regional",
					title: "Regional Analysis",
					icon: Map,
					path: "/reports/regional",
				},
				{
					key: "success",
					title: "Success Rates",
					icon: PieChart,
					path: "/reports/success",
				},
			],
		},
		{
			key: "users",
			title: "User Management",
			icon: Users,
			subItems: [
				{
					key: "business",
					title: "Business Owners",
					icon: Briefcase,
					path: "/users/business",
				},
				{
					key: "admin",
					title: "Admin Accounts",
					icon: Shield,
					path: "/users/admin",
				},
			],
		},
		{
			key: "settings",
			title: "Settings",
			icon: Settings,
			path: "/settings",
		},
	];

	const renderSidebarItem = (item: SidebarItem) => {
		const isActive = activeItem === item.key;
		const isExpanded = expandedItems.includes(item.key);
		const hasSubItems = item.subItems && item.subItems.length > 0;

		return (
			<div
				key={item.key}
				className='mb-1'>
				<button
					onClick={() => {
						setActiveItem(item.key);
						if (hasSubItems) {
							toggleExpand(item.key);
						}
					}}
					className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm
            ${
					isActive
						? "bg-green-950 text-white"
						: "text-gray-500 hover:bg-green-50"
				}
            transition-colors duration-150 ease-in-out`}>
					<div className='flex items-center gap-3'>
						<item.icon className='h-4 w-4' />
						<span className='font-medium'>{item.title}</span>
					</div>
					{hasSubItems &&
						(isExpanded ? (
							<ChevronDown className='h-4 w-4' />
						) : (
							<ChevronRight className='h-4 w-4' />
						))}
				</button>

				{/* Sub Items */}
				{hasSubItems && isExpanded && (
					<div className='ml-4 mt-1 space-y-1'>
						{item.subItems?.map((subItem) => (
							<button
								key={subItem.key}
								onClick={() => setActiveItem(subItem.key)}
								className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  ${
							activeItem === subItem.key
								? "bg-green-950 text-white"
								: "text-gray-600 hover:bg-green-50"
						}
                  transition-colors duration-150 ease-in-out`}>
								<subItem.icon className='h-4 w-4' />
								<span className='font-medium text-gray-600'>
									{subItem.title}
								</span>
							</button>
						))}
					</div>
				)}
			</div>
		);
	};

	return (
		<div className='text-[#5a5653] h-screen bg-white border-r border-gray-200 flex flex-col'>
			{/* Logo/Brand */}
			<div className='h-16 flex items-center justify-center border-b border-gray-200 gap-2'>
				<img
					src='/icons/smedan_footer.png'
					alt='logo'
					className=' w-6 h-6'
				/>
				<p className='font-manrope font-semibold text-sm text-zinc-700'>
					SMELOANS{" "}
				</p>
			</div>

			{/* Navigation Items */}
			<div className='flex-1 overflow-y-auto p-3'>
				{sidebarItems.map(renderSidebarItem)}
			</div>

			{/* User Profile Section */}
			<div className='p-4 border-t border-gray-200'>
				<button className='w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-green-50 rounded-lg transition-colors duration-150'>
					<LogOut className='h-4 w-4' />
					<span>Sign Out</span>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
