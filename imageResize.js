const sharp = require('sharp');

function toThumbnail(file, num) {
  const path = __dirname + '/website/images/thumbs/' + 'thumb' + num +'.jpg'

  sharp(file)
    .resize(200, 200)
    .toFile(path, function(err) {
      if (err) console.log(err);
      console.log('Resized ' + file);
    });
}

module.exports = toThumbnail;