const path = require('path')
// import fileReader from './util/fileReader'
const fileReader = require('./util/fileReader')

// fileReader.fileCopyByWritable(
//   path.join(__dirname, './file/1.txt'),
//   path.join(__dirname, './file/2.txt'),
//   function () {
//     console.log('结束了, ')
//   }
// )

fileReader.downloadAndPipToFile('https://www.baidu.com', path.join(__dirname, './file/2.txt'), function (res) {
  console.log(res)
})
