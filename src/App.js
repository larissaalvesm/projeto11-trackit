import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroPage from "./pages/CadastroPage";
import HabitosPage from "./pages/HabitosPage";
import HistoricoPage from "./pages/HistoricoPage";
import HojePage from "./pages/HojePage";
import LoginPage from "./pages/LoginPage";
import Context from "./contexts/Context";

function App() {

  const [imagemUsuario, setImagemUsuario] = useState("")
  const [token, setToken] = useState("");
  const [porcentagem, setPorcentagem] = useState(0);

  return (
    <>
    <Context.Provider value={{imagemUsuario, setImagemUsuario, token, setToken, porcentagem, setPorcentagem}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/cadastro" element={<CadastroPage />}></Route>
          <Route path="/habitos" element={<HabitosPage />}></Route>
          <Route path="/hoje" element={<HojePage />}></Route>
          <Route path="/historico" element={<HistoricoPage />}></Route>
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
