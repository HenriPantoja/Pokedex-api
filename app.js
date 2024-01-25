const textCharacter = document.getElementById('text-character');
const textEpisode = document.getElementById('text-episode');
const characterSearchButton = document.getElementById('character-search-button');
const episodeSearchButton = document.getElementById('episode-search-button');
const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";
const URL3 = "https://rickandmortyapi.com/api/episode";
const URL4 = "https://rickandmortyapi.com/api/episode/?episode=";

const getApi = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

const createCharacterCard = (character) => {
  const card = document.createElement('div');
  card.classList.add('card-character');

  const imgCard = document.createElement('img');
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const containerDescription = document.createElement('div');
  containerDescription.classList.add('description-card');

  const nameCharacter = document.createElement('h2');
  nameCharacter.textContent = character.name;

  const genderCharacter = document.createElement('p');
  genderCharacter.textContent = "Gender: " + character.gender;

  containerDescription.appendChild(nameCharacter);
  containerDescription.appendChild(genderCharacter);

  card.appendChild(imgCard);
  card.appendChild(containerDescription);

  containerCards.appendChild(card);
};
const createEpisodeCard = (episode) => {
    const card = document.createElement('div');
    card.classList.add('card-episode');
  
    const nameEpisode = document.createElement('h2');
    nameEpisode.textContent = episode.name;
  
    const episodeDetails = document.createElement('p');
    episodeDetails.textContent = `Episode: ${episode.episode} | Air date: ${episode.air_date}`;
  
    card.appendChild(nameEpisode);
    card.appendChild(episodeDetails);
  
    containerCards.appendChild(card);
  };
  
  const searchCharacters = async () => {
    containerCards.innerHTML = "";
    const searchTerm = textCharacter.value.trim();
  
    if (searchTerm !== "") {
      const data = await getApi(URL2 + searchTerm);
      data.forEach((character) => createCharacterCard(character));
    }
  };
  
  const searchEpisodes = async () => {
    containerCards.innerHTML = "";
    const searchTerm = textEpisode.value.trim();
  
    if (searchTerm !== "") {
      const data = await getApi(URL4 + searchTerm);
      data.forEach((episode) => createEpisodeCard(episode));
    }
  };
  
  characterSearchButton.addEventListener('click', searchCharacters);
  episodeSearchButton.addEventListener('click', searchEpisodes);
  