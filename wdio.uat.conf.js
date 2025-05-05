const merge = require('deepmerge')
const wdioConf = require('./wdio.conf')
exports.config =merge(wdioConf.config,{

    baseUrl: 'https://rahulshettyacademy.com',
    waitforTimeout: 5000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep:'smoke'
    },
})