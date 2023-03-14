import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import { Link } from "react-router-dom"

export default function CadastroPage() {
    function cadastrar() {
        return
    }
    return (
        <>
            <ContainerCadastro>
                <img src={logo} alt="logo" />
                <FormCadastro onSubmit={cadastrar}>
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="senha" />
                    <input required type="text" placeholder="nome" />
                    <input required type="url" placeholder="foto" />
                    <button type="submit">Cadastrar</button>
                </FormCadastro>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </ContainerCadastro>
        </>
    )
}

const FormCadastro = styled.form`
        width: 303px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
        button {
            width: 100%;
            height: 45px;
            background-color: #52B6FF;
            color:#FFFFFF;
            font-family: 'Lexend Deca', sans-serif;
            font-size:21px;
            font-weight:400;
            line-height:26px;
            border: none;
            border-radius: 5px;
            margin-bottom: 25px;
        }
        input {
            margin-bottom: 6px;
            width: 100%;
            height: 45px;
            border: solid 1px #D4D4D4;
            border-radius: 5px;
            padding: 0 11px;
            &::placeholder{
            color:#DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
            font-size:20px;
            line-height:25px;
            }
        }
    `

const ContainerCadastro = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #FFFFFF;
        width: 375px;
        height: 100vh;
        margin-right: auto;
        margin-left: auto;
    
        img{
            width: 180px;
            height: 179px;
            margin-top:68px;
            margin-bottom:33px;
        }
    
        a{
            color:#52B6FF;
            font-family: 'Lexend Deca', sans-serif;
            font-size:14px;
            font-weight:400;
            line-height:18px;
            align-self: center;
            text-decoration-style:solid;
            text-decoration-color: #52B6FF;
        }
    `