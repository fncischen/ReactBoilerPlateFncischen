const data = require('../data/data.json');

function getStrings() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject({
        message: 'no posts available',
        status: 202,
      });
    }
    resolve(data);
  });
}

function insertString(newString) {
  console.log('New String', newString);
  return new Promise((resolve, reject) => {
    const newIndex = JSON.stringify(data.length);
    const newValue = {};
    newValue[newIndex] = newString;
    data.push(newValue);
    resolve(newString);
  });
}

module.exports = {
  getStrings,
  insertString,
};
