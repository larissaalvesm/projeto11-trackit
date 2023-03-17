import styled from "styled-components"
import { BiCheck } from "react-icons/bi"

export default function HabitoHoje({hab}){
    return (
        <Habito data-test="today-habit-container">
            <h1 data-test="today-habit-name">{hab.name}</h1>
            <h3 data-test="today-habit-sequence">Sequência atual: {hab.currentSequence} dias</h3>
            <h3 data-test="today-habit-record">Seu recorde: {hab.highestSequence} dias</h3>
            <IonIcon data-test="today-habit-check-btn" src={BiCheck} />
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
    }
`
const IonIcon = styled(BiCheck)`
      width:69px;
        height: 69px;
        position: absolute;
        right: 13px;
        top: 13px;
        cursor:pointer;
        background-color: #EBEBEB; //#8FC549
        border: solid 1px #E7E7E7;
        border-radius: 5px;
        color: #FFFFFF;
`