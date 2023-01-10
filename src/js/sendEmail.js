const form = document.getElementById('ContactUsForm');

function sendEmail(event) {
    console.log("there");
    emailjs.sendForm('service_zs0acb5', 'template_6s29vch', form, 'WTXJC08z8ue_wadl2');
    event.preventDefault();
    form.reset();
};

form.addEventListener('submit', sendEmail);