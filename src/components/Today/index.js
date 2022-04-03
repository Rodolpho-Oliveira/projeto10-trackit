import Header from "../Header"
import Footer from "../Footer"
import axios from "axios"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import dayjs from "dayjs"
import { useState } from "react"
import { useContext } from "react"
import TokenContext from "../../context/TokenContext"


export default function Today(){
    const now = dayjs()
    const week = ["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const [completed, setCompleted] = useState([])
    const {data} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    return(
        <TodayDiv>
            <Header/>
            <Time>
               <Date>{week[now.day()]}, {now.$D}/{now.$M + 1}</Date>
                {completed.length > 0 ? <GreenPercent>67% dos hábitos concluídos</GreenPercent> :<Percent>Nenhum hábito concluído ainda</Percent> }
            </Time>
            <Footer />
        </TodayDiv>
    )
}


const TodayDiv = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw; 
`

const Time = styled.div`
    padding-left: 17px; 
    padding-top: 13vh;
`

const Date = styled.p`
    font-size: 23px;
    color: #126BA5;
`

const Percent = styled.p`
    font-size: 17px;
    color: #BABABA;
`

const GreenPercent = styled.p`
    font-size: 17px;
    color:#8FC549;
`