function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert('Lütfen adınızı ve soyadınızı giriniz.');
        return false;
    }
    if (!email) {
        alert('Lütfen geçerli bir e-posta adresi giriniz.');
        return false;
    }
    if (phone && phone.length !== 11) {
        alert('Telefon numarası 11 haneli olmalıdır.');
        return false;
    }

    if (!subject) {
        alert('Lütfen bir konu giriniz.');
        return false;
    }
    if (!message) {
        alert('Lütfen mesajınızı yazınız.');
        return false;
    }
    return true;
}
