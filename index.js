function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === stopValue) {
        return array;
      }
      array[i] = changeValue;
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  if (findFn() === true) {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === found) {
      return findFn;
    } else if (i === array.length) {
      return null;
    }
  }
} else {
  return 'That didnt work'
}
}
