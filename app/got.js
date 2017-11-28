const api = require('./api')

module.exports = (characterId) => {
  return api.fetchCharacter(characterId)
}
