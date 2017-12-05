var name
var text = document.getElementById('story-container');
var button = document.getElementById('button-container');
function pre() {
    text.innerHTML = 'WELCOME TO GLASS COFFIN.<br>This is a choice led game, so choose wisely.<br> <input type="text" id="name_select"  placeholder="Choose Your Name" />';
    button.innerHTML = "<button id='name_submit' onclick='start()'>";
}
function start() {
    text.innerHTML = "<h1>You wake up in a glass coffin.</h1><h3>You can\'t remember your name.</h3><h3>You have no idea who you are, how you got here, or what is happening</h3><h3>The coffin has opaque sides, but the front is transparent glass, and as you look around,<br>you realize that there are others looking around, or hitting the glass, or sitting with a dazed look.</h3><h2>Suddenly the front panel of all the coffins crash down, and guards swarm you, dragging you into a line of people who have been in the coffins.</h2><h2>Do stay in the line or try to escape?</h2>";
    button.innerHTML = "<button class='choice_button' onclick='c1()'>STAY</button><button class='choice_button' onclick='c2()'>ESCAPE</button>";
}
