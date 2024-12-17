import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import { Fragment } from "react/jsx-runtime";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import LoanPage from "./pages/LoanPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
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
