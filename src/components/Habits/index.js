import Header from "../Header"
import Footer from "../Footer"
import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"
import TokenContext from "../../context/TokenContext"

export default function Habits(){
    const {data} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    promise.then(response => console.log(response))
    return(
        <Habit>
            <Header/>
            <MyHabits>
                <p>Meus hábitos</p>
                <button>+</button>
            </MyHabits>
            <Footer/>
        </Habit>
    )
}


const Habit = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw;
`

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 90px;
    padding-left: 15px;
    padding-right: 15px;
`