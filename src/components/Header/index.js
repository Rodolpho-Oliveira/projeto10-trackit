import styled from "styled-components"
import { useContext } from "react"
import TokenContext from "../../context/TokenContext"
export default function Header(){
    const {data} = useContext(TokenContext)
    return (
            <HeaderDiv>
                <LogoImg src="../sources/mini-logo.png" alt="mini-logo"/>
                <ProfileImg src={data.image} alt="profile"/>
            </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background-color: darkblue;
    position: fixed;
    top: 0;
`

const LogoImg = styled.img`
    height: 60%;
    margin-left: 18px;
`

const ProfileImg = styled.img`
    height: 51px;
    border-radius: 98.5px;
    width: 51px;
    margin-right: 18px;
`