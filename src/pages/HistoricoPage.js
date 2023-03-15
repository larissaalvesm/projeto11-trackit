import styled from "styled-components"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function HistoricoPage() {
    return (
        <>
            <ContainerHabitos>
                <Header />
                <Conteudo>
                    <TopoConteudo>
                        <h1>Histórico</h1>
                    </TopoConteudo>
                    <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
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
    h1{
        color:#666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight:400;
        line-height:22px;
        
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