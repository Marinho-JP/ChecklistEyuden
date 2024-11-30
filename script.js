// Função para alternar o estado de recrutado
function toggleCheck(button, item) {
  item.recruited = !item.recruited;  // Alterna o estado do item
  button.textContent = item.recruited ? 'Recrutado' : 'Não Recrutado'; // Atualiza o texto do botão
  button.classList.toggle('checked', item.recruited);  // Altera o estilo do botão
}

// Função para renderizar os itens do checklist
function renderChecklist(items) {
  const checklistContainer = document.getElementById('checklist');
  checklistContainer.innerHTML = ''; // Limpar o conteúdo anterior

  if (items.length === 0) {
    checklistContainer.innerHTML = 'Nenhum item encontrado.';
    return;
  }

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item'); // Adiciona a classe 'item' à div

    // Criar a imagem (caminho para as imagens locais)
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    const img = document.createElement('img');
    img.src = `images/${item.Id}.png`; // Caminho para a imagem local (formato PNG)
    img.alt = item.Name; // Usando 'Name' como texto alternativo da imagem
    imgDiv.appendChild(img);

    // Criar a descrição
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description'); // Adiciona a classe 'description'

    // Criar a div para o Nome e Localização
    const nameLocationDiv = document.createElement('div');
    nameLocationDiv.classList.add('name-location'); // Nova classe para Nome e Localização

    const title = document.createElement('h3');
    title.textContent = item.Name; // Usando 'Name' como título
    const location = document.createElement('h3');
    location.textContent = `Localização: ${item.Location}`; // Novo campo de localização

    nameLocationDiv.appendChild(title);
    nameLocationDiv.appendChild(location); // Adiciona a localização ao lado do nome

    // Adicionando o texto da descrição
    const description = document.createElement('p');
    description.textContent = item.Method; // Usando 'Method' para a descrição do item

    descriptionDiv.appendChild(nameLocationDiv); // Adiciona o nome e localização
    descriptionDiv.appendChild(description); // Adiciona a descrição

    // Criar o botão de check
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');
    const button = document.createElement('button');
    button.classList.add('check-button'); // Adiciona a classe 'check-button' ao botão
    button.textContent = item.recruited ? 'Recrutado' : 'Não Recrutado';
    if (item.recruited) {
      button.classList.add('checked');
    }
    button.addEventListener('click', () => toggleCheck(button, item)); // Adiciona o evento de clique

    buttonDiv.appendChild(button);

    // Adicionar os elementos na div do item
    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(descriptionDiv);
    itemDiv.appendChild(buttonDiv);

    // Adicionar o item à lista no container
    checklistContainer.appendChild(itemDiv);
  });
}

// Função para carregar o JSON e chamar a renderização
function loadItems() {
  fetch('itens.json') // Nome do arquivo JSON que você está carregando
    .then(response => response.json())
    .then(data => renderChecklist(data))  // Chama a função de renderização com os dados do JSON
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
      document.getElementById('checklist').innerHTML = 'Erro ao carregar os itens.';
    });
}

// Chama a função para carregar os itens do arquivo JSON
loadItems();
