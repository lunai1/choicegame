var name
var text = document.getElementById('story-container');
var button = document.getElementById('button-container');
function pre() {
    text.innerHTML = 'WELCOME TO GLASS COFFIN.<br>This is a choice led game, so choose wisely.<br> <input type="text" id="name_select"  placeholder="Choose Your Name" />';
    button.innerHTML = "<button id='name_submit' onclick='start()'>START</button>";
}
function start() {
    name = document.getElementById('name_submit').value;
    text.innerHTML = "<h1>You wake up in a glass coffin.</h1><h3>You can\'t remember your name.</h3><h3>You have no idea who you are, how you got here, or what is happening</h3><h3>The coffin has opaque sides, but the front is transparent glass, and as you look around,<br>you realize that there are others looking around, or hitting the glass, or sitting with a dazed look.</h3><h2>Suddenly the front panel of all the coffins crash down, and guards swarm you, dragging you into a line of people who have been in the coffins.</h2><h2>Do stay in the line or try to escape?</h2>";
    button.innerHTML = "<button class='choice_button' onclick='c1()'>STAY</button><button class='choice_button' onclick='c2()'>ESCAPE</button>";
}
function c1() {
  text.innerHTML = '<h1>You choose to stay in line</h1><h3>A woman walks out of a door in front of you. She has no hair and her eyes are like lazers,<br>boring holes through the prisoners. Her eyes reach you and keep on going. Then she walks over to the start of the line<br>and walks along, staring daggers into the prisoners. She reaches you then continues on. She stops at the person three away from you.<br>She looks at the rest without moving, then walks away from the line, then says to  a nearby gaurd, \"Cull them.\"<br>He gives a signal, and the guards drag the people that weren\'t approved into a room, where the survivors could hear screaming and shooting. <br>  The woman walks out of the room, and the guards move down the line, providing names and clothes. It was then that you realized that you were naked and cold.<br>The guards reach you and give you clothes and say,</h3><h2> Your name from now on is ' + name + '.';
  button.innerHTML = "<button class='choice_button' onclick='c3()'>...</button>";
}
function c2() {
  text.innerHTML = "<h1>You break out of the line,</h1><h3> sprinting behind the line of people. There are<h3 class='highlight'> 3</h3> doors in front of you, but you have to choose quickly.</h3><h2> The guards are shooting!</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c4()'>DOOR 1</button><button class='choice_button' onclick='c5()'>DOOR 2</button><button class='choice_button' onclick='c6()'>DOOR 3</button> ";  
}

