import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import UsuarioContext from "./context/UsuarioContext";

function TelaEntrada(){

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const {token, name} = useContext(UsuarioContext)
  const server = "http://localhost:5000/extrato";
  const navigate = useNavigate();
  const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
  }

    function salvarEntrada (event) {
        event.preventDefault();
        const body = {
          description, 
          type: "deposit",
          value: parseFloat(value)
        };
        const promise = axios.post(server,body,config)
        promise.then(response => {
            const {data} = response;
            console.log(data);
            alert("Registro feito com sucesso!");
            navigate("/usuario");
        });
        promise.catch(error => {
            alert("Falha no envio dos dados, por favor tente novamente");
        })
    }

  return (
    <Container>
      <Topo>
      <Texto>Olá, {name}</Texto>
      </Topo>
      <Formulario onSubmit={salvarEntrada}>
          <Input
            type="text"
            placeholder="Valor"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Descricao"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Botao type="submit">Salvar Entrada</Botao>
        </Formulario>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #8C11BE;
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  height: 78px;
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
  z-index: 2;
`
const Texto = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 45px;
  width: 303px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666;
  margin-bottom: 6px;
  &::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
  }
`;
const Botao = styled.button`
  height: 45px;
  width: 303px;
  background-color: #A328D6;
  border: 1px solid #A328D6;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default TelaEntrada;