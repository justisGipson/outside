#!/usr/bin/env node
const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    const cmd = args._[0]
    
    console.log("Welcome Outside")
}
