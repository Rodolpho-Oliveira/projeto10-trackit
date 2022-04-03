import Header from "../Header"
import Footer from "../Footer"
import styled from "styled-components"
import axios from "axios"
import { useContext, useState } from "react"
import TokenContext from "../../context/TokenContext"

export default function Habits(){
    const [createHabit, setCreateHabit] = useState(false)
    const [habits, setHabits] = useState({
        name: "",
        days: []
    })
    const {data} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    return(
        <Habit>
            <Header/>
            <MyHabits>
                <p>Meus hábitos</p>
                <button onClick={() => setCreateHabit(!createHabit)}>+</button>
            </MyHabits>
            {createHabit ? <form onSubmit={habits.name !== "" && habits.days !== [] ?(e) => { e.preventDefault() 
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habits, config)
            setCreateHabit(!createHabit)} : null }>
                <Text onChange={(e) => setHabits({...habits, name: e.target.value})} type="text"/>
                <Days>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_1" name="check_1" value="0"/>
                    <label for="check_1">D</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_2" name="check_2" value="1"/>
                    <label for="check_2">S</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_3" name="check_3" value="2"/>
                    <label for="check_3">T</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_4" name="check_4" value="3"/>
                    <label for="check_4">Q</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_5" name="check_5" value="4"/>
                    <label for="check_5">Q</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_6" name="check_6" value="5"/>
                    <label for="check_6">S</label>
                    <input onClick={(e) => habits.days.includes(e.target.value) ? setHabits({...habits, days: habits.days.filter(day => day !== e.target.value)}): setHabits({...habits, days: [...habits.days, e.target.value]})} type="checkbox" id="check_7" name="check_7" value="6"/>
                    <label for="check_7">S</label>
                </Days>
                <Buttons>
                    <button>Cancelar</button>
                    <Save type="submit"></Save>
                </Buttons>
            </form>: null}
            <HabitsSquare>
                {habits.days.length === 0 ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" : null}
            </HabitsSquare>
            {console.log(habits)}
            <Footer/>
        </Habit>
    )
}

const Habit = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
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

    button{
        background-color: #52B6FF;
        border-radius: 4px;
        color: #FFFFFF;
    }
`

const HabitsSquare = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    width: 80%;
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