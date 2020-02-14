const data =  require('../data/data.json');

function getStrings() {
    console.log("We're getting strings!")
    return new Promise((resolve, reject) => {
    if (data.length === 0) {
        reject({
            message: 'no posts available',
            status: 202
        })
    }
    resolve(data)
})}

function insertStrings(newString) {  
    return new Promise((resolve, reject) => {
    data.push(newString)
    resolve(newString)
    }
)}

module.exports = {
    getStrings,
    insertStrings
}