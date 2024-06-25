import { sum, subtract, multiply, divide } from "./operator";

export function algebricOperation(signal: string, value1: number, value2: number ): number{
        switch(signal){
            case '+':
                return sum(value1,value2)
            case '-':
                return subtract(value1,value2)
            case 'x':
            case '*':
                    return multiply(value1,value2)
            case '/':
                    return divide(value1,value2)
            default: 
                    return 0
        }
}


