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
