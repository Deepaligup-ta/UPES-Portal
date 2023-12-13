module.export = unixTime = () => {
    return Math.floor(Date.now() / 1000)
}