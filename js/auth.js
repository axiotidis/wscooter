var email= "axiotidis@sch.gr";
var password = "nki3956";
// Sign in existing user
firebase.auth().signInWithEmailAndPassword(email, password)
 .catch(function(err) {
   alert("Login failed");
 });
location.replace("app.html");
