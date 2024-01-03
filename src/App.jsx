import { useState } from 'react'
import axios from 'axios'
import './App.css'
import pressionar from './components/Enter'
import buscarDados from './components/Busca'

function App() { 
  const [usuario, setUsuario] = useState("")
  pressionar();

  function handleBuscar() { //Função para buscar o respectivo usuario do Github
    const usuario = document.getElementById('usuario').value.trim();
  
    if (usuario) {
      axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
          const userData = response.data;
          buscarDados(userData); 
        })
        .catch(error => {
          console.error('Erro ao buscar os dados:', error);
          alert('Erro ao buscar o perfil. Verifique o nome de usuário e tente novamente.');
        });
    } else {
      alert('Por favor, insira um nome de usuário válido.');
    }
  } 

  return (
    <div className='background'>
      <div className='App'> 

        <label htmlFor="usuario" className='usuario'>Buscar Github</label> <br />
        <input type="text" id='usuario' placeholder='Nome de usuário Github' value={usuario} onChange={e => setUsuario(e.target.value)} /> <br />
        <button onClick={handleBuscar} id='submit'>Pesquisar</button>
        
        <div className='informations'>
          <img id="avatar" src="" alt="" />
          <h2 id="name"></h2>
          <p id="login"></p>
          <p id="bio"></p>
          <p id="followers"></p>
          <p id="following"></p>
          <p id="created-at"></p> 
          <p id="public-repos"></p>
          <p id="repository-link"></p>
               
        </div>
      </div>
    </div>

  )
}

export default App
