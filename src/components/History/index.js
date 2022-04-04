import Footer from "../Footer"
import Header from "../Header"
import styled from "styled-components"
export default function History(){
    return(
    <>
        <Header/>
        <Text>
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Text>
        <Footer/>
    </>
    )
}

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    padding-top: 90px;
    padding-left: 15px;
    padding-right: 15px;

    p{
        color: #666666;
    }

    h2{
        color: #126BA5;
        font-size: 23px;
    }
`