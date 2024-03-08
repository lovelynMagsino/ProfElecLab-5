let userInput = prompt("Please enter a string of text:");
  if (userInput) {
     analyzeText(userInput);
  } else {
     console.log("Invalid input.");
}
function analyzeText(text) {
    
    const characterCount = text.length;

    const wordCount = text.split(/\s+/).filter(word => word.trim() !== '').length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;

    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordFrequency = {};
    let mostFrequentWord = '';
    let maxFrequency = 0;

    if (words) {
        words.forEach(word => {
            if (wordFrequency[word]) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }

            if (wordFrequency[word] > maxFrequency) {
                mostFrequentWord = word;
                maxFrequency = wordFrequency[word];
            }
        });
    }

    const totalWordLength = words ? words.reduce((total, word) => total + word.length, 0) : 0;
    const averageWordLength = totalWordLength / wordCount || 0;
    
    console.log(`Inputted text: ${text}`);
    console.log(`Character count: ${characterCount}`);
    console.log(`Word count: ${wordCount}`);
    console.log(`Sentence count: ${sentenceCount}`);
    console.log(`Most frequent word: ${mostFrequentWord} (${maxFrequency} occurrences)`);
    console.log(`Average word length: ${averageWordLength.toFixed(2)}`);
}

