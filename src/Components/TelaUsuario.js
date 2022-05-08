import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {RiLogoutBoxRLine} from "react-icons/ri"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"

//import UsuarioContext from './contextos/UsuarioContext'

function Usuario(){

  function logout(){
    console.log("saaaair");
  }

  return (
    <Container>
      <Topo>
      <Texto>Olá, Fulano</Texto><RiLogoutBoxRLine  size={25} color={"white"} onClick={logout}/>
      </Topo>
      <Principal></Principal>
      <Inferior>
        <Link to="/entrada"><Botao><AiOutlinePlusCircle size={22} color={"white"} /> Nova Entrada</Botao></Link>
        <Link to="/saida"><Botao><AiOutlineMinusCircle size={22} color={"white"} />Nova Saida</Botao></Link>
      </Inferior>

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

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 446px;
  width: 326px;
  /* margin-top: 78px; */
  margin-bottom: 13px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;;
`;

const Inferior = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8C11BE;
  padding-left: 25px;
  padding-right: 25px;
`;

const Botao = styled.button`
  height: 114px;
  width: 145px;
  background-color: #A328D6;
  border: 1px solid #A328D6;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 9px;
`;

export default Usuario;