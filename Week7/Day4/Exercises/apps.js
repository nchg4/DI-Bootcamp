import { readFile, writeFile } from "./fileManager.js";

async function main() {
    const helloFilePath = './Hello World.txt';
    const byeFilePath = './Bye World.txt';
    const newContent = 'Writing to the file';

    const content = await readFile(helloFilePath);
    console.log('Read from Hello World.txt:', content);

    await writeFile(byeFilePath, newContent);
}

main();