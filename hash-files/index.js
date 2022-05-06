const crypto = require('crypto')
const fs = require('fs')
const md5File = require('md5-file')

const files = [
'files/v2.pdf',
'files/v3.pdf'

]

function createFileHash(path) {
  const fileBuffer = fs.readFileSync('files/v3.pdf')
  const hashSum = crypto.createHash('md5')
  hashSum.update(fileBuffer)
  const hex = hashSum.digest('hex')
  
  console.log(hex)
  return hex;
}

function readFileHash(path) {
  const hash = md5File.sync(path)
  console.log(`MD5 Sum of ${path} is: ${hash}`)
  return hash
}

function checkAllHashes() {
  const hashes = []
  for (file of files) {
    const hash = readFileHash(file)
    hashes.push(hash)
  }
  console.log(hashes)
}

(() => {
  checkAllHashes()
  const hashes = []
  for (file of files) {
    const hash = createFileHash(file)
    console.log('interno')
    hashes.push(hash)

  }
  console.log('externo')
  // console.log(hashes[1] === hashes[2])
  console.log(hashes)
})()
