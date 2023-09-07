
// user registration process start
function register() {
    let userfirstname = +document.getElementById("First_Name").value;
    let usersecondname = +document.getElementById("Second_Name").value;
    let userphonenumber = +document.getElementById("Phone_Number").value;
    let useremail = +document.getElementById("email").value;
    let usermessage = + document.getElementById("message").value;

    let username = userfirstname + " " + usersecondname;

    console.log(username, userphonenumber, useremail, usermessage);

    if (userfirstname != "", usersecondname != "", userphonenumber != "", useremail != "") {
        alert("register successful");
        
    document.getElementById("First_Name").value="";
    document.getElementById("Second_Name").value="";
    document.getElementById("Phone_Number").value="";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    }
    setdata(username, userphonenumber, useremail, usermessage)
}

function setdata(username, userphonenumber, useremail, usermessage) {
    let data = {
        usernamevalue: username,
        userphonenumbervalue: userphonenumber,
        useremailvalue: useremail,
        usermessagevalue: usermessage,
    }
    let datavalue = JSON.stringify(data);
    localStorage.setItem("Rgistration form", datavalue);
}
function getdata() {
    let getdatavalue = localStorage.getItem("Rgistration form");
    let uservalue = JSON.parse(getdatavalue);
    console.log(uservalue);
    document.getElementById("table").innerHTML += `   <tr>
    <th>${uservalue.usernamevalue}</th>
    <th>${uservalue.userphonenumbervalue}</th>
    <th>${uservalue.useremailvalue}</th>
    <th>${uservalue.usermessagevalue}</th>
</tr>`
}
// user registration process end