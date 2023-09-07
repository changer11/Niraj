function getdata() {
    let getdatavalue = localStorage.getItem("Rgistration form");
    let datavalue = JSON.parse(getdatavalue);
    for (i = 0; i < datavalue.length; i++) {
        let uservalue = datavalue[i];
        console.log(uservalue);
        document.getElementById("table").innerHTML += `<tr>
        <th>${uservalue.username}</th>
        <th>${uservalue.userphonenumber}</th>
        <th>${uservalue.useremail}</th>
        <th>${uservalue.usermessage}</th>
    </tr>`
    }
    document.getElementById("btn").disabled = true;
}