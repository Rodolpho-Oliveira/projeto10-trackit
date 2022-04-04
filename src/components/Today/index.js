import Header from "../Header"
import Footer from "../Footer"
import axios from "axios"
import styled from "styled-components"
import dayjs from "dayjs"
import { useState, useContext, useEffect  } from "react"
import TokenContext from "../../context/TokenContext"


export default function Today(){
    const now = dayjs()
    const week = ["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const [todayCard, setTodayCard] = useState([])
    const {data, setPercent, setConfirmed, confirmed} = useContext(TokenContext)
    setPercent(todayCard)
    useEffect(() => {
        let b = 0
        todayCard.forEach((a) => {if(a.done === true){
            b += 1
       }
       setConfirmed(b)
    })
    })
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    useEffect(() => promise.then(cards => setTodayCard(cards.data)), [])
    return(
        <>
        <TodayDiv>
            <Header/>
            <Time>
               <Date>{week[now.day()] }, {now.$D < 10 ? "0" + now.$D : now.$D}/{now.$M + 1 < 10 ? "0" + (now.$M + 1) : now.$M}</Date>
                {confirmed > 0 ? <GreenPercent>{Math.round((confirmed / todayCard.length) * 100 )}% dos hábitos concluídos</GreenPercent> :<Percent>Nenhum hábito concluído ainda</Percent> }
            </Time>
            <CardsList>
                {todayCard.map((info) => <TodaysCards>
                    <Content>
                        <div>
                            <h2>{info.name}</h2>
                        </div>
                        <div>
                            <div>
                                <p>Sequência atual: </p><p className={info.done ?
                                "greenP" : ""}>{info.currentSequence} {info.highestSequence === 1 ? "dia" : "dias"}</p>
                            </div>
                            <div>
                                <p>Seu recorde:</p> <p className={!info.done ? "" : info.currentSequence === info. highestSequence ? "greenP" : ""}>  {info.highestSequence} {info.highestSequence === 1 ? "dia" : "dias"}</p>
                            </div>
                        </div>
                    </Content>
                    <div className={info.done === true ? "green" : "white"} onClick={() =>{ if(info.done !== true){
                            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/check`, "",config)
                            promise.then(() => {
                                    info = {...info, done: true}                                  
                                    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                                    promise.then(cards => setTodayCard(cards.data))
                            })
                        }
                        else{
                            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/uncheck`, "",config)
                            promise.then(() => {
                                info = {...info, done: false}
                                const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                                promise.then(cards => setTodayCard(cards.data))
                            })
                        }
                            }}>✔</div> 
                </TodaysCards>)}
            </CardsList>
        </TodayDiv>
        <Footer />
        </>
    )
}



const TodayDiv = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw; 

    .green{
        background-color: #8FC549;
        color: #ffffff;
        width: 90px;
        height: 90px;
        margin-right: 10px;
        font-size: 90px;
        text-align: center;
        border-radius: 5px;
    }
    .white{
        background-color: #EBEBEB;
        color: #ffffff;
        width: 90px;
        height: 90px;
        margin-right: 10px;
        font-size: 90px;
        text-align: center;
        border-radius: 5px;
    }
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

const TodaysCards = styled.div`
    width: 90%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 15px;
    
    

    h2{
        font-size: 20px;
        margin-bottom: 8px;
    }

    p{
        font-size:13px;
    }
`


const CardsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
    padding-bottom: 120px;
    
`

const Content = styled.div`

    
    margin-left: 10px;
    
    div{
        display: flex;
        flex-direction: column;
    }

    div div{
        display: flex;
        flex-direction: row;
    }

    .greenP{
        color: green;
    }
    

`