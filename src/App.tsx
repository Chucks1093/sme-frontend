import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import { Fragment } from "react/jsx-runtime";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import LoanPage from "./pages/LoanPage";
import Login from "./pages/Login";
import AdminLayout from "./pages/AdminLayout";
import LoanRequest from "./pages/LoanRequest";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <LoanRequest />,
			},
		],
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/loan",
		element: <LoanPage />,
	},
]);

function App() {
	return (
		<Fragment>
			<Toaster />
			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
