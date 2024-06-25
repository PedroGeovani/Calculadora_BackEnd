import { INVALIDA_INPUT, ERROR_INPUT } from "../utils/counts"
import { numberInput, signalInput } from "../utils/verifiers"
import { algebricOperation } from "../operation/algebricOpetation"; 
import { dialogOption } from "../utils/dialogs";


export function dialogOperation(){
    let tag: number = 1;
    let signal: string = ""
    let fistNumber: number = NaN 
    let secondNumber: number = NaN
    
    while(tag != -1){
        
        if(tag == 1){
            console.log("------------------------------------")
            console.log("Operações disponíveis:")
            console.log("------------------------------------")
            console.log("Adição .............. Tecle \"+\"")
            console.log("Subtração ........... Tecle \"-\"")
            console.log("Multiplicação ....... Tecle \"* ou x\"")
            console.log("Divisão ............. Tecle \"\/\"")
            console.log("-------------------------------------")
        
            fistNumber = numberInput()
            if(!isNaN(fistNumber)){
                tag = 0
            }else{
                console.log(INVALIDA_INPUT)
                tag = dialogOption(tag)
            }
        }  
        
        if(tag == 0){
            signal = signalInput()
            if(signal != INVALIDA_INPUT && signal != ERROR_INPUT){
                tag = 2
            }else{
                console.log(INVALIDA_INPUT)
                tag = dialogOption(tag)
            }
        }
        
        if(tag == 2){
            secondNumber = numberInput()
            if(!isNaN(secondNumber)){
                console.log("Operação: "+fistNumber+" "+signal+" "+secondNumber+" = "+ algebricOperation(signal, fistNumber, secondNumber))
                tag = dialogOption(1)
            }else{
                console.log(INVALIDA_INPUT)
                tag = dialogOption(tag)
            }
        }  
    } 
}