const myserverurl = 'http://localhost:5500';

const special = document.getElementById('special');

special.onclick = function() {
    location.assign(`${myserverurl}/about`);
}