document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var model = document.getElementById("myModel");
var span = document.querySelector(".close");
var btn = document.getElementById("signupButton");

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

btn.addEventListener('click', function() {
    model.style.display = "block";
    document.getElementById('overlay').style.display = "block";
});

document.getElementById('next1').addEventListener('click', function() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
});

document.getElementById('back1').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
});

document.getElementById('next2').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
});

document.getElementById('back2').addEventListener('click', function() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
});

document.getElementById('submit3').addEventListener('click', function() {
    //submit logic
});

