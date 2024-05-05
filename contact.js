let btnElement = document.getElementById("submitContactForm");
btnElement.addEventListener("click", clickSubmitForm);

function clickSubmitForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
    let concerntext = document.getElementById("concerntext").value;

    if(fname == "" || lname == "" || country == "" || concerntext == "") {
        document.getElementById("alert-section").style.display = "flex"; //displays an alert
    }
    else {
        document.getElementById("alert-section").style.display = "none";
        let userName = lname + ", " + fname;
        alert(
            "Form submitted! " + "\n\n" +
            "Name: " + userName + "\n" +
            "Country: " + country + "\n" +
            "Concern: " + concerntext
        )
    }
}