import styled from "styled-components"
import lixeira from "../assets/trash-outline.svg";
import days from "../days";
import DiasHabito from "./DiasHabito";
import axios from "axios";
import { useContext } from "react";
import Context from "../contexts/Context";

export default function Habito({hab, setRecarregarPagina, recarregarPagina}) {
    const {imagemUsuario, setImagemUsuario, token, setToken} = useContext(Context);
    function deletarHabito(id){
        if(window.confirm("Deseja deletar esse hábito?")){
            const request = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                { headers: { Authorization: `Bearer ${token}` } } )

                request.then(() => {
                    const aum = recarregarPagina + 1;
                    setRecarregarPagina(aum);
                });
        
                request.catch(err => {
                    console.log(err.response.data.message)
                }
                );
        }
    }

    return (
        <HabitoContainer data-test="habit-container">
                        <p data-test="habit-name">{hab.name}</p>
                        <img data-test="habit-delete-btn" src={lixeira} alt="apagar" onClick={() => deletarHabito(hab.id)} />
                        <DiasSemana>
                        {days.map((day, i) => <DiasHabito key={i} day={day} i={i} hab={hab}/>)}
                        </DiasSemana>
                    </HabitoContainer>
    )
}

const HabitoContainer = styled.div`
    background-color: #FFFFFF;
    height: 91px;
    margin-bottom:10px;
    border-radius: 5px;
    padding: 15px;
    position: relative;
    width:100%;
    p {
        margin-bottom: 8px;
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:20px;
        line-height:25px;
        }
    img{
        width:18px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor:pointer;
    }
`

const DiasSemana = styled.div`
    display:flex;
    justify-content: flex-start;
`