import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login"
import Signup from "../SignUp"
import Today from "../Today"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Signup/>}/>
                <Route path="/hoje" element={<Today/>}/>
            </Routes>
        </BrowserRouter>
    )
}