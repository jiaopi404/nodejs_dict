const fs = require('fs')
const axios = require('axios')

/**
 * copy 文件内容
 * @param path1
 * @param path2
 * @param cb
 */
function fileCopyByWritable (path1, path2, cb) {
  const rs = fs.createReadStream(path1, { flags: 'r' })
  const ws = fs.createWriteStream(path2, { flags: 'w' })
  rs.pipe(ws)
  rs.on('close', function (e) {
    console.log('rs closed, e: ', e)
  })
  ws.on('close', function (e) {
    console.log('ws closed, e: ', e)
    cb({ code: 1, msg: 'success' })
  })
}

/**
 * 下载到本地
 * @param url
 * @param path
 * @param cb
 * @returns {Promise<void>}
 */
async function downloadAndPipToFile (url = 'https://www.baidu.com', path, cb) {
  const res = await axios({
    method: 'GET',
    responseType: 'stream',
    url
  })
  const ws = fs.createWriteStream(path, { flags: 'w' })
  res.data.pipe(ws)
  ws.on('close', function () {
    cb({ code: 1, msg: 'success' })
  })
}

module.exports = {
  fileCopyByWritable,
  downloadAndPipToFile
}
