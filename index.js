const fs = require('fs');
const path = require('path');
const replaceThis = "node";
const replaceWith = "sam";
const folder = "D:\\New folder";

fs.readdir(folder, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let oldFile = (path.join(folder, item));
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
        if (oldFile !== newFile) {
            fs.rename(oldFile, newFile, () => {
                console.log(oldFile + " is renamed successfully to "+newFile );
            });
        }
    }
});
