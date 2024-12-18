import Header from "@/components/admin/header/Header";
import SideBar from "@/components/admin/sidebar/SideBar";
import { Outlet } from "react-router";

export default function AdminLayout() {
	return (
		<div className='bg-primary dashboard-layout bg-[#f1f2f2]'>
			<DashboardLayoutStyles />
			<SideBar />
			<Header />
			<div className='outlet flex flex-col  px-4'>
				<Outlet />
			</div>
		</div>
	);
}

function DashboardLayoutStyles() {
	return (
		<style>
			{`
			.dashboard-layout {
				display: grid;
				grid-template-columns: 17% 83%;
				grid-template-rows: 10vh 90vh;
				overflow:hidden;

				aside {
					grid-column: 1 / 2;
					grid-row: 1 / 3;
				}

				header {
					grid-column: 2 / 3;
					grid-row: 1 / 2;
				}
					
				.outlet {
					grid-column: 2 / 3;
					grid-row: 2 / 3;

				}
			}
    `}
		</style>
	);
}
