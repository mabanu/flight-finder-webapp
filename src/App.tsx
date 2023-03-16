import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./components/pages/HomePage";
import FlightPage from "./components/pages/FlightPage";
import RoutePage from "./components/pages/RoutePage";


function App() {

    return (
        <BrowserRouter>
            <>
                <NavBar />
            </>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/flights' element={<FlightPage />} />
                <Route path='/route' element={<RoutePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
