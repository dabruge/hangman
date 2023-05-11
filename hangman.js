const prompt = require('prompt-sync')()
console.clear()

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let correctGuesses = []
let incorrectGuesses = []
let wrongCount = 0

main()


function mainMenu () {
    let menuChoice = 0

    while (!(menuChoice >= 1) || !(menuChoice <= 3)) {
        console.clear()
        console.log(`
 _    _
| |  | |                                        
| |__| | __ _ _ __   __ _ _ __ ___   __ _ _ __  
|  __  |/ _' | '_ \\ / _' | '_ ' _ \\ / _' | '_ \\ 
| |  | | (_| | | | | (_| | | | | | | (_| | | | |
|_|  |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|
                     __/ |                      
                    |___/             


            1   Create word to play
            2   Select category
            3   Totally random!

`)
        menuChoice = prompt('Please enter number of menu selection: ')
    }
    return menuChoice
}


function getWords (menuNum) {
    console.log(menuNum)
    switch (menuNum) {
        case '1':
            return enterWords()
        case '2':
            return 'category'
        case '3':
            return 'random'
        //default:
          //  console.log('Invalid word')
    }
}


function enterWords () {
    // needs punctuation/number checks
    let guessInfo = {}
    guessInfo.words = prompt('Please enter text to be guessed: ').toUpperCase()
    guessInfo.category = prompt('Please enter category of entry (optional): ')
    return guessInfo
}


function printHangman (wrongCount) {
    switch (wrongCount) {
        case 0:
            console.log(`
            ___________________________
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |___________________________|
   
            `)
            break
        case 1:
            console.log(`
            ___________________________
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |                           |
           |    ___________________    |
           |___________________________|
   
            `)
            break
        case 2:
            console.log(`
            ___________________________
           |                           |
           |                           |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 3:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 4:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        | /                |
           |        |/                 |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 5:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        | /      |         |
           |        |/                 |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 6:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        | /      |         |
           |        |/       0         |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 7:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        | /      |         |
           |        |/       0         |
           |        |     ---|---      |
           |        |        |         |
           |        |                  |
           |        |                  |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
        case 8:
            console.log(`
            ___________________________
           |                           |
           |        __________         |
           |        | /      |         |
           |        |/       0         |
           |        |     ---|---      |
           |        |        |         |
           |        |       / \\        |
           |        |      /   \\       |
           |        |                  |
           |    ____|______________    |
           |___________________________|
   
            `)
            break
    }
}


function printGuessed (wrongCount, incorrectGuesses) {
    console.log(`Incorrect guesses: ${wrongCount} / 8`)
    console.log(`Incorrectly guessed letters: ${incorrectGuesses}\n`)
}

function checkLetter (string, guessedLetter, correctGuesses, incorrectGuesses) {
    
}


function maskLetters(string) {
    let masked = []
    string = string.split(' ')

    for (let i = 0; i < string.length; i++) {
        let letters = string[i].split('')
        for (let j = 0; j < letters.length; j++) {
            if (letters[j].toLowerCase() !== letters[j].toUpperCase()) {
                letters[j] = '.'
            }
        }
        masked.push(letters.join(''))
    }
    return masked.join(' ')
}




function playGame (guessObj, wrongCount) {
    let maskedWord = maskLetters(guessObj.words)

    while (wrongCount <= 8) {
        console.clear()
        printHangman(wrongCount)
        console.log(`${maskedWord}      Category: ${guessObj.category}\n`)
        printGuessed(wrongCount, incorrectGuesses)
        let guessedLetter = prompt('Please enter letter to guess: ')
        //checkLetter(maskedWord, guessedLetter, correctGuesses, incorrectGuesses)
    }
    
}


function main() {
    let menuNum = mainMenu()
    let guessObj = getWords(menuNum)
    playGame(guessObj, wrongCount)
}
