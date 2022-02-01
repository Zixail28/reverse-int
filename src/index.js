module.exports = function reverse (n) {
    n = Math.abs(n)
    let str = n.toString()
    let strN = ''
    for(i = str.length - 1; i >= 0; i--){
        strN = `${strN}${str[i]}`
    } return strN
}
