//Declaração de constante
var INTEIRATION_DIALOG_NUMBER = "Digite um numero: ";
var INTEIRATION_DIALOG_SIGNAL = "Digite um sinal: ";
var INVALIDA_INPUT = "Entrada de dados invalida!";
var ERROR_INPUT = "Erro de entrada!";
//Declarações de variáveis globais
var keyboardInput = require('prompt-sync')();
//Declaração de funções
function numberInput() {
    var value = 0;
    try {
        var str = keyboardInput(INTEIRATION_DIALOG_NUMBER);
        value = Number(String(str).replace(",", "."));
        if (!isNaN(value)) {
            return value;
        }
        else {
            return NaN;
        }
    }
    catch (error) {
        console.log(INVALIDA_INPUT);
        return NaN;
    }
}
function signalInput() {
    var value = "";
    try {
        value = String(keyboardInput(INTEIRATION_DIALOG_SIGNAL));
        if (value == "+" || value == "-" || value == "x" || value == "*" || value == "/") {
            return value;
        }
        else {
            return INVALIDA_INPUT;
        }
    }
    catch (error) {
        return (ERROR_INPUT + ": " + console.error());
    }
}
function algebricOperation(signal, value1, value2) {
    switch (signal) {
        case '+':
            return (value1 + value2);
        case '-':
            return (value1 - value2);
        case 'x':
        case '*':
            return (value1 * value2);
        case '/':
            return (value1 / value2);
        default:
            return 0;
    }
}
function dialogOption(tag) {
    var op = keyboardInput("Deseja tentar novamente? (S/N) ");
    if (op != 's' && op != 'S') {
        return -1;
    }
    return tag;
}
function dialogOperation() {
    var tag = 1;
    var signal = "";
    var fistNumber = NaN;
    var secondNumber = NaN;
    while (tag != -1) {
        if (tag == 1) {
            console.log("------------------------------------");
            console.log("Operações disponíveis:");
            console.log("------------------------------------");
            console.log("Adição .............. Tecle \"+\"");
            console.log("Subtração ........... Tecle \"-\"");
            console.log("Multiplicação ....... Tecle \"* ou x\"");
            console.log("Divisão ............. Tecle \"\\\"");
            console.log("-------------------------------------");
            fistNumber = numberInput();
            if (!isNaN(fistNumber)) {
                tag = 0;
            }
            else {
                console.log(INVALIDA_INPUT);
                tag = dialogOption(tag);
            }
        }
        if (tag == 0) {
            signal = signalInput();
            if (signal != INVALIDA_INPUT && signal != ERROR_INPUT) {
                tag = 2;
            }
            else {
                console.log(INVALIDA_INPUT);
                tag = dialogOption(tag);
            }
        }
        if (tag == 2) {
            secondNumber = numberInput();
            if (!isNaN(secondNumber)) {
                console.log("Operação: " + fistNumber + " " + signal + " " + secondNumber + " = " + algebricOperation(signal, fistNumber, secondNumber));
                tag = dialogOption(1);
            }
            else {
                console.log(INVALIDA_INPUT);
                tag = dialogOption(tag);
            }
        }
    }
}
//Execução principal
console.log("=====================================");
console.log("CALCULADORA");
console.log("=====================================");
dialogOperation();
console.log("-------------------------------------");
console.log("Saida ser erro!");
