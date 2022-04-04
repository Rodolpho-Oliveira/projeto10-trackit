import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"

export default function SignUp(){
    const [userSignUp, setUserSignUp] = useState({email: "", name: "", image: "", password: ""})
    const [loading, setLoading] = useState()
    const navigate = useNavigate()
    return(
        <SingUpPage>
            <img src="../sources/Logo.png" alt="logo"></img>
            <form onSubmit={createAccount}>
                <input onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})} placeholder="email" type="email"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})} placeholder="senha" type="password"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, name: e.target.value})} placeholder="nome" type="text"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, image: e.target.value})} placeholder="foto" type="url" alt="userImage"/>
                {loading ? <Loading><ThreeDots color="#ffffff"></ThreeDots></Loading>
                :<BlueButton type="submit" value="Cadastrar"/>}
            </form>
            <a href="/">Já tem uma conta? Faça login!</a>
        </SingUpPage>
    )

    function createAccount(e){
        e.preventDefault()
        setLoading(true)
        if(userSignUp.email !== "" && userSignUp.password !== "" && userSignUp.name !== "" && userSignUp.image !== ""){
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userSignUp)
            promise.then(navigate("/"))
        }
        else{
            alert("Revise as informações")
            setLoading(false)
        }
    }
}


const SingUpPage = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #FFFFFF;
    

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