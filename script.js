
let Fizz = 'Fizz';
let Buzz ='Buzz';
let FizzBuzz = 'FizzBuzz';

for(let i=0; i>100; i++)  {
    if (i%3==0 && i%5==0){   //https://www.html.it/pag/15220/operatori1/
        console.log(Fizz + Buzz)
    }
    else if(i%3==0){
        console.log(Fizz)
    }
    else if(i%5==0){
        console.log(Buzz)
    }
    else{
        console.log(i)
    }
}

