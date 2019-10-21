const menus = {
    main:`
        outside [command] <options>
        
        today ............ show weather for today
        version ............ show package version
        help ............ show help menu`,
    
    today:`
        outside today <options>
        
        --location, -l ............ location to be used`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0]

    console.log(menus[subCmd] || menus.main)
}
