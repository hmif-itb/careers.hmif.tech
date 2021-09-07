export const encodeBase64 = (inputFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    }
    reader.onerror = (err) => {
      reject(err);
    }
    reader.readAsDataURL(inputFile);
  })
}