import Fontmin from "fontmin";
import fs from "fs";

const font = ['jf-openhuninn-2.0', 'Iansui-Regular'];
for (let i = 0; i < font.length; i++) {
    minifyFont(font[i]);
}

function minifyFont(name) {
    fs.readFile(`public/fonts/original/${name}.txt`, (err, data) => {
        if (err) throw err;
        const txt = data.toString();
        (new Fontmin()
        .src(`public/fonts/original/${name}.ttf`)
        .use(Fontmin.glyph({
            text: txt,
            hinting: false
        }))
        .use(Fontmin.ttf2woff2())
        .dest('public/fonts')
        ).run(err => {if (err) throw err;});
    });
}