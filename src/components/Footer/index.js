import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import TokenContext from "../../context/TokenContext";

export default function Footer(){
    const {percent, teste} = useContext(TokenContext)
    return(
        <FooterDiv>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to="/hoje"><Circle><div><CircularProgressbar text={"Hoje"} value={teste} maxValue={percent.length}></CircularProgressbar></div></Circle></Link>
            <Link to="/historico"> <p>Histórico</p> </Link>
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

    div{
        width: 90%;
    }

    .CircularProgressbar-path {
        stroke: #ffffff;
    }

    .CircularProgressbar-trail {
        stroke: transparent;
    }

    .CircularProgressbar-text {
        fill: #FFFFFF;
    }   
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