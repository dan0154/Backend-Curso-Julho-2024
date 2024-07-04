function filtrarPares(arr) {
    retorno = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            retorno.push(arr[i])
        }

    }

    return retorno
}
arr = []

console.log(filtrarPares([10, 20, 51, 3, 2, 1, 9, 11]))