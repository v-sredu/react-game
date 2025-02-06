import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage"
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import "./css/reset.css";
import "./css/App.css";
function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="" element={<StartPage/>}/>
					<Route path="/game" element={<GamePage/>}/>
					<Route path="/end" element={<EndPage/>}/>
				</Routes>
			</BrowserRouter>
	);
}

export default App;
