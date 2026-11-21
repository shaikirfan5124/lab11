// Three registered user accounts
const users = [
    {
        username: "irfan",
        password: "123456"
    },
    {
        username: "aman",
        password: "aman24"
    },
    {
        username: "turbo",
        password: "5124"
    }
];

// Login validation
document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = users.find(function(u) {
        return u.username === username &&
               u.password === password;
    });

    let message = document.getElementById("message");

    if (user) {
        message.style.color = "green";
        message.innerHTML =
            "Login Successful! Welcome " + user.username;
    }
    else {
        message.style.color = "red";
        message.innerHTML =
            "Invalid Username or Password!";
    }
});