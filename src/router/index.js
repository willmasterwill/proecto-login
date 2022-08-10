import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginView />} />
				
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
