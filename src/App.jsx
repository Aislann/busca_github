import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")

  function fillGitHubProfile(data) {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').innerText = data.name;
    document.getElementById('login').innerText = `Login: ${data.login}`;
    document.getElementById('bio').innerText = `Bio: ${data.bio || 'N/A'}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
    document.getElementById('following').innerText = `Following: ${data.following}`;
    document.getElementById('created-at').innerText = `Data de Criação: ${new Date(data.created_at).toLocaleDateString()}`; // Mostra a data de criação formatada
    document.getElementById('public-repos').innerText = `Repositórios Públicos: ${data.public_repos}`; // Mostra a quantidade de repositórios públicos
    // Preencha mais campos conforme necessário
  }

  function handleBuscar() {
    // axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data))

    const usuario = document.getElementById('usuario').value.trim();
  
    if (usuario) {
      axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
          const userData = response.data;
          fillGitHubProfile(userData); // Preencha os dados do perfil
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
        <button onClick={handleBuscar}>Pesquisar</button>
        
        <div className='informations'>
          <img id="avatar" src="" alt="" />
          <h2 id="name"></h2>
          <p id="login"></p>
          <p id="bio"></p>
          <p id="followers"></p>
          <p id="following"></p>
          <p id="created-at"></p> 
          <p id="public-repos"></p>

        </div>
      </div>
    </div>

  )
}

export default App
