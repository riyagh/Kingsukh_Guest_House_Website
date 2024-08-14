document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openWhatsApp() {
    const phoneNumber = "+919007062180"; // Replace with the phone number of the website owner
    const message = encodeURIComponent("Hello, I'm interested in booking a room at King Sukh Guest House.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

document.getElementById('address-link').addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelector('#map').scrollIntoView({
        behavior: 'smooth'
    });

    const mapElement = document.querySelector('#map');
    mapElement.style.transition = 'background-color 0.5s ease';
    mapElement.style.backgroundColor = '#ffeb3b'; 

    setTimeout(function() {
        mapElement.style.backgroundColor = '';
    }, 1000);
});


