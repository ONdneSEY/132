const createNewUser = () =>{
    let firstName = prompt ("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");
    let birthday = prompt("Введіть вашу дату народження (приклад 'mm.dd.yyyy')");

    let newUser={
        firstName:firstName,
        lastName:lastName,
        birthday:birthday,
        getLogin: function(){
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge: function() {
            let today = new Date();
            let birthDate = new Date(this.birthday);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        getPassword: function(){
            return (this.firstName[0] + this.lastName + this.birthday.slice(-4));
        }
    }

    return newUser;
}

let user = createNewUser();
console.log("Привіт: " + user.firstName);
console.log("Ваш вік: " + user.getAge());
console.log("Ваш логін: "+ user.getLogin());
console.log("Ваш пароль: "+ user.getPassword())
