function validate(){
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var interest = document.getElementById("interest").value;
    var about = document.getElementById("about").value;


var params = new URLSearchParams({
    name: name1,
    email: email,
    dob: dob,
    interest: interest,
    about: about
});

window.open("summary.html?" + params.toString());

try{
    if(this.name == "") throw "Name is empty please type it";
    if(email == "") throw "Email is empty please type email";
    if(dob == "") throw "Date of birth is empty";
    if(this.interest == "") throw "please select an interest";
    if(this.about == "") throw "About is empty";
}
catch(err){
    alert(err);
}

}