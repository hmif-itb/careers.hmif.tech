export const encodeBase64 = async inputFile => {
  if (inputFile === null) {
    return null
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      resolve(e.target.result)
    }
    reader.onerror = err => {
      reject(err)
    }
    reader.readAsDataURL(inputFile)
  })
}
