let contact = document.getElementsByClassName('contact')
let success = document.getElementsByClassName('success')
let fail = document.getElementsByClassName('fail')
let contactForm = document.getElementById('contact-form')

function sendEmail(contactForm) {
    emailjs.send("service_o8a8nba", "template_3def7nx", {
        "from_name": contactForm.name.value,
        "to_name": "Holly",
        "user_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("ERROR", error);
        }
    ); return false;
}