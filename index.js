// Your code here
function mapToNegativize(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    array.push(-1 * sourceArray[i])
  }
  return array
}

// function mapToNegativize(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(-1 * src[i])
//   }
//   return r
// }