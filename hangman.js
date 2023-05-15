const prompt = require('prompt-sync')()
console.clear()

let correctGuesses = []
let incorrectGuesses = []
let wrongCount = 0

main()

// Prints main menu. Prompts user to enter menu selection until valid option chosen
function mainMenu () {
    let menuChoice = 0

    while (!(menuChoice >= 1) || !(menuChoice <= 4)) {
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
            4   Exit

`)
        menuChoice = prompt('Please enter number of menu selection: ')
    }
    return menuChoice
}


function getWords (menuNum) {
    
    switch (menuNum) {
        case '1':
            return enterWords()
        case '2':
            return {words: 'category', category: 'category'}
        case '3':
            return {words: 'random', category: 'random'}
        case '4':
            console.clear()
            process.exit()
    }
}


function enterWords () {
    // needs punctuation/number/not single letter checks
    console.clear()
    console.log(`\n`)
    let guessInfo = {}
    guessInfo.words = prompt('Please enter text to be guessed: ').toUpperCase()
    console.log(`\n`)    
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
    console.log(`    Incorrect guesses: ${wrongCount} / 8`)
    console.log(`    Incorrectly guessed letters: ${incorrectGuesses}\n`)
}


function checkLetter (maskedStr, strToGuess, guessedLetter) {
    if (strToGuess.includes(guessedLetter)) {
        if (!maskedStr.includes(guessedLetter)) {
            correctGuesses.push(guessedLetter)
        }
    } else if (!incorrectGuesses.includes(guessedLetter)){
        incorrectGuesses.push(guessedLetter)
        wrongCount++
    }
}

// Takes in a string and converts all letters to '.' leaving spaces unchanged
function maskLetters(string) {
    let masked = []
    string = string.toUpperCase().split(' ')

    for (let i = 0; i < string.length; i++) {
        let letters = string[i].split('')
        for (let j = 0; j < letters.length; j++) {
            if (letters[j].toLowerCase() !== letters[j].toUpperCase() && !correctGuesses.includes(letters[j])) {
                letters[j] = '.'
            }
        }
        masked.push(letters.join(''))
    }
    return masked.join(' ')
}


function replay () {
    let replay = prompt('    Play again? (Y/N): ')
        if (replay.toUpperCase() === 'Y') {
            main()
        } else {
            console.clear()
            process.exit()
        }
}


function playGame (guessObj) {
    while (wrongCount <= 8) {
        let maskedWord = maskLetters(guessObj.words)
        console.clear()
        printHangman(wrongCount)
        console.log(`    >> ${maskedWord}      Category: ${guessObj.category}\n`)
        printGuessed(wrongCount, incorrectGuesses)
        if (maskedWord === guessObj.words) {
            console.log('    C O N G R A T U L A T I O N S !')
            console.log(`    You successfully guessed: ${guessObj.words}\n`)
            replay()
        }
        if (wrongCount < 8) {
            let guessedLetter = prompt('    Please enter letter to guess: ').toUpperCase()
            if (guessedLetter.length > 1) {
                playGame(guessObj)
            }
            checkLetter(maskedWord, guessObj.words, guessedLetter, incorrectGuesses)
        } else {
            console.log('    G A M E   O V E R !')
            console.log(`    The answer was: ${guessObj.words}\n`)
            replay()
        }
    }
}


function main() {
    correctGuesses = []
    incorrectGuesses = []
    wrongCount = 0
    let menuNum = mainMenu()
    let guessObj = getWords(menuNum)
    playGame(guessObj)
}
