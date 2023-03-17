import styled from "styled-components"
import { Link } from "react-router-dom"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "../contexts/Context";

export function Footer() {
    const {imagemUsuario, setImagemUsuario, token, setToken, porcentagem, setPorcentagem} = useContext(Context);
    return (
        <FooterContainer data-test="menu">
            <Link data-test="habit-link" to="/habitos">
                Hábitos
            </Link>
            
            <Link data-test="today-link" to="/hoje">
                <Circulo>
                <div>    
                <CircularProgressbar 
                value={porcentagem} 
                text="Hoje"
                styles={buildStyles({
                    pathColor: "#FFFFFF",
                    textColor: "#FFFFFF",
                    trailColor: "#52B6FF",
                    textSize: '23px'
                })}
                />
                </div>
                </Circulo>
                
            </Link>
            <Link data-test="history-link" to="/historico">
                Histórico
            </Link>

        </FooterContainer>
    )
}


const Circulo = styled.div`
    background: #52B6FF;
    border-radius: 50%;
    width: 91px;
    height: 91px;
    margin-bottom:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    display:flex;
    div{
        width: 79px;
        height:79px;
    }
`

const FooterContainer = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    position: fixed;
    bottom:0px;
    a{
        color:#52B6FF;
            font-family: 'Lexend Deca', sans-serif;
            font-size:18px;
            font-weight:400;
            line-height:22px;
            align-self: center;
            text-decoration:none;
    }
`