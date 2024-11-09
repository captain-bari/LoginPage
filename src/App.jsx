import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./Components/RegisterForm";
import SignIn from "./Components/SignInApp/SignIn";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/RegisterForm" element={<RegisterForm />} />
                <Route path="/" element={<SignIn />} />
            </Routes>
        </Router>
    );
}
export default App;

