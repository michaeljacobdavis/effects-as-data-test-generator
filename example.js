const { call } = require('effects-as-data');
const { handlers, cmds } = require('effects-as-data-universal');
const config = require('./lib');

function* test(max = 100) {
  const randomNumber = yield cmds.randomNumber();
  const id = Math.floor(randomNumber * max);
  let person;
  try {
    person = yield cmds.httpGet(`https://swapi.co/api/people/${id}`);
  } catch (e) {
    return yield cmds.echo('R2D2');
  }
  return yield cmds.echo(person.name);
}

call(config, handlers, test, 100);
