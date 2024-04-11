let contact = document.getElementById('contact');
let success = document.getElementById('success');
let fail = document.getElementById('fail');
let contactForm = document.getElementById('contact-form');
let heading = document.getElementById('contact-heading');

function sendEmail(contactForm) {
    emailjs.send('service_o8a8nba', 'template_3def7nx', {
        'from_name': contactForm.name.value,
        'to_name': 'Holly',
        'user_email': contactForm.email.value,
        'message': contactForm.message.value,
    })
    .then (
        function(response) {
            console.log(response)
            success.classList.remove('hide');
            contact.classList.add('hide'); 
            heading.classList.add('hide');
        },
        function (error) {
            console.log(error)
            fail.classList.remove('hide');
            contact.classList.add('hide'); 
            heading.classList.add('hide');
        }
    ); return false;
}