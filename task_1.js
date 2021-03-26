const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

//add new props
user.mood = "happy";


//change props 'hobby':
user['hobby'] = "skydiving";


//change props "premium"
user.premium = false;

//version 1:
let keys = Object.keys(user);
for (let key of keys) {
    console.log(`${key}  ${user[key]}`);
}


//version 2:
// for (let key in user) {
//     console.log(`${key} : ${user[key]}`);
// }


