const { testFn, args } = require("effects-as-data/test")
const { cmds } = require('effects-as-data-universal');
const example = require('../function');

test('', testFn(example, () => {
  return args(100)
    .yieldCmd(cmds.randomNumber()).yieldReturns(0.8449018433837043)
    .yieldCmd(cmds.httpGet('https://swapi.co/api/people/84')).yieldReturns({"name":"Finn","height":"unknown","mass":"unknown","hair_color":"black","skin_color":"dark","eye_color":"dark","birth_year":"unknown","gender":"male","homeworld":"https://swapi.co/api/planets/28/","films":["https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2015-04-17T06:52:40.793621Z","edited":"2015-04-17T06:52:40.793674Z","url":"https://swapi.co/api/people/84/"})
    .yieldCmd(cmds.echo("Finn")).yieldReturns("Finn")
    .returns("Finn");
}))
