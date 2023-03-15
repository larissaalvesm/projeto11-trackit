import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'

export default function CadastroPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [textoBotao, setTextoBotao] = useState("Cadastrar");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function cadastrar(e) {

        e.preventDefault();
        setDisabled(true);
        setTextoBotao("");
        setCarregando(true);

        const obj = {
            email,
            name,
            image,
            password
        }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", obj);

        request.then(() => navigate("/"));

        request.catch(err => {
            alert(err.response.data.message);
            setDisabled(false);
            setTextoBotao("Cadastrar");
            setCarregando(false);
        });
    }



    return (
        <>
            <ContainerCadastro>
                <img src={logo} alt="logo" />
                <FormCadastro disabled={disabled} onSubmit={cadastrar}>
                    <input disabled={disabled} required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disabled} required type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <input disabled={disabled} required type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                    <input disabled={disabled} required type="url" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
                    <button disabled={disabled} type="submit">
                        <div><ThreeDots
                            height="10"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={carregando}
                        /></div>
                        {textoBotao}</button>
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
            cursor:pointer;
            opacity: ${({ disabled }) => disabled === true ? "70%" : "100%"}
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
        div {
        display: flex;
        justify-content: center;
        align-items: center;
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