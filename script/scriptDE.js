function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert('Bitte geben Sie Ihren Vor- und Nachnamen ein.');
        return false;
    }
    if (!email) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return false;
    }
    if (phone && phone.length !== 11) {
        alert('Die Telefonnummer muss 11-stellig sein.');
        return false;
    }

    if (!subject) {
        alert('Bitte geben Sie einen Betreff ein.');
        return false;
    }
    if (!message) {
        alert('Bitte schreiben Sie Ihre Nachricht.');
        return false;
    }
    return true;
}
