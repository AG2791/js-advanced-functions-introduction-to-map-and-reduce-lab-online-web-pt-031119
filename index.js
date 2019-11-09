///Your code here

// function mapToNegativize(sourceArray) {
//   let array = []
//   for (let i = 0; i < sourceArray.length; i++ ) {
//     array.push(-1 * sourceArray[i])
//   }
//   return array
// }

function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
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
    array.push(2 *  array[i])
  }
  return array
}

function mapToSquare(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    array.push(sourceArray[i] * sourceArray[i])
  }
  return array
}