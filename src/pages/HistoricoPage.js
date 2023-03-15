import styled from "styled-components"
import logo from "../assets/logo-simplificada.svg"
import { Link } from "react-router-dom"

export default function HistoricoPage() {
    return (
        <>
            <ContainerHabitos>
                <Header>
                    <Logo src={logo} alt="logo" />
                    <ImagemPerfil src="http://www.pintarcolorear.org/wp-content/uploads/2015/09/bob-esponja.png" alt="imagem-perfil" />
                </Header>
                <Conteudo>
                    <TopoConteudo>
                        <h1>Histórico</h1>
                    </TopoConteudo>
                    <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
                </Conteudo>
                <Footer>
                    <Link to="/habitos">
                        Hábitos
                    </Link>
                    <Link to="/hoje">
                        <Circulo>Hoje</Circulo>
                    </Link>
                    <Link to="/historico">
                        Histórico
                    </Link>

                </Footer>
            </ContainerHabitos>
        </>
    )
}

const Conteudo = styled.div`
margin-top:95px;
padding: 0 18px;
margin-bottom: 120px;
overflow-y: hidden;
overflow-y: scroll;
    h1{
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight:400;
        line-height:22px;
        
    }
`
const TopoConteudo = styled.div`
    height:35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 25px;

    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        line-height:29px;
    }
`

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
`

const Footer = styled.div`
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

const Header = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #126BA5;
    width: 375px;
    height: 70px;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
`
const Logo = styled.img`
    width: 97px;
    height: 49px;
`

const ImagemPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    object-fit: cover;
    background-color: #FFFFFF;
`

const ContainerHabitos = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #F2F2F2;
        width: 375px;
        height: 100vh;
        margin-right: auto;
        margin-left: auto; 
`