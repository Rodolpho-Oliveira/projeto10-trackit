import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "../globalStyles"
import Login from "../Login"
import Signup from "../SignUp"
import Today from "../Today"
import Habits from "../Habits"
import History from "../History"
import TokenContext from "../../context/TokenContext"
import { useState } from "react"

export default function App(){
    const [data, setData] = useState()
    const [percent, setPercent] = useState([])
    const [confirmed, setConfirmed] = useState(0)
    return(
        <TokenContext.Provider value={{data, setData, percent, setPercent, confirmed, setConfirmed}}>
            <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/cadastro" element={<Signup/>} />
                    <Route path="/hoje" element={<Today/>} />
                    <Route path="/habitos" element={<Habits/>} />
                    <Route path="/historico" element={<History/>} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}