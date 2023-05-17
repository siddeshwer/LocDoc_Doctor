//Function to update profile
var url = 'http://localhost:8085/doctor/details/'+sessionStorage.getItem("doctor");
fetch(url)
    .then(response =>
    {
        return response.json();
        console.log(response.json());
    })
    .then(users =>
    {
        var doctor_name = document.getElementById("doctor-name");
        doctor_name.value= users.name;
        var doctor_email =document.getElementById("doctor-email");
        doctor_email.value = users.email;
        var doctor_phone = document.getElementById("doctor-phone");
        doctor_phone.value= users.phone;
        var doctor_address =document.getElementById("doctor-address");
        doctor_address.value = users.address;
        var doctor_speciality = document.getElementById("doctor-speciality");
        doctor_speciality.value= users.speciality;
        var doctor_degree =document.getElementById("doctor-degree");
        doctor_degree.value = users.degree;
        console.log(users);
});


function updateDoctorProfile(){
    var doctor_name = document.getElementById("doctor-name").value;
    var doctor_email =document.getElementById("doctor-email").value;
    var doctor_phone = document.getElementById("doctor-phone").value;
    var doctor_address =document.getElementById("doctor-address").value;
    var doctor_degree = document.getElementById("doctor-degree").value;
    var doctor_speciality =document.getElementById("doctor-speciality").value;


    var settings = {
        "url": "http://localhost:8085/doctor/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "name":doctor_name,
            "phone":doctor_phone,
            "email":doctor_email,
            "address":doctor_address,
            "degree":doctor_degree,
            "speciality":doctor_speciality
        }),
    };

    $.ajax(settings).done(function (response) {
        alert("Account Updated");
        location.reload();
        console.log(response);
    });


}

// Function to convert JSON data to HTML table

