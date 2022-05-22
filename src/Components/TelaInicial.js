import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import UsuarioContext from './context/UsuarioContext'

function TelaInicial() {

  const {setToken, setName, setEmail} = useContext(UsuarioContext)
  const [emailValue, setEmailValue] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function fazerLogin(event) {
    event.preventDefault();
    const URL = "http://localhost:5000/sign-in";
    const promisse = axios.post(URL,{
        email: emailValue,
        password: senha
    });
    promisse.then((response) => {
      const { data } = response;
      setToken(data.token);
      setName(data.name);
      setEmail(data.email)
      navigate('/usuario');
    });
    promisse.catch((err) => {
      console.log(err);
      alert("falha no login, tente novamente ou cadastre-se");
    });
  }
  return (
    <>
      <Container>
        <Formulario onSubmit={fazerLogin}>
          <Input
            type="email"
            placeholder="Email"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Botao type="submit">Entrar</Botao>
          <Texto>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
          </Texto>
        </Formulario>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #8C11BE;
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
const Texto = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  a{
    color: #fff;
  }
`;

export default TelaInicial;