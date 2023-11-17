const { remote } = require('electron');
const { Client } = remote.require('clashofclans.js');
const client = new Client();

module.exports = { client };