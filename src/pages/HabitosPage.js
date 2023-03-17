import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import Context from "../contexts/Context";
import Habito from "../components/Habito";
import DiasSemana from "../components/DiasSemana";
import days from "../days";
import { ThreeDots } from 'react-loader-spinner'

export default function HabitosPage() {
    const {imagemUsuario, setImagemUsuario, token, setToken} = useContext(Context);
    const [habitos, setHabitos] = useState([]);
    const [novoHabito, setNovoHabito] = useState("none");
    const [nomeHabito, setNomeHabito] = useState("");
    const [diasHabito, setDiasHabito] = useState([]);
    const [diaClicado, setDiaClicado] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [textBotao, setTextoBotao] = useState("Salvar");
    const [carregando, setCarregando] = useState(false);
    const [recarregarPagina, setRecarregarPagina] = useState(0);

    function selecionarDia(dia){

        if(!diasHabito.includes(dia)){
        const novosDiasHabito = [...diasHabito, dia];
        setDiasHabito(novosDiasHabito);
        } else{
            const desmarcarDia = diasHabito.filter((d => d !== dia));
            setDiasHabito(desmarcarDia);
        }
        setDiaClicado(dia);       
    }

    useEffect(() => {

    const  request = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { headers: { Authorization: `Bearer ${token}` } }
        );

    request.then(response => {
        setHabitos(response.data);
    })

    request.catch(err => console.log(err.response.data.message))

    }, [recarregarPagina]);



    function adicionarNovoHabito() {
        setNovoHabito("");
    }

    function cancelarNovoHabito(){
        setNovoHabito("none");
    }

    function criarHabito(){
        setDisabled(true);
        setTextoBotao("");
        setCarregando(true);
        const body = {
            name: nomeHabito,
            days: diasHabito
        }
        const request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
            body, 
            { headers: { Authorization: `Bearer ${token}` } });

        request.then(() => {
            setNomeHabito("");
            setDiasHabito([]);
            setDisabled(false);
            setTextoBotao("Salvar");
            setCarregando(false);
            setNovoHabito("none");

            const aum = recarregarPagina + 1;
            setRecarregarPagina(aum);
        })

        request.catch(err => {
            alert(err.response.data.message)
            setDisabled(false);
            setTextoBotao("Salvar");
            setCarregando(false);
        }
        );

    }

    return (
        <>
            <ContainerHabitos>
                <Header />
                <Conteudo habitos={habitos}>
                    <TopoConteudo>
                        <h1>Meus hábitos</h1>
                        <button data-test="habit-create-btn" onClick={adicionarNovoHabito}>+</button>
                    </TopoConteudo>
                    <NovoHabito data-test="habit-create-container" novoHabito={novoHabito} >
                        <input data-test="habit-name-input" required disabled={disabled} type="text" placeholder="nome do hábito" value={nomeHabito} onChange={e => setNomeHabito(e.target.value)}/>
                        <DiasSemanaContainer>
                        {days.map((day, i) => <DiasSemana key={i} day={day} i={i} diasHabito={diasHabito} selecionarDia={selecionarDia} disabled={disabled} />)}
                        </DiasSemanaContainer>
                        <Botoes>
                            <Cancelar data-test="habit-create-cancel-btn" disabled={disabled} onClick={cancelarNovoHabito}>Cancelar</Cancelar>
                            <Salvar data-test="habit-create-save-btn" disabled={disabled} onClick={criarHabito}>
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
                                </Salvar>
                        </Botoes>
                    </NovoHabito>
                    
                        {habitos.map(hab => <Habito key={hab.id} hab={hab} setRecarregarPagina={setRecarregarPagina} recarregarPagina={recarregarPagina}/>)}
                    
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                </Conteudo>
                <Footer />
            </ContainerHabitos>
        </>
    )
}


const Cancelar = styled.button`
    border:none;
    color:#52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size:16px;
    line-height:20px;
    align-self: center;
    background-color: #FFFFFF;
    margin-right: 13px;
    cursor: pointer;
`
const Salvar = styled.button`
    width: 84px;
    height: 35px;
    border:none;
    color:#FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size:16px;
    line-height:20px;
    align-self: center;
    background-color: #52B6FF;
    border-radius: 5px;
    cursor: pointer;
`

const NovoHabito = styled.div`
    background-color: #FFFFFF;
    height: 180px;
    margin-bottom:29px;
    border-radius: 5px;
    padding: 18px;
    display: ${({novoHabito}) => novoHabito};
    input {
            margin-bottom: 8px;
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
const DiasSemanaContainer = styled.div`
    display:flex;
    justify-content: flex-start;
`

const Botoes = styled.div`
    display:flex;
    justify-content: flex-end;
`

const Conteudo = styled.div`
margin-top:95px;
padding: 0 18px;
width: 375px;
margin-bottom: 120px;
overflow-y: hidden;
overflow-y: scroll;
    h2{
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight:400;
        line-height:22px;
        display: ${({habitos}) => (habitos.length === 0) ? "" : "none"};
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
    button{
        color: #FFFFFF;
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        cursor:pointer;
        border-radius: 4.5px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size:27px;
        line-height:33px;
    }
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