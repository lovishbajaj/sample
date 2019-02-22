var sum = (a,b) => {
    return new Promise((resolve, reject) => {
        if (!a || !b) {
            reject("Please enter all values")
        } else {
            resolve(a + b)
        }
    })
}
sum(3).then(data => {
    console.log(data)
}, err => {
    console.log(err)
})
nsjncksjcgit 