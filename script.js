userName = prompt(`Enter name:`).trim();
if (userName === null || userName.length == 0) {
    userName = `Your name`;
}

userSurname = prompt(`Enter surname:`).trim();
if (userSurname === null || userSurname.length == 0) {
    userSurname = `Your surname`;
}

userEmail = prompt(`Enter email:`);
if (userEmail === null || userEmail.length == 0) {
    userEmail = `Email not defined`;
} else {
    userEmail = userEmail.replaceAll(` `,``).toLowerCase();
}

if (userEmail.includes(`@`) != true) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else if (userEmail.startsWith(`@`) && userEmail.endsWith(`@`)) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place, symbol @ find in last place)`;
}

userBirth = prompt(`Enter birth year:`).replaceAll(` `, ``)
if (userBirth === null || userBirth.length == 0) {
    userBirth = `Your birth year`;
}

actualYear = new Date().getFullYear();
userAge = actualYear - +(userBirth);

if (isNaN(userAge)) {
    userAge = `Your age`
}

document.write(`Full name: ${userName + ` ` + userSurname}<br>Email: ${userEmail}<br>Age: ${userAge}`);