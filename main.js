var name
var text = document.getElementById('story-container');
var button = document.getElementById('button-container');
function pre() {
    text.innerHTML = 'WELCOME TO GLASS COFFIN.<br>This is a choice led game, so choose wisely.<br> <input type="text" id="name_select"  placeholder="Choose Your Name" required/>';
    button.innerHTML = "<button id='name_submit' onclick='start()'>START</button>";
}
function start() {
    name = document.getElementById('name_select').value;
    text.innerHTML = "<h1>You wake up in a glass coffin.</h1><h3>You can\'t remember your name.</h3><h3>You have no idea who you are, how you got here, or what is happening</h3><h3>The coffin has opaque sides, but the front is transparent glass, and as you look around,<br>you realize that there are others looking around, or hitting the glass, or sitting with a dazed look.</h3><h2>Suddenly the front panel of all the coffins crash down, and guards swarm you, dragging you into a line of people who have been in the coffins. You are naked and cold, and there is a pile of clothes on the table, but is is surrounded by guards</h2><h2>Do stay in the line or try to escape?</h2>";
    button.innerHTML = "<button class='choice_button' onclick='c1()'>STAY</button><button class='choice_button' onclick='c2()'>ESCAPE</button>";
}
function c1() {
  text.innerHTML = '<h1>You choose to stay in line</h1><h3>A woman walks out of a door in front of you. She has no hair and her eyes are like lazers,<br>boring holes through the prisoners. Her eyes reach you and keep on going. Then she walks over to the start of the line<br>and walks along, staring daggers into the prisoners. She reaches you then continues on. She stops at the person three away from you.<br>She looks at the rest without moving, then walks away from the line, then says to  a nearby guard, \"Cull them.\"<br>He gives a signal, and the guards drag the people that weren\'t approved into a room, where the survivors could hear screaming and shooting. <br>  The woman walks out of the room, and the guards move down the line, providing names and clothes.<br>The guards reach you and give you clothes and say,</h3><h2> Your name from now on is ' + name + '.';
  button.innerHTML = "<button class='choice_button' onclick='c3()'>...</button>";
}
function c2() {
  text.innerHTML = "<h1>You break out of the line,</h1><h3> sprinting behind the line of people. There are<h3 class='highlight'> 3</h3> doors in front of you, but you have to choose quickly.</h3><h2> The guards are shooting!</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c4()'>DOOR 1</button><button class='choice_button' onclick='c5()'>DOOR 2</button><button class='choice_button' onclick='c6()'>DOOR 3</button> ";
}
function c3() {
  text.innerHTML = "<h1>He then gives you a watch,</h1><h3> with a holographic display and a dial on the side. He looks at you expectantly</h3><h2>Do you put on the watch?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c7()'>YES</button><button class='choice_button' onclick='c8()'>NO</button>";
}
function c4() {
  text.innerHTML = "<h1>You run to the first door,</h1><h3> gun fire resounding after you. You wretch open the door, and slam it behind you. You hear a beeping behind you, and a lock slide into place. There is no going back. You can hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c9()'>RUN FAST</button><button class='choice_button' onclick='c10()'>LOOK FOR HIDING PLACE</button>";
}
function c5() {
  text.innerHTML = "<h2>You make it to the second door,</h2><h3> wretching it open and closing it behind you. You here bullets clank of the door, then go silent. You then hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c11()'>RUN FAST</button><button class='choice_button' onclick='c12()'>LOOK FOR HIDING PLACE</button>";
}
function c6() {
  text.innerHTML = "<h2>You make it to the third door, wretching it open and slamming it behind you. You look around, and realize that your trapped in a glorified closet. You hear the guards open the door, and you rush them in desperation, but they shoot you down.</h2>";
  button.innerHTML = "<button class='gameover_button' onclick='pre()'>PLAY AGAIN</button>";
}
function c7() {
  text.innerHTML = "<h2>You shrug, then put on the watch.</h2><h3> As you're inspecting the watch, a searing pain radiates from your wrist. As you look in horror, glowing lines trace themselves into your veins.</h3><h2>You are now hooked up to the Moniter.</h2>"
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"  
}
function c8() {
  text.innerHTML = "<h2>The guard then pulls you over to a table,</h2><h3> which has two buttons. Above the buttons are holograms of a Compound Bow, and that of a Machete.</h3><h2> Choose your weapon.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='bowPick()'>COMPOUND BOW</button><button class='choice_button' onclick='swordPick()'>MACHETTE</button>";  
}
function bowPick() {
     
    text.innerHTML = "<h2>You press the button,</h2><h3> and after a moment, a compartment opens up and a silvery compound bow is drawn out by the guards. He then gives you some armor and forces it on to you.</h3>";
  
}
function c9() {}
function c10() {}
function c11() {}
function c12() {}
function c13() {}
