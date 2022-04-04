import Header from "../Header"
import Footer from "../Footer"
import styled from "styled-components"
import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { ThreeDots } from "react-loader-spinner"
import TokenContext from "../../context/TokenContext"


export default function Habits(){
    const [createHabit, setCreateHabit] = useState(false)
    const [habits, setHabits] = useState({
        name: "",
        days: []
    })
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false)
    const {data} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    useEffect(() => promise.then(habitData => setDatas(habitData.data)), [])
               
    return(
        <Habit>
            <Header/>
            <MyHabits>
                <p>Meus hábitos</p>
                <button onClick={() => setCreateHabit(!createHabit)}>+</button>
            </MyHabits>
            {createHabit ? 
            <form onSubmit={(habits.name !== "" && habits.days.length > 0) ? (e) => { e.preventDefault() 
            setLoading(true)
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habits, config)
            promise.then(response => {
                setLoading(false)
                setDatas([...datas, response.data])})
                setCreateHabit(!createHabit)
                setHabits({name: "", days: []})} 
                :   (e) => { e.preventDefault() 
                setLoading(false)
                alert("Preencha corretamente!")} }>
                <Text disabled={loading ? true : false}  onChange={(e) => setHabits({...habits, name: e.target.value})} type="text"/>
                <Days>
                    <input disabled={loading ? true : false} onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_1" name="check_1" value="0"/>
                    <label htmlFor="check_1">D</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_2" name="check_2" value="1"/>
                    <label htmlFor="check_2">S</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_3" name="check_3" value="2"/>
                    <label htmlFor="check_3">T</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_4" name="check_4" value="3"/>
                    <label htmlFor="check_4">Q</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_5" name="check_5" value="4"/>
                    <label htmlFor="check_5">Q</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_6" name="check_6" value="5"/>
                    <label htmlFor="check_6">S</label>
                    <input disabled={loading ? true : false}  onClick={(e) => habits.days.includes(e.target.value) ?
                         setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}) : setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_7" name="check_7" value="6"/>
                    <label htmlFor="check_7">S</label>
                </Days>
                <Buttons>
                    <button onClick={() =>{ setCreateHabit(!createHabit) 
                    setHabits({name: "",days: []})}}>Cancelar</button>
                    {loading ? 
                    <Loading><ThreeDots width="50px" color="#ffffff"></ThreeDots></Loading>
                    : <Save type="submit"></Save>}
                </Buttons>
            </form>: null}
            <HabitsSquare>
            {datas.length === 0 ? <NotCreated>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NotCreated>: null}
                {console.log(datas)}        
                {datas.map((data) => 
                <HabitsCreated>
                    <TitleCreated>
                        <h2>{data.name}</h2>
                        <div onClick={() => {axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${data.id}`, config)
                        .then(
                            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
                        .then(habitData => setDatas(habitData.data)))
                        .catch(axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
                        .then(habitData => setDatas(habitData.data)))
                        }}>
                            <ion-icon name="trash-outline"></ion-icon>
                        </div>
                    </TitleCreated>
                    <Days>
                        {data.days.includes(0) ? <Selected>D</Selected> : data.days.includes("0") ? <Selected>D</Selected> : <NotSelected>D</NotSelected>}
                        {data.days.includes(1) ? <Selected>S</Selected> : data.days.includes("1") ? <Selected>S</Selected> : <NotSelected>S</NotSelected>}
                        {data.days.includes(2) ? <Selected>T</Selected> : data.days.includes("2") ? <Selected>T</Selected> : <NotSelected>T</NotSelected>}
                        {data.days.includes(3) ? <Selected>Q</Selected> : data.days.includes("3") ? <Selected>Q</Selected> : <NotSelected>Q</NotSelected>}
                        {data.days.includes(4) ? <Selected>Q</Selected> : data.days.includes("4") ? <Selected>Q</Selected> : <NotSelected>Q</NotSelected>}
                        {data.days.includes(5) ? <Selected>S</Selected> : data.days.includes("5") ? <Selected>S</Selected> : <NotSelected>S</NotSelected>}
                        {data.days.includes(6) ? <Selected>S</Selected> : data.days.includes("6") ? <Selected>S</Selected> : <NotSelected>S</NotSelected>}
                    </Days>
                </HabitsCreated>)}
            </HabitsSquare>
            {console.log(datas)}
            <Footer/>
        </Habit>
    )
}

const Habit = styled.div`
    background-color: #E5E5E5;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        clear: both;
        background-color: white;
        height: 180px;
        width: 90%;
        display: flex;
        flex-direction: column;
        margin-top: 22px;
        border-radius: 5px;

        button{
            color: #52B6FF;
            background: none;
            border: none;
            font-size: 16px;
        }

    }

    input[type="checkbox"]:not(:checked), 
    input[type="checkbox"]:checked {
        display: none;
}

    input[type="checkbox"] + label {
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        border: 1px solid #D5D5D5;
        color: #DBDBDB;
        background-color: white;
        margin-bottom: 32px;
        margin-top: 8px;
        border-radius: 5px;
}

    input[type="checkbox"]:checked + label {
        border: 1px solid #CFCFCF;
        color: white;
        background-color: #CFCFCF;
        border-radius: 5px;
    }
`

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding-top: 90px;
    padding-left: 15px;
    padding-right: 15px;

    p{
        color: #126BA5;
    }

    button{
        background-color: #52B6FF;
        border-radius: 4px;
        color: #FFFFFF;
        border: 0px solid;
    }
`

const NotCreated = styled.p`
    color: #666666;
    font-size: 18px;
    margin-top: 20px;
`

const HabitsSquare = styled.div`
    margin-top: 20px;
    margin-bottom: 120px;
    width: 90%;
    color: #666666;
`

const Save = styled.input`
    border-radius: 4px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border: none;
    height: 34px;
    width: 84px;
    font-size: 16px;
`

const Text = styled.input`
    margin-top: 18px;
    width: 90%;
    height: 45px;
    font-size: 20px;
    color: #666666;
    align-self: center;
    border: 1px solid #D5D5D5;
`

const Days = styled.div`
    margin-left: 4%;
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    margin-bottom: 5%;
`

const Selected = styled.div`
    background-color: #CFCFCF;
    color: #FFFFFF;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border: 1px solid #D5D5D5;
`

const NotSelected = styled.div`
    background-color: #FFFFFF;
    color: #DBDBDB;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`

const HabitsCreated = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
    height: 91px;
    margin-top: 20px;
    border-radius: 5px;

    h2{
        font: 20px;
        margin-left: 4%;
    }

    div{
        display: flex;
        
    }
`

const TitleCreated = styled.div`
    display: flex;
    justify-content: space-between;

    ion-icon{
        margin-right: 10px;
    }
`

const Loading = styled.div`
    background-color: #52B6FF;
    color: #ffffff;
    height: 34px;
    width: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-bottom: 5px;
    opacity: 0.7;
`