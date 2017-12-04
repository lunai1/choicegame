var name="";
function first_button() {
    var name = document.getElementById("name_select");
    window.location.href = 'introduction.html';
}

document.getElementById('say_name').textContent = "Your name from this point on is " + name + ". Please put on your Moniter.";
