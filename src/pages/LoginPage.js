import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react"
import Context from "../contexts/Context"
import { useState } from "react"


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [textBotao, setTextoBotao] = useState("Entrar");
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();
    const {imagemUsuario, setImagemUsuario, token, setToken} = useContext(Context);

    function fazerLogin(e) {
        e.preventDefault();
        setDisabled(true);
        setTextoBotao("");
        setCarregando(true);

        const obj = {
            email,
            password
        }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", obj);

        request.then(response => {
            setToken(response.data.token);
            setImagemUsuario(response.data.image);
            navigate("/hoje");
        });

        request.catch(err => {
            alert(err.response.data.message)
            setDisabled(false);
            setTextoBotao("Entrar");
            setCarregando(false);
        }
        );
    }
    return (
        <>
            <ContainerLogin>
                <img src={logo} alt="logo" />
                <FormLogin disabled={disabled} onSubmit={fazerLogin}>
                    <input data-test="email-input" disabled={disabled} required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input data-test="password-input" disabled={disabled} required type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button data-test="login-btn" disabled={disabled} type="submit">
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
                        {textBotao}
                    </button>
                </FormLogin>
                <Link to="/cadastro" data-test="signup-link">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </ContainerLogin>
        </>
    )
}


const FormLogin = styled.form`
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

const ContainerLogin = styled.div`
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