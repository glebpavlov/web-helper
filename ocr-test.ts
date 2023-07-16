import { createWorker, OEM, PSM } from 'tesseract.js';

(async () => {
    const worker = await createWorker({
        logger: m => console.log(m)
    });

    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    await worker.setParameters({
        preserve_interword_spaces: '1'
    });
    const {data: {text}} = await worker.readText('img.png');
    console.log(text);
    await worker.terminate();
})();
