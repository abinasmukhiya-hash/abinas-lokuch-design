document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('responseMessage').textContent = "Your message has been sent successfully!";
    e.target.reset();
});
