const myserverurl = 'http://localhost:5500';

const profile = document.getElementById('profile');
const contact = document.getElementById('contactbutton');
const email = document.getElementById('email');

email.onclick = function() {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nigelmun.nm@gmail.com");
}

contact.onclick = function() {
    location.assign(`${myserverurl}/contact`);
}

profile.onclick = function() {
    location.assign(`${myserverurl}/index`);
}
