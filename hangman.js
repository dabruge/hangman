const prompt = require('prompt-sync')()
console.clear()

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let incorrect = []
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
    console.log(wrongCount)
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
    }
}


function playGame (guessObj, wrongCount) {
    console.log(guessObj)
    console.log(wrongCount)
    printHangman(wrongCount)
}


function main() {
    let menuNum = mainMenu()
    let guessObj = getWords(menuNum)
    playGame(guessObj, wrongCount)
}
