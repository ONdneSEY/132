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

const main = () =>{
    let number;
    do{
        number = prompt("Введіть ціле число: ");
    }while(number === null);
    
    console.log("Числа кратін 5-ти:");
    multiplesOf5(number);

    let m, n;
    do{
       m = prompt("Введіть перше число для проміжутку:");
       n = prompt("Введіть друге число для проміжутку:");; 
    }while (m ===0 || n === null || m >=n);

    console.log("Проміжок від", m,"до", n,":");
    for(let i=m; i<= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

main();