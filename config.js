#!/usr/bin/env node
var config = {};

config.idm.host = 'https://account.lab.fiware.org';

config.app.host = 'www.google.com';
config.app.port = '80';

// Credentials obtained when registering PEP Proxy in app_id in Account Portal
config.pep.app_id = 'b3f9b92963db48b5a49e6225913588d7';
config.pep.username = 'pep_proxy_398d991abbe04baab8581b38dfeb4e3f';
config.pep.password = '91088379b6c8434997a16698acb89aba';

config.check_permissions = false;

module.exports = config;
