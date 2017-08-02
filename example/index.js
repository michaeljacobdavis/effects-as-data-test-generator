const { call } = require('effects-as-data');
const { handlers, cmds } = require('effects-as-data-universal');
const config = require('../lib');
const example = require('./function');

call(config, handlers, example, 100);
