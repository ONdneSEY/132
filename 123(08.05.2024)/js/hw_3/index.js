
const chek = oper =>{
    if(oper !== '+'||'-'||'*'||'/')
        return false;
}

const solutions = (num1, num2, oper)=>{
    switch(oper){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Операція введена не коректно';      
    }
}
const main = () =>{
    let number1;
    let number2;
    let operation;
    do{
        number1 = prompt("Ведіть перше число");
    }while (number1 === null);

    do{
        operation = prompt("Введіть операцію");
    }while(operation === null && chek);
    
    do{
        number2 = prompt("Ведіть друге число");
    }while(number2 === null);

    let result = solutions(number1, number2, operation)
    console.log(number1, operation , number2,"=", result)
}

main();