import GlobalStyle from "../GlobalStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import TelaCadastro from "./TelaCadastro"
import TelaInicial from "./TelaInicial";
import TelaUsuario from "./TelaUsuario";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";
import UsuarioContext from "./context/UsuarioContext";

function App(){
    const [token, setToken] = useState({})
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    return (
        <>
        <GlobalStyle />
        <UsuarioContext.Provider  value={{token, setToken, name, setName, email, setEmail}} >
        <BrowserRouter>
        <Routes>
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/" element={<TelaInicial />} />
            <Route path="/usuario" element={<TelaUsuario />} />
            <Route path="/entrada" element={<TelaEntrada />} />
            <Route path="/saida" element={<TelaSaida />} />
        </Routes>
        </BrowserRouter>
        </UsuarioContext.Provider>
        </>
    )
}

export default App;
