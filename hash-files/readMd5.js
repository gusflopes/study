// import {readFileSync, readFile} from 'fs'
// import md5 from 'md5'
const fs = require('node:fs/promises')
const md5 = require('md5')

const filePath = 'files/v3.pdf'

function readWithMd5(path) {

  fs.readFile(path)
    .then(b => md5(b))
    .then(hashSum => console.log(hashSum))
    .catch(err => console.error(err))

}

readWithMd5(filePath)