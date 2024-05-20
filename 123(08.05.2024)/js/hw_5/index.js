const NewUserCreat = () =>{
    let name = prompt ("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");
    let birthDay = prompt("Введіть вашу дату народження (приклад 'mm.dd.yyyy')");

    let newUser={
        name: name,
        lastName:lastName,
        birthDay:birthDay,
        getLogin: function(){
            return (this.name[0] + this.lastName).toLowerCase();
        },
        getAge: function() {
            let today = new Date();
            let birthDate = new Date(this.birthDay);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        getPassword: function(){
            return this.name[0] + (this.lastName + this.birthDay.slice(-4)).toLowerCase();
        }
    }

    return newUser;
}

let user = NewUserCreat();
console.log("Привіт: " + user.name);
console.log("Ваш вік: " + user.getAge());
console.log("Ваш логін: "+ user.getLogin());
console.log("Ваш пароль: "+ user.getPassword())
