const {SearchInyection} = require('./util/Inyection')
const {SearchBing, SearchGoogle} = require('./models/Search')

// Inyecion de dependecia
let inyec = new SearchInyection(new SearchGoogle('Google', 'AIzaSyD6M9iEVa7ogVcEn4WknYwvKZ_k8su0nzE', '015917242364998361829:vssrv5_kbx8'), new SearchBing('Bing', '8ac52427e5af45848cdca0a5de7118f5'))
inyec.startSearchEngine(process.argv).then(result => {
    console.log('- Resultado de la busqueda: ')
    console.log(result)
}).catch(err => {
    console.log('- Info: ocurrio un error')
    console.log(err)
})
