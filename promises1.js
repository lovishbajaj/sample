var sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a && b) {
            resolve(a * b)

        } else {
            reject("Please enter all values")
        }
    })
}
sum(2,7).then(data => {
    console.log(data)
}
    , err => {
        console.log(err)
    })