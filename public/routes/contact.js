const myserverurl = 'http://localhost:5500';

const profile = document.getElementById('profile');

profile.onclick = function() {
    location.assign(`${myserverurl}/about`);
}
console.log('hi')