import styled from "styled-components"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import HabitoHoje from "../components/HabitoHoje"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react";
import Context from "../contexts/Context";
import dayjs from "dayjs";

export default function HojePage() {
    const {imagemUsuario, setImagemUsuario, token, setToken} = useContext(Context);
    const [habitosHoje, setHabitosHoje] = useState([]);
    const [recarregarPagina, setRecarregarPagina] = useState(0);
    const [habitosMarcados, setHabitosMarcados] = useState([]);
    const [porcentagem, setPorcentagem] = useState(0);

    function marcarHabito(hab){

        const body = {};

        if(hab.done === false) {
            const  request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hab.id}/check`,
                body,
                { headers: { Authorization: `Bearer ${token}` } }
                );
    
            request.then(() => {
                setHabitosMarcados([...habitosMarcados, hab.id]);
                const aum = recarregarPagina + 1;
                setRecarregarPagina(aum);
                })
    
            request.catch(err => console.log(err.response.data.message))
    
            } else if (hab.done === true){
                const  request = axios.post(
                    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hab.id}/uncheck`,
                    body,
                    { headers: { Authorization: `Bearer ${token}` } }
                    );
        
                request.then(() => {
                    const desmarcarHabito = habitosMarcados.filter((h => h !== hab.id));
                    setHabitosMarcados(desmarcarHabito);
                    const aum = recarregarPagina + 1;
                    setRecarregarPagina(aum);
                })
        
                request.catch(err => console.log(err.response.data.message))
            }
        } 


    useEffect(() =>{

        const  request = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
            { headers: { Authorization: `Bearer ${token}` } }
            );
    
        request.then(response => {
            setHabitosHoje(response.data);
            const numeroHabitosHoje= response.data.length;
            const numeroHabitosConcluidos = (response.data.filter( h => h.done === true)).length;
            const porc = (numeroHabitosConcluidos/numeroHabitosHoje)*100;
            setPorcentagem(porc);
        })
    
        request.catch(err => console.log(err.response.data.message))


        }, [recarregarPagina])

        const dia = dayjs().locale('pt-br').day();

        function retornarDiaSemana(dia) {
            switch (dia) {
                case 1:
                    return "Segunda";
                case 2:
                    return "Terça";
                case 3:
                    return "Quarta";
                case 4:
                    return "Quinta";
                case 5:
                    return "Sexta";
                case 6:
                    return "Sábado";
                case 7:
                    return "Domingo";
            }
        }    

    return (
        <>
            <ContainerHabitos>
                <Header />
                <Conteudo>
                    <TopoConteudo porcentagem={porcentagem}>
                        <h1 data-test="today">{`${retornarDiaSemana(dia)}, ${dayjs().format('DD/MM')}`}</h1>
                        <h2 data-test="today-counter">{porcentagem === 0 ? "Nenhum hábito concluído ainda" : `${Math.ceil(porcentagem)}% dos hábitos concluídos`}</h2>
                    </TopoConteudo>
                   {habitosHoje.map(hab => <HabitoHoje key={hab.id} hab={hab} marcarHabito={marcarHabito} habitosMarcados={habitosMarcados}/>)} 
                </Conteudo>
                <Footer />
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
width: 100%;
`
const TopoConteudo = styled.div`
    margin-bottom: 25px;
    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight: 400; 
        line-height:29px;
    }
    h2{
        color:${({porcentagem}) => porcentagem === 0 ? "#BABABA": "#8FC549"};
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight: 400; 
        line-height:23px;
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