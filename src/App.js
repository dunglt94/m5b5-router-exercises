import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/details" element={<EmployeeDetail/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
