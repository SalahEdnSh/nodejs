
const {readFile, writeFile} = require('fs').promises;

const start = async () => {
  try {
    const text1 = await readFile('./text1.txt', 'utf8');
    const text2 = await readFile('./text2.txt', 'utf8');
    await writeFile('texts.txt', `files content: ${text1} ${text2}`);
  
  } catch (err) {
    console.log(err)
  }
}

start()