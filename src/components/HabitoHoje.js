import styled from "styled-components"
import { BiCheck } from "react-icons/bi"

export default function HabitoHoje({hab, marcarHabito, habitosMarcados}){

    return (
        <Habito id={hab.id} habitosMarcados={habitosMarcados} sequenciaAtual={hab.currentSequence} recorde={hab.highestSequence} data-test="today-habit-container">
            <h1 data-test="today-habit-name">{hab.name}</h1>
            <h3 data-test="today-habit-sequence">Sequência atual: <span>{hab.currentSequence} dias</span></h3>
            <h4 data-test="today-habit-record">Seu recorde: <span>{hab.highestSequence} dias</span></h4>
            <IonIcon id={hab.id} habitosMarcados={habitosMarcados} done={hab.done} data-test="today-habit-check-btn" src={BiCheck} onClick={() => marcarHabito(hab)} />
        </Habito>
    )
}

const Habito = styled.div`
    background-color: #FFFFFF;
    height: 94px;
    margin-bottom:10px;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding: 15px;
    position: relative;
    h1 {
        margin-bottom: 8px;
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:20px;
        font-weight: 400;
        line-height:25px;
        }
    h3{
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:13px;
        font-weight: 400;
        line-height:16px;
        span{
            color:${({id, habitosMarcados}) => (habitosMarcados.includes(id)) ? "#8FC549" : "#666666"};
        }    
    }
    h4{
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:13px;
        font-weight: 400;
        line-height:16px;
        span{
            color:${({sequenciaAtual, recorde}) => (sequenciaAtual === recorde && sequenciaAtual !== 0) ? "#8FC549" : "#666666"};
        }
    }
`
const IonIcon = styled(BiCheck)`
      width:69px;
        height: 69px;
        position: absolute;
        right: 13px;
        top: 13px;
        cursor:pointer;
        background-color: ${({id, habitosMarcados, done}) => (habitosMarcados.includes(id) || done === true) ? "#8FC549" : "#EBEBEB"};
        border: solid 1px #E7E7E7;
        border-radius: 5px;
        color: #FFFFFF;
`