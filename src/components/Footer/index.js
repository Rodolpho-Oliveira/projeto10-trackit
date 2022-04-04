import styled from "styled-components"

import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <FooterDiv>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to="/hoje"><Circle>Hoje</Circle></Link>
            <p>Histórico</p>
        </FooterDiv>
    )
}

const Circle = styled.div`
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 20px;
    position: fixed;
    bottom: 0;
    left: 40vw;
`

const FooterDiv = styled.div`
    background-color: #ffffff;
    width: 100vw;
    height: 70px;
    bottom: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: visible; 

    p{
        margin-left: 10px;
        margin-right: 10px;
        color: #52B6FF;
    }
`