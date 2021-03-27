storage = window.localStorage;
document.addEventListener('DOMContentLoaded', function() {
    if (!storage.getItem('presses')) {storage.presses=0} else {document.getElementById('display').innerHTML = storage.presses;}
    document.querySelector('body').addEventListener('keypress', function() {
        storage.presses = storage.presses == 9999999999999 ? 0 : parseInt(storage.presses) + 1;
        document.getElementById('display').innerHTML = storage.presses;
        console.log(storage.presses);
    });
    document.getElementById('button').addEventListener('click', function() {
        storage.presses = 0;
        document.getElementById('display').innerHTML = storage.presses;
    })
});