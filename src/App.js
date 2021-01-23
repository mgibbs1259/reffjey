import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Music from "./components/pages/Music";
import Tour from "./components/pages/Tour";
import Merch from "./components/pages/Merch";
import SignUp from "./components/pages/SignUp";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/music" element={<Music />} />
					<Route path="/tour" element={<Tour />} />
					<Route path="/merch" element={<Merch />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
