import styled from "styled-components"
import { Header } from "../components/Header"
import { BiCheck } from "react-icons/bi"
import { Footer } from "../components/Footer"

export default function HojePage() {
    return (
        <>
            <ContainerHabitos>
                <Header />
                <Conteudo>
                    <TopoConteudo>
                        <h1>Segunda, 17/05</h1>
                        <h2>Nenhum hábito concluído ainda</h2>
                    </TopoConteudo>
                    <Habito>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h3>Sequência atual: 3 dias</h3>
                        <h3>Seu recorde: 5 dias</h3>
                        <IonIcon src={BiCheck} />
                    </Habito>

                </Conteudo>
                <Footer />
            </ContainerHabitos>
        </>
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
        color:#BABABA; // #8FC549
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