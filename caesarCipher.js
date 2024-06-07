
const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
  ]

const userInput=process.argv[2];
const shift=process.argv[3];

console.log(userInput, shift);

function cipher(userInput, shift) {
    let resultArr=[];
    for (let i = 0; i <userInput.length; i++){
        let charCode = userInput.charCodeAt(i)+(shift %alphabet.length);
        resultArr.push(String.fromCharCode(charCode))
    } 
    return resultArr.join('')
}

console.log(cipher(userInput,shift));