// Your code here
function mapToNegativize(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    array.push(-1 * sourceArray[i])
  }
  return array
}

function mapToNoChange(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
     array.push(sourceArray[i])
  }
  return array
}

function mapToDouble(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(2 *  array[i])
  }
  return array
}

function mapToSquare(src) {
  let array = []
  for (let i = 0; i < array.length; i++ ) {
    r.push(sourceArray[i] * sourceArray[i])
  }
  return array
}