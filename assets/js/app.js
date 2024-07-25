document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    document.querySelector('.menu-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform the actual form submission
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Message sent!');
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Oops! There was a problem submitting your form');
                    }
                })
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form');
        });
    });
});

