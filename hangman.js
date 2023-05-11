const prompt = require('prompt-sync')()
console.clear()

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let incorrect = []

mainMenu()

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

    menuChoice = prompt('Please enter number selection: ')

    if (!(menuChoice >= 1) || !(menuChoice <= 3)) {
        console.clear()
        mainMenu()
    } else {
        return menuChoice
    }
}













function main() {
    
}



/*
console.log(`
 _    _
| |  | |                                        
| |__| | __ _ _ __   __ _ _ __ ___   __ _ _ __  
|  __  |/ _' | '_ \\ / _' | '_ ' _ \\ / _' | '_ \\ 
| |  | | (_| | | | | (_| | | | | | | (_| | | | |
|_|  |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|
                     __/ |                      
                    |___/             
`)


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