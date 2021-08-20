
console.log("Random Passwords in javascript 🚀")

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
    return password
}

let password_length = document.querySelector("#Plength");
let btn = document.querySelector("#generate");
let display_password = document.querySelector("#createdp");

// console.log(password_length,btn,display_password)

btn.addEventListener("click",function(){
    
    if(password_length.value!==null){
        let Pvalue = password_length.value;
        let password_generated = generateRandomPasswords(keywords,Pvalue);
        // console.log(password_generated)
        display_password.innerHTML = `<h5>Your password:</h5> ${password_generated}`;
    }else{
        alert("Password-length is missing")
    }
    password_length.value=""
})