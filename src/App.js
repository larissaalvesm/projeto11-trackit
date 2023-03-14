import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroPage from "./pages/CadastroPage";
import HabitosPage from "./pages/HabitosPage";
import HistoricoPage from "./pages/HistoricoPage";
import HojePage from "./pages/HojePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/cadastro" element={<CadastroPage />}></Route>
          <Route path="/habitos" element={<HabitosPage />}></Route>
          <Route path="/hoje" element={<HojePage />}></Route>
          <Route path="/historico" element={<HistoricoPage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
