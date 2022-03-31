import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../globalStyles"
import Login from "../Login"
import Signup from "../SignUp"
import Today from "../Today"
import Habits from "../Habits"
import TokenContext from "../../context/TokenContext"
import { useState } from "react"

export default function App(){
    const [data, setData] = useState()
    return(
        <TokenContext.Provider value={{data, setData}}>
            <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/cadastro" element={<Signup/>} />
                    <Route path="/hoje" element={<Today/>} />
                    <Route path="/habitos" element={<Habits/>} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}