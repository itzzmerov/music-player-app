//Submit Button
function Verify() {
    var userRef = "admin";
    var passRef = "admin";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef && pass == passRef) {
        alert("Welcome to MusiKalye!");
        window.location.href = "home.html";
    } else {
        alert("Incorrect username or password!");
    }
};