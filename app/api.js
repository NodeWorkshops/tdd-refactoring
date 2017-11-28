const axios = require('axios')

const fetchCharacter = (characterId) => {
  return axios.get('https://anapioficeandfire.com/api/characters/' + characterId).then(res => res.data)
}

module.exports = {
  fetchCharacter
}
