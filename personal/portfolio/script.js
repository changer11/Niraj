
// user registration process start
let data=[];
function register() {
    let userfirstname = document.getElementById("First_Name").value;
    let usersecondname = document.getElementById("Second_Name").value;
    let userphonenumber = document.getElementById("Phone_Number").value;
    let useremail = document.getElementById("email").value;
    let usermessage = document.getElementById("message").value;
    let username = userfirstname + " " + usersecondname;
    console.log(username, userphonenumber, useremail, usermessage);

    if (userfirstname != "", usersecondname != "", userphonenumber != "", useremail != "") {
        alert("register successful");
        document.getElementById("First_Name").value = "";
        document.getElementById("Second_Name").value = "";
        document.getElementById("Phone_Number").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    let dataobject={
        username:username,
        useremail:useremail,
        userphonenumber:userphonenumber,
        usermessage:usermessage
    }
    data.push(dataobject);
    setdata()
}

function setdata() {
    let datavalue = JSON.stringify(data);
    localStorage.setItem("Rgistration form", datavalue);
}
// user registration process end