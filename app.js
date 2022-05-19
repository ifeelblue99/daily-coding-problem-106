const data = [2, 0, 1, 3, 0, 0, 0, 0]

function reachingEndByHopping(arr, indx = 0) {
  if(indx === arr.length - 1) return true
  
  if(indx > arr.length) return false
  
  const current = arr[indx]
  if(current === 0) return false

  return reachingEndByHopping(arr, indx + current)
}

console.log(reachingEndByHopping(data))
