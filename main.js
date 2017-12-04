var name="";
function first_button() {
    var name = document.getElementById("name_select");
    window.location.href = 'introduction.html';
}
window.onload = function() {
  document.getElementById('say_name').innerHTML = "Your name from this point on is " + name + ". Please put on your Moniter.";
}
