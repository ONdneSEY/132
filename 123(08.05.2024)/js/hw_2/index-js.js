const multiplesOf5 = num =>{
    for(let i = 0; i <= num; i++){
        if(i % 5 ===0 ){
            console.log(i);
        }
    }
}
const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

const getInput = () =>{
    let input;
        input= prompt("Введіть ціле число: ");
    return input;
}
const getInput1Numder =() =>{
   let input;
        input = prompt("Введіть перше число для проміжутку:");
    return input;
}
const getInput2Numder =() =>{
    let input;
         input = prompt("Введіть друге число для проміжутку:");
     return input;
 }

const main = () =>{
    let number;
    do{
        number = getInput(number);
    }while(number === null);
    
    console.log("Числа кратін 5-ти:");
    multiplesOf5(number);

    let m, n;
    do{
       m = getInput1Numder();
       n = getInput2Numder(); 
    }while (m ===0 || n === null || m >=n);

    console.log("Проміжок від", m,"до", n,":");
    for(let i=m; i<= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

main();