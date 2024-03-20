import * as fs from 'fs';
import {generate} from 'random-words';


const numWords = 200;
const maxWordLength = 4;
// Function to generate a random RGB value
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

// Function to generate RGB values for letters
function generateLetterColors() {
    const letterColors = {};
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); // ASCII code for 'A' is 65
        letterColors[letter] = {
            r: randomRGB(),
            g: randomRGB(),
            b: randomRGB()
        };
    }
    return letterColors;
}

// Function to generate RGB values for words based on the first letter
function generateWordColors(words, letterColors) {
    const wordColors = {};
    words.forEach(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        wordColors[word] = { ...letterColors[firstLetter] };
    });
    return wordColors;
}

// Generate letter colors
const letterColors = generateLetterColors();

// Generate random words
const words = generate({ exactly: numWords, maxLength: maxWordLength });

// Generate word colors based on first letter
const wordColors = generateWordColors(words, letterColors);

// Prepare data for CSV
let csvData = 'word,r,g,b\n';
Object.keys(letterColors).forEach(letter => {
    const { r, g, b } = letterColors[letter];
    csvData += `${letter},${r},${g},${b}\n`;
});

Object.keys(wordColors).forEach(word => {
    const { r, g, b } = wordColors[word];
    csvData += `${word},${r},${g},${b}\n`;
});

const outputFolder = './output';
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, ''); // Replace ':' with '-' to make it Windows file system friendly
const outputFileName = `${outputFolder}/colors_${timestamp}.csv`;

// Write to CSV file
fs.writeFileSync(outputFileName, csvData);

console.log(`CSV file generated successfully: ${outputFileName}`);
