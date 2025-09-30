// Mobile Navigation Menu
function hamburg() {
    document.querySelector('.dropdown').style.display = 'block';
    document.querySelector('.hamburg').style.display = 'none';
    document.querySelector('.cancel').style.display = 'block';
}

function cancel() {
    document.querySelector('.dropdown').style.display = 'none';
    document.querySelector('.hamburg').style.display = 'block';
    document.querySelector('.cancel').style.display = 'none';
}

// Close dropdown when clicking on a link
document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        cancel();
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    
    if (dropdown.style.display === 'block' && 
        !dropdown.contains(event.target) && 
        !hamburg.contains(event.target)) {
        cancel();
    }
});