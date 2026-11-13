const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

pipeline(
    fs.createReadStream('logs/grande.log'),
    zlib.createGzip(),
    fs.createWriteStream('logs/grande.log.gz'),
    (err) => {
        if(err) console.log('Deu erro: ', err.message);
        else console.log('Compactado!');
    }
);