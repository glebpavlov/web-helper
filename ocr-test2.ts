import { recognize } from "node-native-ocr";

import fs from "fs-extra";
import * as path from 'path';

const filepath = path.join(
    __dirname,
    "img.png"
);

console.log(filepath)

fs.readFile(filepath, {lang: ["rus"]}).then(recognize).then(console.log); // 'node-native-ocr'