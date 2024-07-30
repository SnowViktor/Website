import Fontmin from "fontmin";
import * as fs from "fs";

const text = fs.readFile('public/fonts/original/jf-openhuninn-2.0.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    return data;
});

const fontmin = new Fontmin()
    .src('public/fonts/original/jf-openhuninn-2.0.ttf')
    .use(Fontmin.glyph({
        text: text,
        hinting: false
    }))
    .use(Fontmin.ttf2woff2())
    .dest('public/fonts');

fontmin.run(function (err, files) {
    if (err) throw err;
    console.log(files[0]);

    fs.rm('public/fonts/jf-openhuninn-2.0.ttf', (err) => {
        if (err) throw err;
        console.log('public/fonts/jf-openhuninn-2.0.ttf was deleted');
    });
});