//Declarações de variáveis globais
let keyboardInput  = require('prompt-sync')();

export function dialogOption(tag : number){     
    let op = keyboardInput("Deseja tentar novamente? (S/N) ")                    
    if( op != 's' && op != 'S'){
        return -1
    }     
    return tag
}