import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroPage from "./pages/CadastroPage";
import HabitosPage from "./pages/HabitosPage";
import HistoricoPage from "./pages/HistoricoPage";
import HojePage from "./pages/HojePage";
import LoginPage from "./pages/LoginPage";
import ImagemUsuario from "./contexts/Context";

function App() {

  const [imagemUsuario, setImagemUsuario] = useState("")

  return (
    <>
    <ImagemUsuario.Provider value={{imagemUsuario, setImagemUsuario}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/cadastro" element={<CadastroPage />}></Route>
          <Route path="/habitos" element={<HabitosPage />}></Route>
          <Route path="/hoje" element={<HojePage />}></Route>
          <Route path="/historico" element={<HistoricoPage />}></Route>
        </Routes>
      </BrowserRouter>
      </ImagemUsuario.Provider>
    </>
  );
}

export default App;
