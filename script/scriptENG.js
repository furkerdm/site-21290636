function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert('Please enter your first and last name.');
        return false;
    }
    if (!email) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (phone && phone.length !== 11) {
        alert('The phone number must be 11 digits long.');
        return false;
    }

    if (!subject) {
        alert('Please enter a subject.');
        return false;
    }
    if (!message) {
        alert('Please write your message.');
        return false;
    }
    return true;
}
