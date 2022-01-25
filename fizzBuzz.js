function fizzBuzz(valor){

    if(typeof valor !== 'number')
    return 'n é numero';

    if(valor%5===0 && valor%3===0){      
        return 'FizzBuzz';
    }
    else if(valor%5===0){
        return 'Buzz';
    }
    else if(valor%3===0){
       return 'Fizz';
    }
    else{
        return 'nem fizz nem buzz';
    }
}

console.log(fizzBuzz(9)); //deve retornar Fizz
console.log(fizzBuzz(10)); //deve retornar Buzz
console.log(fizzBuzz(15)); //deve retornar FizzBuzz
console.log(fizzBuzz(22)); //deve retornar nem fizz nem buzz
console.log(fizzBuzz(false)); //deve retornar n é numero
