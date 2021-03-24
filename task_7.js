const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


//validate login
const isLoginValid = (login)=> {
    if (login.length >=4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
}

// check login unique
const isLoginUnique = (allLogins,login)=> {
    if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
}

//add user with validations
const addLogin = (allLogins,login) => {
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins,login)) {
            allLogins.push(login);
            return `${login}  Логин успешно добавлен!`
        } else {
            return `Такой логин уже используется!`
        }
    } else {
        return `Ошибка! Логин должен быть от 4 до 16 символов`;
    }
}


let login = "vlad";

console.log( addLogin(logins,login) )
// console.log(logins);