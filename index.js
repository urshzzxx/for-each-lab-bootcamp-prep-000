function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var goodFriends = ["alyssa", "anthony", "adam"]
  goodFriends.forEach(callback)
  return goodFriends
}

function doToArray(array, callback) {
  array.forEach(callback)
}
