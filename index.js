//import jason server
const jsonserver=require('json-server')

//import cors file

const cors=require('cors')



//create json server
const kino=jsonserver.create()



/// convert json type data to js type before request resolving==>middlewares
///if we pply middlewares in server,the middlewares will work before the request

const middlewares=jsonserver.defaults()


///create Router 

const router=jsonserver.router('db.json')

///apply in server

kino.use(middlewares)
kino.use(cors())
kino.use(router)
const port=5050

kino.listen(port,()=>{
    console.log(`--------kin:${port}--------`);
})

