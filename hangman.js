const prompt = require('prompt-sync')()
console.clear()

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let incorrect = []

main()


function mainMenu () {
    let menuChoice = 0

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

    if (!(menuChoice >= 1) || !(menuChoice <= 3)) {
        console.clear()
        mainMenu()
    } else {
        return menuChoice
    }
}


function getWords (menuNum) {
    switch (menuNum) {
        case '1':
            return enterWords()
        case '2':
            return 'category'
        case '3':
            return 'random'
        default:
            console.log('Invalid word')
    }
}

function enterWords () {
    // needs punctuation/number checks
    let guessInfo = {}
    guessInfo.words = prompt('Please enter text to be guessed: ')
    guessInfo.category = prompt('Please enter category of entry (optional): ')
    return guessInfo
}

function playGame (guessObj) {
    
}





function main() {
    let menuNum = mainMenu()
    let guessObj = getWords(menuNum)
    playGame(guessObj)
}



/*
console.log(`
        __________
        | /      |
        |/       0
        |     ---|---
        |        |
        |       / \\
        |      /   \\
        |
    ____|___________`)

    */