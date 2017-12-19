var moniter = false;
var name;
var armor_bool = false;
var weapon_bool = false;
var weapon;
var moniter_addon_number = 0;
var armor;
var socialPt = 0;
var trainPt = 0;
var random_points = Math.floor( Math.random() * 3 )
var text = document.getElementById('story-container');
var button = document.getElementById('button-container');
var inventory = document.getElementById('inventory_container');
function invent() {
   if(weapon_bool == false && armor_bool == false && moniter == false) {
        inventory.innerHTML = '<h4>You don\'t have anything in your inventory!</h4>';
    }else if(weapon_bool == false && armor_bool == false && moniter == true) {
      inventory.innerHTML = "You have <b>" + moniter_addon_number + "</b> Moniter add-ons";
    }else if(weapon_bool == false && armor_bool == true) {
      inventory.innerHTML = "You don't have a weapon.<br>You have some <b>" + armor + "</b>.<br>";
      inventory.innerHTML += "You have <b>" + moniter_addon_number + "</b> Moniter add-ons.";
    }else if (weapon_bool == true && armor_bool == false) {
      inventory.innerHTML = "You have a <b>" + weapon + "</b>.<br>You have no armor.<br>";
      inventory.innerHTML += "You have <b>" + moniter_addon_number + "</b> Moniter add-ons.";
    }else if (weapon_bool == true && armor_bool == true) {
      inventory.innerHTML = "You have a <b>" + weapon + "</b>.<br>You have some <b>" + armor + "</b>.<br>";
      inventory.innerHTML += "You have <b>" + moniter_addon_number + "</b> Moniter add-ons.";
    }

    // //else {
    //   //  if(weapon == false) {
    //         inventory.innerHTMl = "You don't have any weapons.";
    //     } else {
    //         inventory.innerHTML = "you have a <b>" + weapon.value + "</b>.";
    //     }if(armor == false) {
    //         inventory.innerHTMl += "You don't have any armor.";
    //     } else {
    //         inventory.innerHTMl += "You have some <b>" + armor.value + "</b>.";
    //     }
    //     if(moniter == true) {
    //       inventory.innerHTML += "You are wearing the Moniter.";
    //       inventory.innerHTML += "You have " + moniter_addon_number + " Moniter upgrades.";
    //     }
  //}
   if(socialPt > 0 || trainPt > 0) {
      inventory.innerHTML += "You have " + socialPt + " social points.";
      inventory.innerHTML += "You have " + trainPt + " training points";
   }
}
function gameOver() {
  weapon = false;
  armor = false;
  moniter = false;
  pre();
}
function pre() {
    text.innerHTML = 'WELCOME TO GLASS COFFIN.<br>This is a choice led game, so choose wisely.<br> <input type="text" id="name_select"  placeholder="Choose Your Name" required/>';
    button.innerHTML = "<button id='name_submit' onclick='start()'>START</button>";
}
function start() {
    name = document.getElementById('name_select').value;
    text.innerHTML = "<h1>You wake up in a glass coffin.</h1><h3>You can\'t remember your name.</h3><h3>You have no idea who you are, how you got here, or what is happening</h3><h3>The coffin has opaque sides, but the front is transparent glass, and as you look around,<br>you realize that there are others looking around, or hitting the glass, or sitting with a dazed look.</h3><h2>Suddenly the front panel of all the coffins crash down, and guards swarm you, dragging you into a line of people who have been in the coffins. You are naked and cold, and there is a pile of clothes on the table, but is is surrounded by guards</h2><h2>Do stay in the line or try to escape?</h2>";
    button.innerHTML = "<button class='choice_button' onclick='c1()'>STAY</button><button class='choice_button' onclick='c2()'>ESCAPE</button>";
    invent();
}
function c1() {
  text.innerHTML = '<h1>You choose to stay in line</h1><h3>A woman walks out of a door in front of you. She has no hair and her eyes are like lazers,<br>boring holes through the prisoners. Her eyes reach you and keep on going. Then she walks over to the start of the line<br>and walks along, staring daggers into the prisoners. She reaches you then continues on. She stops at the person three away from you.<br>She looks at the rest without moving, then walks away from the line, then says to  a nearby guard, \"Cull them.\"<br>He gives a signal, and the guards drag the people that weren\'t approved into a room, where the survivors could hear screaming and shooting. <br>  The woman walks out of the room, and the guards move down the line, providing names and clothes.<br>The guards reach you and give you clothes and say,</h3><h2> Your name from now on is ' + name + '.';
  button.innerHTML = "<button class='choice_button' onclick='c3()'>...</button>";
  invent();
}
function c2() {
  text.innerHTML = "<h1>You break out of the line,</h1><h3> sprinting behind the line of people. There are<h3 class='highlight'> 3</h3> doors in front of you, but you have to choose quickly.</h3><h2> The guards are shooting!</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c4()'>DOOR 1</button><button class='choice_button' onclick='c5()'>DOOR 2</button><button class='choice_button' onclick='c6()'>DOOR 3</button> ";
  invent();
}
function c3() {
  text.innerHTML = "<h1>He then gives you a watch,</h1><h3> with a holographic display and a dial on the side. He looks at you expectantly</h3><h2>Do you put on the watch?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c7()'>YES</button><button class='choice_button' onclick='c8()'>NO</button>";
  invent();
}
function c4() {
  text.innerHTML = "<h1>You run to the first door,</h1><h3> gun fire resounding after you. You wretch open the door, and slam it behind you. You hear a beeping behind you, and a lock slide into place. There is no going back. You can hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c9()'>RUN FAST</button><button class='choice_button' onclick='c10()'>LOOK FOR HIDING PLACE</button>";
  invent();
}
function c5() {
  text.innerHTML = "<h2>You make it to the second door,</h2><h3> wretching it open and closing it behind you. You here bullets clank of the door, then go silent. You then hear running echoing though the hallways.</h3><h2> Do you either run swiftly, or jog slowly and look for a hiding place?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c11()'>RUN FAST</button><button class='choice_button' onclick='c12()'>LOOK FOR HIDING PLACE</button>";
  invent();
}
function c6() {
  text.innerHTML = "<h2>You make it to the third door, wretching it open and slamming it behind you. You look around, and realize that your trapped in a glorified closet. You hear the guards open the door, and you rush them in desperation, but they shoot you down.</h2>";
  button.innerHTML = "<button class='gameover_button' onclick='gameOver();'>PLAY AGAIN</button>";
 invent();
}
function c7() {
  moniter = true;
  text.innerHTML = "<h2>You shrug, then put on the watch.</h2><h3> As you're inspecting the watch, a searing pain radiates from your wrist. As you look in horror, glowing lines trace themselves into your veins.</h3><h2>You are now hooked up to the Moniter.</h2>"
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"
  invent();
}
function c13() {
  text.innerHTML = "<h2>The guard then pulls you over to a table,</h2><h3> which has two buttons. Above the buttons are holograms of a Compound Bow, and that of a Machete.</h3><h2> Choose your weapon.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='bowPick()'>COMPOUND BOW</button><button class='choice_button' onclick='swordPick()'>MACHETTE</button>";
  invent();
}
function bowPick() {
    weapon = "Starter Compound Bow";
    armor = "Basic Armor";
    weapon_bool = true;
    armor_bool = true;
    text.innerHTML = "<h2>You press the button,</h2><h3> and after a moment, a compartment opens up and a silvery compound bow is drawn out by the guards. He then gives you some armor and your new weapon.</h3>";
    button.innerHTML = "<button class='choice_button' onclick='c14()'>...</button>";
    invent();
    console.log(weapon, armor);
}
function swordPick() {
  weapon_bool = true;
  armor_bool = true;
  weapon = "Starter Machette";
  armor = "Basic Armor";
  text.innerHTML = "<h2>You press the button,</h2><h3> and after a moment, a compartment opens up and a sharp machette is drawn out by the guards. He then gives you some armor and your new weapon.</h3>";
  button.innerHTML = "<button class='choice_button' onclick='c14()'>...</button>";
  console.log(weapon, armor);
  invent();
}
function c8() {
  moniter = true;
  text.innerHTML = "<h2>You shake your head at the guard, but then he grabs you by the neck, forcing you onto the table and putting on the watch, then letting you go. You look at the guard irritably, but then suddenly collapse in pain as glowing lines of light trace themselves in your veins. You are now hooked up to the moniter.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c13()'>...</button>"
  invent();
}
function c9() {
  text.innerHTML = "<h2>You sprint down the halls, but then you notice that there are hallways branching of to the side. Do you keep going down the hallway, take the left exit, or take the right exit?</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c15()'>LEFT EXIT</button><button class='choice_button' onclick='c16()'>KEEP GOING</button><button class='choice_button' onclick='c17()'>RIGHT EXIT</button>";
}
function c10() {
  text.innerHTML = "<h2>You decide that it would be better to wait it out in a nice hiding spot,</h2> so you walk down the hallway looking for anything that could serve. As you're jogging, you come across a space where you can climb up into a hollow between some pipes. You climb up and wait for the guards to come. A few minutes later, you hear marching, and 2 guards come into sight. Do you jump down and try to fight them, or wait for them to pass?";
  button.innerHTML = "<button class='choice_button' onclick='c18()'>FIGHT</button><button class='choice_button' onclick='c19()'>WAIT</button>";
}
function c11() {
  text.innerHTML = "<h2>You sprint down the halls, but you can hear the guards coming.</h2><h3>Suddenly, you see a hallway branching out to the left.</h3><h2>Do you keep going or do you take the exit.</h2>";
  button.innerHTML = "<button class='choice_button' onclick='c19()'>KEEP GOING</button><button class='choice_button' onclick='c20()'>TAKE THE EXIT</button>";
}
function c12() {
  text.innerHTML = "<h2>You look for a good hiding spot as you jog down the corridor. You speed up as you hear the guards approaching. No matter how hard you look, you can't seem to find a hiding spot. Suddenly you feel a bullet rip through your shoulder, and you stumble to the ground. you roll over to find a masked guard point a gun at your head. Game Over</h2>";
  button.innerHTML = "<button class='gameover_button' onclick='gameOver()'>PLAY AGAIN</button>";
}
function c14() {
   text.innerHTML = "<h2>The guards pull you over to a big cafeteria,</h2><h3>where people mill around talking with each other. Towards the back of the cafeteria you can see a door to a training room</h3>";
   button.innerHTML = "<button class='choice_button' onclick='social1()'>SOCIALIZE</button><button class='choice_button' onclick='train1()'>TRAIN</button>";
}
function social1() {
   random_points = Math.floor( Math.random() * 3 )
   text.innerHTML = "<h2>You head towards the milling crowds of people, introducing yourself and asking around. You have gained"+random_points+" points for socializing</h2>";
   button.innerHTML = "<button class='choice_button' onclick='cafeteria()'>Go Back to Cafeteria</button>";
   socialPt += random_points;
   invent()
}
function train1() {}
function cafeteria() {
   
}
function c15() {}
function c16() {}
function c17() {}
function c18() {}
function c19() {}
