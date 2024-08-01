import Fontmin from "fontmin";
import fs from "fs";
import path from "path";

const fontmin = new Fontmin()
    .src('public/fonts/original/jf-openhuninn-2.0.ttf')
    .use(Fontmin.glyph({
        text: "首頁SnowViktor文章測試工具字數計算密碼產生單詞字符0123456789已複製！關於SnowViktor's GitHubWebsite GitHub",
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