const NewUserCreat = () =>{
    let name = prompt ("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");

    let newUser={
        name: name,
        lastName:lastName,
        getLogin: function(){
            return (this.name[0] + this.lastName).toLowerCase();
        }
    }

    return newUser;
}

let user = NewUserCreat();
console.log("Привіт: " + user.name);
console.log("Ваш логін: "+ user.getLogin());