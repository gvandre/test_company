let SearchInyection = class SearchInyection {
    constructor (searchGoogle, searchBing) {
        this.searchGoogle = searchGoogle;
        this.searchBing = searchBing;
    }

    startSearchEngine (arg) {
        // this.searchGoogle.startSearchEngine(arg)
        // this.searchBing.startSearchEngine(arg)

        return  new Promise ((resolve, reject) => {
            let onlyArguments = arg.slice(2, arg.length)
            if (onlyArguments.length === 0) {
                reject('Agregue palabras de busqueda')
            }
            // Guardamos las promesas
            let resultGoogle = this.searchGoogle.startSearchEngine(onlyArguments)
            let resultBing = this.searchBing.startSearchEngine(onlyArguments)
 
            // Esperamos repuesta de las promesas
            Promise.all([resultGoogle, resultBing]).then( res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
module.exports = {
    SearchInyection: SearchInyection
}