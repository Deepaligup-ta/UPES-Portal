import NodeCache from 'node-cache'

export const cache = new NodeCache({ sdTTL: 15 })

export const checkCache = (req, res, next) => {
    try {
        const key = req.url
        if(cache.has(key)) {
            return res.status(200).json(cache.get(key))
        }
        return next()
    } catch (err) {
        throw new Error(err)
    }
}
