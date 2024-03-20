document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var model = document.getElementById("myModel");
var btn = document.getElementById("signinButton");
var span = document.querySelector(".close");
var signupBtn = document.getElementById("signupButton");

btn.addEventListener('click', function() {
    model.style.display = "block";
    document.getElementById('overlay').style.display = "block";
});

span.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target == model || event.target == document.getElementById('overlay')) {
        closeModal();
    }
});

function closeModal() {
    model.style.display = "none";
    document.getElementById('overlay').style.display = "none";
}

signupBtn.addEventListener('click', function() {
    model.style.display = "block";
    document.getElementById('overlay').style.display = "block";
});

