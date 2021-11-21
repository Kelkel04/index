function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("yourName").value,
        to_name: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    }
    emailjs.send('service_nawcr6l', 'template_l0sqqdn', tempParams)
        .then(function(res) {
            console.log("success", res.status);
        })
}