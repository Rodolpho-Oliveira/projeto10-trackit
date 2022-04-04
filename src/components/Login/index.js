import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import TokenContext from "../../context/TokenContext"
import { ThreeDots } from "react-loader-spinner"

export default function Login(){
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {setData} = useContext(TokenContext)
    return (
        <LoginPage>
            <img src="../sources/Logo.png" alt="logo"></img>
            <form onSubmit={acessAccount}>
                <input onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="email" type="email"  disabled={loading ? true : false}/>
                <input onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="senha" type="password"  disabled={loading ? true : false}/>
                <div>{loading ? 
                     <Loading><ThreeDots color="#ffffff"></ThreeDots></Loading>
                    :<BlueButton type="submit" value="Entrar"/>}
                </div>
            </form>
            <a href="/cadastro">Não tem uma conta? Cadastre-se!</a>
        </LoginPage>
    )
    function acessAccount(e){
        setLoading(true)
        e.preventDefault()
        if(userLogin.email !== "" && userLogin.password !== ""){
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", userLogin)
            promise.then((response) =>{ 
                const data = response.data
                setData(data)
                navigate("/hoje")
        })
            promise.catch(() => {
                setLoading(false)
              alert("Revise as informações")})
            
        }
        else{
            setLoading(false)
            alert("Revise as informações")
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
    background-color: #FFFFFF;
    overflow: hidden;

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
        height: 45px;
`

const Loading = styled.div`
    background-color: #52B6FF;
    color: #ffffff;
    font-size: 21px;
    height: 44px;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-bottom: 5px;
    opacity: 0.7;
`