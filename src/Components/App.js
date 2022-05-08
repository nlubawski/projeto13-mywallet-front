import GlobalStyle from "../GlobalStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import TelaCadastro from "./TelaCadastro"
import TelaInicial from "./TelaInicial";
import TelaUsuario from "./TelaUsuario";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";


//import UsuarioContext from './contextos/UsuarioContext'
//<UsuarioContext.Provider  value={{usuario, setUsuario}} >
//

function App(){
    const [usuario, setUsuario] = useState({})
    return (
        <>
        <GlobalStyle />
        
        <BrowserRouter>
        <Routes>
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/" element={<TelaInicial />} />
            <Route path="/usuario" element={<TelaUsuario />} />
            <Route path="/entrada" element={<TelaEntrada />} />
            <Route path="/saida" element={<TelaSaida />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
