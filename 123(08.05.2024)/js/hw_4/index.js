function createNewUser() {
    let firstName = prompt("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin: function() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        }
    };

    return newUser;
}

let user = createNewUser();
console.log("Привіт: " + user.firstName);
console.log("Ваш логін: "+ user.getLogin())