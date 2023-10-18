import NodeCache from 'node-cache'

export const cache = new NodeCache({ ttl: 3600 })


export const checkCache = (req, res, next) => {
    
    const key = req.url
    if(cache.has(key)) {
        return res.status(200).json(cache.get(key))
    }
    return next()
 
}
