let randomNumber = Math.floor(Math.random()* 100) +1
console.log(randomNumber);
const btn =document.querySelector('#btn')
const input =document.querySelector('#input')
const result =document.querySelector('#result')

btn.addEventListener('click', ()=>{
    const userGuess = Number(input.value)

    if(!userGuess || userGuess<1 || userGuess >100){
       result.innerText = 'Ведите число от 1 до 100! 😑'
        
    }else if(userGuess == randomNumber){
        result.innerText='Поздравляю! вы угадали 🤩'
        setTimeout(() => {
            randomNumber = Math.floor(Math.random()* 100) +1
            result.innerText='число обновлено! Угадайте число'
            input.value=''
        }, 3000);
    }else if (userGuess<randomNumber){
        result.innerText=`Число ${userGuess} больше 🥱`
        input.value=''
    }else{
        result.innerText =`Число ${userGuess} меньше 😪`
        input.value=''
    }
}
)
