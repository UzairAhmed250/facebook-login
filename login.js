// let passKey = document.getElementById("password")
function varify(pass) {
    var re = /(?=.*\d)(?=.*[a-zA-Z])/

    return re.test(pass)
}
function login() {

    const input = document.getElementById("userName").value;
    const passKey = document.getElementById("password").value;
    
    if (input == "") {
        alert("Please Enter your Name or Email address")
    }

    else if (passKey == "") {
        alert("Please Ener your password")
    }
    const storeduser = JSON.parse(localStorage.getItem("user"));
    if (input == storeduser.email && passKey == storeduser.password) {
        console.log("account verified");
    }
    else 
        {
            alert("Wrong email and password")
            localstorage2();
        }
    function localstorage2() {
        const loginobj = {
            userName: input,
            password: passKey,
        };
        const objtostring = JSON.stringify(loginobj);
        localStorage.setItem("name", objtostring);
        console.log(objtostring);
    }
}
function passcode() {
    let pass = document.getElementById("newpass").value;
    if (!isNaN(pass.charAt(0))) //>= 0 || pass.charAt(0) <= 0) {
        {alert("password can't begin with number.");
        }
        else if (pass.length < 8) {
            alert("password should be more then 8 word or long");
        }
        else if (!varify(pass)) {
            alert("password should contain alphabet and numeric value")
        }
        location.replace("./login.html")
    }
    
    function getEmail() {
        const userName = document.getElementById("fName").value;
        const lastName = document.getElementById("sName").value;
        const mail = document.getElementById("mail").value;
        const password = document.getElementById("newpass").value;
        
        if (userName === "" || lastName === "" || mail === "" || password === "") {
            alert("Please fill out these fields.");
        } 
        else {
            // Create an object with the user data
            const userData = {
                firstName: userName,
                lastName: lastName,
                email: mail,
                password: password,
            };
            
            // Convert the object to a JSON string
            const userDataString = JSON.stringify(userData);
            
            // Store the JSON string in local storage
            localStorage.setItem("user", userDataString);
            
        // Log the object for verification
        console.log(userData);
    }
    passcode();
}

// function getEmail(){
//     const userName = document.getElementById("fName").value;
//     const lastName = document.getElementById("sName").value;
//     const mail = document.getElementById("mail").value;
//     const password = document.getElementById("newpass").value;
//     const localStorage1 = [
//         {firstNam: userName},{lastName: lastName},{email: mail},{password: password}
//     ]
//     if(userName == "" || lastName == "" || mail == "" || password == "" ){
//         alert("Please fill out these fields.")
//     }
//     else{
//         localStorage.setItem("local", localStorage1);
//         console.log(localStorage1);

// localStorage.setItem("firstName", userName);
// localStorage.setItem("surName", lastName);
// localStorage.setItem("address", mail);
// localStorage.setItem("password", password);
// console.log(localStorage.getItem("firstName"));
// console.log(localStorage.getItem("surName"));
// console.log(localStorage.getItem("address"));
// console.log(localStorage.getItem("password"));
// passcode();
//     }
// }

// function loginobj(){
// const userName = document.getElementById("fname").value;
// const lastName = document.getElementById("sName").value;
// const mail = document.getElementById("mail").value;
// const password = document.getElementById("newpass").value;

//     const userObj = {
//         firstName: userName,
//         surName: lastName,
//         address: mail,
//         password: password,
//     }
//         localStorage.setItem("object", userObj);
//          localStorage.getItem("object");
//         // const eMail = localStorage.setItem("mail");
//         // const pas = localStorage.setItem("newpass")

// }