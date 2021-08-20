
console.log("Random Passwords in javascdript 🚀")

let lowercase_alphabets = 'abcdefghijklmnopqrstuvwxyz';
let uppercase_alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let digits = '0123456789';
let punctuations = '!"#$%&()*+,-./:;<=>?@[`\\`]^_`{|}~';
let keywords = `${lowercase_alphabets}${uppercase_alphabets}${digits}${punctuations}`;

function generateRandomPasswords(str,password_length){

    let list_keywords = str.split("");
    let password = ""
    for(let i=0;i<password_length;i++){
        let number = (Math.floor(Math.random()*list_keywords.length));

        password += list_keywords[number]
    }
}

