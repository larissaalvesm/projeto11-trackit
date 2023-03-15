import styled from "styled-components"
import lixeira from "../assets/trash-outline.svg"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function HabitosPage() {
    return (
        <>
            <ContainerHabitos>
                <Header />
                <Conteudo>
                    <TopoConteudo>
                        <h1>Meus hábitos</h1>
                        <button>+</button>
                    </TopoConteudo>
                    <NovoHabito>
                        <input required type="text" placeholder="nome do hábito" />
                        <DiasSemana>
                            <button>D</button>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
                        </DiasSemana>
                        <Botoes>
                            <Cancelar>Cancelar</Cancelar>
                            <Salvar>Salvar</Salvar>
                        </Botoes>
                    </NovoHabito>
                    <Habito>
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
                    </Habito>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
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
    display:flex;
    flex-direction: column;
    padding: 18px;
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
const Habito = styled.div`
    background-color: #FFFFFF;
    height: 91px;
    margin-bottom:10px;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding: 15px;
    position: relative;
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

const Botoes = styled.div`
    display:flex;
    justify-content: flex-end;
`

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