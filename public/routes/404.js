const myserverurl = 'http://localhost:5500';

const special = document.getElementById('about');

special.onclick = function() {
    location.assign(`${myserverurl}/about`);
}