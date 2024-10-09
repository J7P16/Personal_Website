// Dropdown Button Work for the Navigation Bar
function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
    
    document.querySelector('.hamburg').style.display = 'none';
    document.querySelector('.cancel').style.display = 'block';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
    
    document.querySelector('.hamburg').style.display = 'block';
    document.querySelector('.cancel').style.display = 'none';
}

// Typing Animation for the Introduction Section
const texts = ["Programmer", "Developer", "AI Researcher", "Speaker"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    let displayedText = currentText.substring(0, index);
    document.getElementById('typewriter-text').textContent = displayedText;

    if (!isDeleting) {
        if (index < currentText.length) {
            index++;
            setTimeout(type, 200);
        } else {
            isDeleting = true;
            setTimeout(type, 2000);
        }
    } else {
        if (index > 0) {
            index--;
            setTimeout(type, 100);
        } else {
            isDeleting = false;
            count++;
            setTimeout(type, 500);
        }
    }
}

window.onload = function() {
    type();
};

// Modal functionality
function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close Model to Exit
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeModal();
    }
}

// EmailJS API Functionality
(function() {
    emailjs.init('wMzOnzpyE4Lk5oGwX'); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_es9ldsd', 'template_4q2v847', this, 'wMzOnzpyE4Lk5oGwX')
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
            closeModal();
        }, function(error) {
            alert('Failed to send the message. Please try again.');
            console.error('EmailJS Error:', error);
        });
});
