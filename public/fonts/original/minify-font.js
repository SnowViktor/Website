import Fontmin from "fontmin";
import fs from "fs";
import path from "path";

const fontmin = new Fontmin()
    .src('public/fonts/original/*.ttf')
    .use(Fontmin.glyph({
        text: 'SnowViktor關於工具文章首頁字數計算單詞字符密碼產生已複製！測試0123456789',
        hinting: false
    }))
    .use(Fontmin.ttf2woff2())
    .dest('public/fonts');

fontmin.run(err => {
    if (err) throw err;

    fs.readdir('public/fonts', (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            if (path.extname(file) === '.ttf') {
                const filePath = path.join('public/fonts', file);
                fs.unlink(filePath, err => {if (err) throw err;});
            }
        });
    });
});