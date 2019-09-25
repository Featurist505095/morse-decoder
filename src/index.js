const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let len = expr.length/10;
    let decodeStr = "";
    let i = 0;
    
    while (i < len) {
        let currLetterCode = expr.substring(i*10, i*10 + 10);
        let currLetter = "";
        for (let j = 0; j < 10; j = j + 2) {
            switch (currLetterCode.substring(j, j + 2)) {
                case "10":
                    currLetter = currLetter + ".";
                    break;
                case "11":
                    currLetter = currLetter + "-";
                    break;
                case "**":
                    currLetter = currLetter + " ";
                    j = 10;
                    break;
            }
        }
        i++;
        if (currLetter != " ")
            decodeStr = decodeStr + MORSE_TABLE[currLetter];
        else
            decodeStr = decodeStr + " ";
    }
    return decodeStr;
}

module.exports = {
    decode
}