import styled from "styled-components"

export default function DiasSemana({day, i, diasHabito, selecionarDia, diaClicado}) {
    
    return (
        
            <BotaoDia
            diasHabito={diasHabito} 
            i={i}
            key={i}
            onClick={() => selecionarDia(i)}
            >
            {day}
            </BotaoDia>
    )
}

const BotaoDia = styled.button`
        background-color: ${({diasHabito, i}) => diasHabito.includes(i) ? "#CFCFCF" : "#FFFFFF" }; 
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
`