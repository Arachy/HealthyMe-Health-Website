// Function to validate and display error messages or a submitted message
function submitForm()
{
    var name = document.forms["ContactUs"]["Name"].value
    var email = document.forms["ContactUs"]["email"].value
    var comment = document.forms["ContactUs"]["comment"].value
    if (name == "") {
        document.getElementById("emptyName").innerHTML = "Please enter a name";
    }
    else if (email == "") {
        document.getElementById("emptyEmail").innerHTML = "Please enter an email";
    }
    else if (comment == "") {
        document.getElementById("emptyComment").innerHTML = "Comment cannot be empty";
    }
    else {
        name = ""
        email = ""
        comment = ""
        alert("Form Submitted!");
    }
}
