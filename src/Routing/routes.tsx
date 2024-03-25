import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Servicecs";

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className="outlet-container">
				<Outlet />
			</div>
		</>
	);
};

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/services",
				element: <Services />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={routes} />;
}
