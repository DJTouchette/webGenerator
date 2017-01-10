const fs = require('fs');
const template = require('./markup');
const copyDir = require('copy-dir');
const toThumbnail = require('./imageResize.js');
const dir = __dirname + '/website';
// const color = '#f5da55';

const pathToJson = process.argv[2];

const content = JSON.parse(fs.readFileSync(pathToJson, 'utf8'));
makeDirectory(content);

function makeDirectory(content) {
    console.log('im make Directory');
    fs.mkdirSync(dir);
    fs.mkdirSync(dir + '/assets');
    fs.mkdirSync(dir + '/images');
    fs.mkdirSync(dir + '/images/fulls');
    fs.mkdirSync(dir + '/images/thumbs');
    console.log("Created directories");
    copyDir.sync(__dirname + '/assets', dir + '/assets');
    copyDir.sync(__dirname + '/images', dir + '/images');
    // console.log("Created directories");

    makeTemplate(content);
}

function makeTemplate(content) {
    fs.writeFile(dir + '/index.html', template(content, content.content.length || 3, content.building || 'Building Name'), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("Created index.html");
        fullsToThumbNail(content.locationToPics);
        changeColor(content.color);
    });
}


function fullsToThumbNail(pathToPhotos) {
    fs.readdir(pathToPhotos, (err, files) => {
        let i = 1;
        
    files.forEach(file => {
        toThumbnail(__dirname + '/fulls/' + file, i);
        i ++;
    });
    });
}

function changeColor(color) {
    fs.readFile(dir + '/assets/css/main.css', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        const result = data.replace(/#5695cf/g, color);

        fs.writeFile(dir + '/assets/css/main.css', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}
