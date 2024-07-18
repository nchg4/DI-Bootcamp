import { promises as fs } from 'fs';

export async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(`Error reading file from disk: ${error}`);
    }
}

export async function writeFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log('File has been written');
    } catch (error) {
        console.error(`Error writing file to disk: ${error}`);
    }
}
