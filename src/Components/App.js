import GlobalStyle from "../GlobalStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import TelaCadastro from "./TelaCadastro"


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
            <Route path="/" element={<TelaCadastro />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
