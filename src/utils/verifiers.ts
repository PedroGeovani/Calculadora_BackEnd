import { INTEIRATION_DIALOG_NUMBER, INTEIRATION_DIALOG_SIGNAL, INVALIDA_INPUT, ERROR_INPUT } from "./counts"


//Declarações de variáveis globais
let keyboardInput  = require('prompt-sync')();

//Declaração de funções
export function numberInput(): number {
    let value: number = 0
    try {

        let str = keyboardInput(INTEIRATION_DIALOG_NUMBER)
        value = Number(String(str).replace(",","."))
        if(!isNaN(value)){
            return value
        }else{
            return NaN
        }
    } catch (error) {
        console.log(INVALIDA_INPUT)
        return NaN
    }    
}

export function signalInput(): string {
    let value: string = ""
    try {
        value = String(keyboardInput(INTEIRATION_DIALOG_SIGNAL))
        if(value == "+" || value == "-" || value == "x" || value == "*" || value == "/"){
            return value        
        }else{
            return INVALIDA_INPUT  
        }
    }catch(error){
          return (ERROR_INPUT + ": "+console.error())
    }
}