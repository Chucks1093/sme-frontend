import { LucideIcon } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";

type SideBarItemProps = {
	title: string;
	id: string;
	icon: LucideIcon;
	disabled: boolean;
	funnels?: string[];
	length?: number;
};

export default function SideBarItem(props: SideBarItemProps) {
	const navigate = useNavigate();
	const location = useLocation();

	const getNavLinkClass = () => {
		const paths = location.pathname.split("/");
		const isActive = paths[1] === props.id;
		return `mb-1 px-8 font-medium flex flex-row items-center   py-2 justify-between rounded-r-[1.1rem] gap-3  hover:bg-[#3b3b3b4c] text-[#ffffff]  ${
			isActive ? "opacity-100 bg-[#6d6d6d34]" : "opacity-40 "
		}`;
	};

	const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		navigate(props.id);
	};

	return (
		<NavLink
			key={props.title}
			onClick={handleNavigate}
			to={`${props.id}`}
			className={getNavLinkClass}>
			<props.icon
				color='black'
				className='w-[1.3rem] .bg-[#6d6d6d34] invert(15%) sepia(6%) saturate(4498%) hue-rotate(340deg) brightness(91%) contrast(82%)'
			/>
			<p className='text-sm text-[#1c1e219e] mr-auto'>{props.title}</p>
			<p className='text-sm text-[#1c1e219e]'>{props.length}</p>
		</NavLink>
	);
}
