import React from 'react'

function fillGitHubProfile(data) {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').innerText = data.name;
    document.getElementById('login').innerText = `Login: ${data.login}`;
    document.getElementById('bio').innerText = `Bio: ${data.bio || 'N/A'}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
    document.getElementById('following').innerText = `Following: ${data.following}`;
    // Preencha mais campos conforme necessário
  }
  
  // Função para buscar o perfil do GitHub com base no nome de usuário inserido
  function fetchGitHubProfile() {
    const username = document.getElementById('username').value.trim();
  
    if (username) {
      axios.get(`https://api.github.com/users/${username}`)
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

export default buscar