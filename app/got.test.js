var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')
const got = require('./got')
const data = require('./data.json')

var mock = new MockAdapter(axios)

test('fetch character', async () => {
  mock.onGet('https://anapioficeandfire.com/api/characters/99').reply(200, data)
  const result = await got(99)
  expect(result.name).toBe('Jon Snow')
});
