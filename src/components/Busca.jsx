// Função para receber as informações do Github

function buscarDados(data) { 
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').innerText = data.name;
    document.getElementById('login').innerText = `Login: ${data.login}`;
    document.getElementById('bio').innerText = `Bio: ${data.bio || 'N/A'}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
    document.getElementById('following').innerText = `Following: ${data.following}`;
    document.getElementById('created-at').innerText = `Data de Criação: ${new Date(data.created_at).toLocaleDateString()}`;
    document.getElementById('public-repos').innerText = `Repositórios Públicos: ${data.public_repos}`; 

    const repositoryLink = document.getElementById('repository-link');
    repositoryLink.innerHTML = `<p> <a href="${data.html_url}" target="_blank" >Link do Repositório</a></p>`;
  }

export default buscarDados