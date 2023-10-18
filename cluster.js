import cluster from 'cluster'
import os from 'os'

if(cluster.isPrimary){
    const cpus = 4
    console.log(process.pid)
    for(let i = 0; i < cpus; i++)
        cluster.fork({ env: `PORT=${8000+1}`})
}else 
    import ('./app.js')