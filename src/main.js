document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

// Assuming you already have event listeners similar to these
document.getElementById('next2').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden'); // Now goes to step 4
});

document.getElementById('next4').addEventListener('click', function() {
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.remove('hidden'); // Now goes to step 5
});

// New event listener for navigating from Step 5 to Step 3
document.getElementById('next5').addEventListener('click', function() {
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden'); // Now goes to step 3 as the final step
});

// Adjust the Back buttons as necessary
document.getElementById('back4').addEventListener('click', function() {
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
});

// Assuming Step 3 now has a Back button to Step 5
document.getElementById('back5').addEventListener('click', function() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step5').classList.remove('hidden'); // Goes back to step 5
});
})