import styled from "styled-components"
import lixeira from "../assets/trash-outline.svg";

export default function Habito() {
    return (
        <HabitoContainer>
                        <p>Ler 1 capítulo de livro</p>
                        <img src={lixeira} alt="apagar" />
                        <DiasSemana>
                            <button>D</button>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
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
    display: none;
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
    button{
        background-color: #FFFFFF; //#CFCFCF
        margin-bottom: 30px;
        margin-right: 4px;
        width: 30px;
        height: 30px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        color:#DBDBDB; //#FFFFFF
        font-family: 'Lexend Deca', sans-serif;
        font-size:20px;
        line-height:25px;
        text-align: center;
        cursor:pointer;
    }
`