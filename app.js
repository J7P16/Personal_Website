function hamburg() {
    // Show the dropdown
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
    
    // Hide the hamburger icon and show the cancel icon
    document.querySelector('.hamburg').style.display = 'none';
    document.querySelector('.cancel').style.display = 'block';
}

function cancel() {
    // Hide the dropdown by translating it back up
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
    
    // Show the hamburger icon and hide the cancel icon
    document.querySelector('.hamburg').style.display = 'block';
    document.querySelector('.cancel').style.display = 'none';
}
