import styled from "styled-components"
import logo from "../assets/logo-simplificada.svg"
import { useContext } from "react"
import Context from "../contexts/Context"

export function Header() {
    const {imagemUsuario} = useContext(Context)
    return (
        <HeaderContainer data-test="header">
            <Logo src={logo} alt="logo" />
                <ImagemPerfil src={imagemUsuario} alt="imagem-perfil" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
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