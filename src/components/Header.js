import styled from "styled-components"
import { useContext } from "react"
import Context from "../contexts/Context"

export function Header() {
    const {imagemUsuario} = useContext(Context)
    return (
        <HeaderContainer data-test="header">
            <h1>TrackIt</h1>
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

    h1{
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
    }
`

const ImagemPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    object-fit: cover;
    background-color: #FFFFFF;
`