let ParentSearch = class ParentSearch {
    constructor(name, key) {
        this.name = name
        this.key = key
    }
    startSearchEngine(arg, searchFunction, search) {
        let containerPromise = []
        let p = 'value'
        console.log(searchFunction.engine( search = 'Tu mama', p))
        // return new Promise((resolve, reject) => {
        //     // Recorremos los argumentos
        //     arg.forEach(p => {
        //         if (!p) return true
        //         console.log(p, 'pasa')
        //         // Api en una promesa            
        //         // Get API y almacenamos en un array
        //         containerPromise.push(searchFunction)
        //     })

        //     // Esperamos que se cumpla las promesas
        //     Promise.all(containerPromise).then(result => {
        //         // Ordenamos de mayor a menor
        //         result.sort((a, b) => {
        //             return b.resultSearch - a.resultSearch
        //         })

        //         console.log(this.name)
        //         console.log(result)
        //         // Mayor de todos
        //         let top = result[0]
        //         resolve(top)
        //     }).catch(err => {
        //         reject(err)
        //     })
        // })
    }
}
module.exports = {
    ParentSearch: ParentSearch
}