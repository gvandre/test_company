const rest = require('../services/index')
const {ParentSearch} = require('../util/ParentSearch')

// Busqueda en Bing
let SearchBing = class SearchBing extends ParentSearch {
    // Obetener busqueda
    startSearchEngine(arg) {
        super.startSearchEngine(arg, nameFF)
        // super.startSearchEngine(arg, rest.getTotalResultsBing({
        //     key: this.key,
        //     name: this.name
        // }))
    }
    // startSearchEngine (arg) {
    //     let containerPromise = []
    //     return new Promise((resolve, reject) => {
    //         arg.forEach(p => {
    //             if (p === '' || !p) return
    //             // Api en una promesa
    //             // Get API y almacenamos en un array
    //             containerPromise.push(rest.getTotalResultsBing({
    //                 key: this.key,
    //                 word: p,
    //                 name: this.name
    //             }))
    //         })

    //         // Esperamos que se cumpla las promesas
    //         Promise.all(containerPromise).then(result => {
    //             // Ordenamos de mayor a menor
    //             result.sort((a, b) => {
    //                 return b.resultSearch - a.resultSearch
    //             })

    //             console.log(this.name)
    //             console.log(result)
    //             // Mayor de todos
    //             let top = result[0]
    //             resolve(top)
    //         }).catch(err => {
    //             reject(err)
    //         })
    //     })
    // }
}

// Busqueda en Google
let SearchGoogle = class SearchGoogle extends ParentSearch {
    constructor (name, key, util) {
        super(name, key)
        this.util = util
    }
    // Obetener busqueda
    startSearchEngine(arg) {
        // super.startSearchEngine(arg, rest.getTotalResultsGoogle({
        //     key: this.key,
        //     util: this.util,
        //     name: this.name
        // }))
        super.startSearchEngine(arg, nameFF)
    }
    // startSearchEngine (arg) {
    //     let containerPromise = []
    //     return new Promise((resolve, reject) => {
    //         // Recorremos los argumentos
    //         arg.forEach(p => {
    //             if (p === '' || !p) return
    //             // Api en una promesa            
    //             // Get API y almacenamos en un array
    //             containerPromise.push(rest.getTotalResultsGoogle({
    //                 key: this.key,
    //                 word: p,
    //                 util: this.util,
    //                 name: this.name
    //             }))
    //         })

    //         // Esperamos que se cumpla las promesas
    //         Promise.all(containerPromise).then(result => {
    //             // Ordenamos de mayor a menor
    //             result.sort((a, b) => {
    //                 return b.resultSearch - a.resultSearch
    //             })

    //             console.log(this.name)
    //             console.log(result)
    //             // Mayor de todos
    //             let top = result[0]
    //             resolve(top)
    //         }).catch(err => {
    //             reject(err)
    //         })
    //     })
    // }
}
let nameFF  = {
    engine: function (name, lastName) {
        return name + " " + lastName
    }
}
module.exports = {
    SearchBing: SearchBing,
    SearchGoogle: SearchGoogle
}