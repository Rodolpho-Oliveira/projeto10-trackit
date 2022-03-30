import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    const navigate = useNavigate()
    return (
        <LoginPage>
            <img src="../sources/Logo.png" alt="logo"></img>
            <form onSubmit={acessAccount}>
                <input onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="email" type="email"/>
                <input onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="senha" type="password"/>
                <BlueButton type="submit" value="Entrar"/>
            </form>
            <a href="/cadastro">Não tem uma conta? Cadastre-se!</a>
        </LoginPage>
    )
    function acessAccount(e){
        e.preventDefault()
        if(userLogin.email !== "" && userLogin.password !== ""){
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", userLogin)
            promise.then((response) =>{ 
                const token = response.data.token
                navigate("/hoje", {state: token})
        })
            promise.catch((error) => {
                console.log(error.toJSON())
              })
            
        }
    }
}


const LoginPage = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    }

    form input {
        margin-bottom: 6px;
        width: 90vw;
        height: 45px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
    }
`

const BlueButton = styled.input`
    background-color: #52B6FF;
    color: #ffffff;
    font-size: 21px;
`