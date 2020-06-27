function calculator(number1, number2, znak) {
    number1 = +number1;
    number2 = +number2;
    let result = 0;
    switch (znak) {
        case "/":
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "%":
            result = (number1 / 100) * number2;
            break;
        default:
            break;
    }
    if (result == Infinity) {
        return 0;
    } else {
        return result;
    }    
}