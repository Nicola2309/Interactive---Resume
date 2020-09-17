function sendMail(contactForm) {
    emailjs.send("Gmail", "Rosie", {
        "form_name": contactForm.name.value,
        "form_email": contactForm.emailaddress.value,
        "prject_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}