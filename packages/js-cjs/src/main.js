module.exports = () => {
  const getNumber = require('./sub').getNumber
  return 100 + getNumber()
}




