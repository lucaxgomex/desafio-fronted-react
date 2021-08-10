import React from 'react'
import './body.css'

function Body(){
    return(
<div>
<form method ="get">
    
  <label>
    Nome
    <input type="text" name="nome" />
  </label>

  <label>
      Data de Início
      <input type='date' name='data-inicio'/>
  </label>

  <label>
      Data de Fim
      <input type='date' name='data-fim'/>
  </label>

  <label>
      Duração(Semanas)
      <input type='number' name='duracao'/>
  </label>

  <label>
      Descrição
      <input type='textarea' name='descricao'/>
  </label>

  <label>
  <input className='form-submit' type="submit" name="enviar" value="Cadastrar"></input>
  </label>

</form>

</div>
    );
}

export default Body;
