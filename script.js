// Função para alternar o estado de recrutado sem modificar o JSON
function toggleCheck(button, itemId) {
  // Obtém o estado atual dos recrutados do localStorage
  let recruitedItems = JSON.parse(localStorage.getItem('recruitedItems')) || [];

  // Verifica se o item está recrutado
  const index = recruitedItems.indexOf(itemId);

  if (index === -1) {
    // Se o item não estiver na lista, adiciona
    recruitedItems.push(itemId);
    button.textContent = 'Recrutado';
    button.classList.add('checked');
  } else {
    // Se o item já estiver na lista, remove
    recruitedItems.splice(index, 1);
    button.textContent = 'Não Recrutado';
    button.classList.remove('checked');
  }

  // Salva o estado no localStorage
  localStorage.setItem('recruitedItems', JSON.stringify(recruitedItems));
}

// Função para carregar os itens do JSON
function loadItems() {
  fetch('itens.json') // Nome do arquivo JSON que você está carregando
    .then(response => response.json())
    .then(data => {
      renderChecklist(data);
      // Usamos setTimeout para garantir que a renderização terminou
      setTimeout(loadRecruitedState, 0); // Espera a renderização dos itens
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
      document.getElementById('checklist').innerHTML = 'Erro ao carregar os itens.';
    });
}

// Função para carregar o estado dos itens recrutados do localStorage
function loadRecruitedState() {
  const recruitedItems = JSON.parse(localStorage.getItem('recruitedItems')) || [];

  // Agora, percorre todos os botões e aplica o estado corretamente
  const buttons = document.querySelectorAll('.check-button');
  buttons.forEach(button => {
    const itemId = button.closest('.item').dataset.id;

    if (recruitedItems.includes(parseInt(itemId))) {
      // Se o item estiver recrutado, altera o botão para "Recrutado"
      button.textContent = 'Recrutado';
      button.classList.add('checked');
    } else {
      // Caso contrário, o botão será "Não Recrutado"
      button.textContent = 'Não Recrutado';
      button.classList.remove('checked');
    }
  });
}

// Função para renderizar os itens
function renderChecklist(data) {
  const checklistContainer = document.getElementById('checklist');
  data.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.dataset.id = item.Id;

    // Criar a imagem
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    const img = document.createElement('img');
    img.src = `images/${item.Id}.png`; // Caminho para a imagem local (formato PNG)
    img.alt = item.Name;
    imgDiv.appendChild(img);

    // Criar a descrição
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const nameLocationDiv = document.createElement('div');
    nameLocationDiv.classList.add('name-location');

    const title = document.createElement('h3');
    title.textContent = item.Name;
    const location = document.createElement('p');
    location.textContent = `Localização: ${item.Location}`;

    nameLocationDiv.appendChild(title);
    nameLocationDiv.appendChild(location);

    const description = document.createElement('p');
    description.textContent = item.Method;

    descriptionDiv.appendChild(nameLocationDiv);
    descriptionDiv.appendChild(description);

    // Criar o botão de check
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');
    const button = document.createElement('button');
    button.classList.add('check-button');
    button.textContent = 'Não Recrutado';
    button.addEventListener('click', () => toggleCheck(button, item.Id));

    buttonDiv.appendChild(button);

    // Adicionar os elementos na div do item
    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(descriptionDiv);
    itemDiv.appendChild(buttonDiv);

    // Adicionar o item à lista no container
    checklistContainer.appendChild(itemDiv);
  });
}

// Carregar os itens
loadItems();
