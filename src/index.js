
import Player from './js/player.js';
import Inventory from './js/inventory.js';
import SetPiece from './js/setpiece.js';
import Character from './js/character.js';
import Room from './js/room.js';
import Connector from './js/connector.js';
import Item from './js/item.js';




//Defining Connectors

//C for connector, 1 for room 1, N for north

//C for connector, 1 for room 1, N for north
//1 is north, 2 is east, 3 is south, 4 is west
const C1N = new Connector(1, 2); 
const C2S = new Connector(3, 1); 
const C2N = new Connector(1, 3);
const C2W = new Connector(4, 4); 
const C3S = new Connector(3, 2); 
const C3W = new Connector(4, 8);
const C4N = new Connector(1, 8); 
const C4E = new Connector(2, 2);
const C4W = new Connector(4, 5); 
const C5E = new Connector(2, 4); 
const C5W = new Connector(4, 7); 
const C5N = new Connector(1, 6); 
const C6E = new Connector(2, 8);
const C6S = new Connector(3, 5); 
const C7W = new Connector(4, 17); 
const C7E = new Connector(2, 5); 
const C8E = new Connector(4, 3); 
const C8N = new Connector(1, 9); 
const C8W = new Connector(4, 6); 
const C8S = new Connector(3, 4); 
const C9N = new Connector(1, 10);
const C9S = new Connector(3, 8); 
const C10S = new Connector(3, 9); 
const C10W = new Connector(4, 11); 
const C10E = new Connector(2, 14); 
const C10N = new Connector(1, 15);
const C11E = new Connector(2, 10);
const C11S = new Connector(3, 12);
const C11N = new Connector(1, 1);
const C11W = new Connector(4, 1);
const C13W = new Connector(4, 14);
const C13E = new Connector(2, 10);
const C14W = new Connector(4, 10);
const C15S = new Connector(3,10);
const C15N = new Connector(1,16);

//Forest stuff
const F1 = new Connector(1, 18);
const F2 = new Connector(1, 19);
const F3 = new Connector(4, 20);
const F4 = new Connector(4, 21);
const F5 = new Connector(1, 22);

const FNaF = new Connector(1, 1);
const FEF = new Connector(2, 2);
const FSF = new Connector(3, 3);
const FWF = new Connector(4, 4);

const CN = new Connector(1, 7);
const CE = new Connector(2, 7);
const CS = new Connector(3, 7);
const CW = new Connector(4, 7);






//Making arrays out of the connectors for each room
const roomOneCons = [];
const roomTwoCons = [C2S, C2W, C2N];
const roomThreeCons = [C3S];
const roomFourCons = [C4E, C4W];
const roomFiveCons = [C5W, C5N, C5E];
const roomSixCons = [C6S];
const roomSevenCons = [C7E, C7W];
const roomEightCons = [C8W, C8E, C8S, C8N];
const roomNineCons = [C9N, C9S];
const roomTenCons = [C10W, C10S, C10E];
const roomElevenCons = [C11E, C11S, C11N, C11W];
const roomTwelveCons = [];
const roomThirteenCons = [C13W, C13E];
const roomFourteenCons = [C14W];
const roomFifteenCons = [C15S];
const roomSeventeenCons = [F1, FEF, FSF, FWF];
const roomEighteenCons = [F2, FEF, FSF, FWF];
const roomNineteenCons = [F3, FEF, FSF, FNaF];
const roomTwentyCons = [F4, FEF, FSF, FNaF];
const roomTwentyOneCons = [F5, FEF, FSF, FWF];
const roomTwentyTwoCons = [CN, CE, CS, CW];




//Defining items

/*
The players hand
The key to the chest in the first room
The flashdrive which is used in room 14
The bunny mask in room 3
The bottle of whiskey
The blue key in the kids room
The file in the cabin
the axe in the cabin
the sunglasses in the ballroom
the flashlight in the gas station
the fire exstinguisher in the hallway
the fox mask in the riddle room
the cat mask in the computer room
*/
let hand = new Item("Hand", ["\n How did you manage to drop your hand on the floor?", "\nThis is your hand. It's very handy"], "tools", 0);
let firstKey = new Item("Key", ["\n There is a key on the ground", "\n This is a key. It is the first one you have found."], "keys", 88);
let flashdrive = new Item("Flashdrive", ["\n There is a flashdrive laying on a desk", "\n This a computer flash drive."], "objects", 2);
let axe = new Item("Axe", ["\n There is an axe leaning against a tree nearby.", "\n The axe is sharp and glistening"], "tools", 22);
let whiskey = new Item("Whiskey", ["\n There is a botttle of whiskey on the counter in front of you.", "\n A bottle of whiskey that you are tempted to drink."], "objects", 88);
let bunnymask = new Item("Bunnymask", ["\n There is a bunny mask on the table", "\n The bunny mask is cute yet unsettling"], "objects", 3);
let bluekey = new Item("Blue key", ["\n A shiny blue key lies on the carpeted floor", "\n The key glints a shiny blue off it's metallic surface."], "keys", 88);
let file = new Item("File", ["\n You see a file sitting on the floor of the cabin", "\n A file used to shave or remove metal."], "objects", 22);
let sunglasses = new Item("Sunglasses", ["\n A pair of sunglasses drop from above onto the table in front of you.",
"\n A very cool looking and stylish pair of sunglasses"], "objects", 88);
let flashlight = new Item("Flashlight", ["\n Behind the bars in the electronics case is a flashlight.", "\n The flashlight is new with what appears to be full batteries."], "tools", 88);
let fireextinguisher = new Item("Fire extinguisher", ["\n The fire extinguisher rolls slowly on the ground.",
"\n The extinguisher is heavy and cumbersome, obviously made to last."], "tools", 88);
let foxmask = new Item("Foxmask", ["\n There is now a fox mask in you inventory.", "\n The mask just like the bunny mask is adorable yet creepy."], "objects", 88);
let catmask = new Item("Catmask", ["\n There is an image of a cat mask on the computer screen", "\n The cat mask is beautiful and ornate."], "objects", 88);
let saw = new Item("Saw", ["\n A saw lays against the concrete floor", "\n A garden saw"], "tools", 88);
let tablehalf = new Item("Half of a table", ["\n It's half of a table", "\n Somehow you have fit half of a table into your- wait, where are you carrying all this stuff anyways?"], "objects", 88);




//Defining setpieces
let roomOneChest = new SetPiece(1, 0, [`\n There is an unlocked chest in the room`, "\n There is an already opened chest in the room"], "chest", (item, textBox) => {
  if(item.name === "Hand" && roomOneChest.state === 0)
  {
    firstKey.location = 1;
    textBox.innerText += "\n The chest opens! There is a key inside!";
    roomOneChest.state = 1;
    firstKey.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the chest`;
  }
});

let roomOneDoor = new SetPiece(1, 0, ["\n There is a door to the north, but it's locked", "\n There is an open door to the north"], "door", (item, textBox) => {
  if(item.name === "Key")
  {
    roomOneCons.push(C1N);
    textBox.innerText += "\n The door creaks open, revealing a hallway to the north";    
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the door`;
  }
});

let roomTwoComputer = new SetPiece(2, 0, ["\n There is a computer in sleep mode on one of the desks", "\n There is a computer in the room. Its screen reads ENNWWN in a forest green colour"], "computer", (item, textBox) => {
  if(item.name === "Flashdrive")
  {
    textBox.innerText += "\n Did you really just try to stick an unknown flashdrive into a computer? Are you insane?";    
  }
  if(item.name === "Hand")
  {
    textBox.innerText += "\n The computer whirrs to life when you hit the power button!";
    roomTwoComputer.state = 1;
    roomTwoComputer.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the computer`;
  }
});

let roomThreeCloset = new SetPiece(3, 0, ["\n There is a closet locked with a rusty lock in the cabin", "\n The closet has opened, revealing a path to the West inside"], "closet", (item, textBox) => {
  if(item.name === "Axe")
  {
    textBox.innerText += "\n You smash the lock with the axe, allowing you to open the closet";   
    roomThreeCloset.state = 1;
    roomThreeCloset.describe(textBox);
    roomThreeCons.push(C3W); 
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the closet`;
  }
});

let roomFourBar = new SetPiece(4, 0, ["\n The bar counter is covered in dust", "\n The now empty bar counter is covered in dust"], "bar", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n As you inspect the bar, you find a bottle of whiskey just behind the counter!";
    whiskey.location = 4;
    roomFourBar.state = 1;
    whiskey.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the bar`;
  }
});

let roomFourJukebox = new SetPiece(4,0, ["\n There is a jukebox in the bar, silent", "\n The jukebox plays Knocking on heavens door by Guns and Roses. As it does, a door to the north has opened!", "\nThe jukebox plays Africa by Toto", "\nThe jukebox plays ThunderStruck by AC/DC"], "jukebox", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n You inspect the jukebox, and see three options for songs. Which one would you like to play?";    
    const doorButton = document.createElement('button');
    const africaButton = document.createElement('button');
    const thunderButton = document.createElement('button');
    doorButton.innerText = "Knocking on Heavens Door";
    africaButton.innerText = "Africa";
    thunderButton.innerText = "Thunderstruck";
    document.body.appendChild(doorButton);
    document.body.appendChild(africaButton);
    document.body.appendChild(thunderButton);
    doorButton.addEventListener("click", () => {
      roomFourJukebox.state = 1;
      roomFourJukebox.describe(textBox);
      roomFourCons.push(C4N);
      document.body.removeChild(doorButton);
      document.body.removeChild(africaButton);
      document.body.removeChild(thunderButton);
    })
    africaButton.addEventListener("click", () => {
      roomFourJukebox.state = 2;
      roomFourJukebox.describe(textBox);
      document.body.removeChild(doorButton);
      document.body.removeChild(africaButton);
      document.body.removeChild(thunderButton);
    })
    thunderButton.addEventListener("click", () => {
      roomFourJukebox.state = 3;
      roomFourJukebox.describe(textBox);
      document.body.removeChild(doorButton);
      document.body.removeChild(africaButton);
      document.body.removeChild(thunderButton);
    })
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the bar`;
  }
});

let roomFiveMess = new SetPiece(5, 0, ["\n There is a massive mess of toys and trash on the ground", "\n The mess has been cleaned away, now sorted neatly into organizers"], "mess", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n You clean up the mess, though it takes great effort. Underneath all the toys and mess though, you find a shiny blue key!";
    bluekey.location = 5;
    roomFiveMess.state = 1;
    bluekey.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the mess`;
  }
});

let roomSixGlass = new SetPiece(0, ["\n At the end of the table are three fine glasses. \nOne is full of a dark red liquid, the other a frothy brown. The third lies empty.", "\n All three glasses are full, and a door to the east has been opened"], "glasses", (item, textBox) => {
  if(item.name === "Whiskey")
  {
    textBox.innerText += "\n You pour the Whiskey into the last glass. \nAs it fills, classical music begins to play, and a hidden passage to the East reveals itself";
    roomSixCons.push(C6E);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the glasses`;
  }
});

let roomEightBars = new SetPiece(8, 0, ["\n The set of bars covering the eletronics section seem to be worn thin", "The bars on the eletronics section are on the verge of breaking", "The bars covering the eletronics section have been removed"], "bars", (item, textBox) => {
  if(item.name === "File" && roomEightBars.state === 0)
  {
    textBox.innerText += "\n You use the file to slowly whittle away at the bars. You think you're making progress, but you can't be sure";
    roomEightBars.state = 1;
    roomEightBars.describe(textBox);    
  }
  else if(item.name === "File" && roomEightBars.state === 1)
  {
    textBox.innerText += "\n You use the file to slowly whittle away at the bars. Finally, they break away, letting you get to what inside";
    roomEightBars.state = 2;
    roomEightBars.describe(textBox);
    flashlight.location = 8;
    flashlight.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the bars`;
  }
});

let roomNineFire = new SetPiece(9, 0, ["\n There is a fire extinguisher on the wall, protected by a sturdy hard plastic shell", "The shell around the extinguisher has been shattered"], "shell", (item, textBox) => {
  if(item.name === "Axe" && roomNineFire.state === 0)
  {
    textBox.innerText += "\n You swing the axe on the encasement of the extinguisher, and it falls to the ground, making a loud clattering noise";
    roomNineFire.state = 1;
    fireextinguisher.location = 9;
    fireextinguisher.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the protective shell`;
  }
});

let roomTenFox = new SetPiece(10, 0, ["\n The Fox Statue towers over you, its eyes seem to follow you wherever you go.", "\n The Fox Statue glows with an odd warmth. The statue's eyes still follow you, but seem more friendly."], "fox", (item, textBox) => {
  if(item.name === "Foxmask" && roomTenFox.state === 0)
  {
    roomTenFox.state = 1;
    textBox.innerText += "\n The statue seems to meld with the mask";
    roomTenFox.describe(textBox);
    foxmask.location = 88;
    if(roomTenBunny.state === 1 && roomTenCat.state === 1)
    {
      textBox.innerText += "\n With all three statues pleased, a hidden door to the north reveals itself";
      roomTenCons.push(C10N)
    }
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the statue`;
  }
});

let roomTenCat = new SetPiece(10, 0, ["\n The Cat Statue looms above you, its eyes glaring at you no matter your position.", "\n The Cat Statue glows with an alien heat. The eyes still watch you, but with content opposed to the earlier malice."], "cat", (item, textBox) => {
  if(item.name === "Catmask" && roomTenCat.state === 0)
  {
    roomTenFox.state = 1;
    textBox.innerText += "\n The statue seems to meld with the mask";
    roomTenCat.describe(textBox);
    catmask.location = 88;
    if(roomTenBunny.state === 1 && roomTenFox.state === 1)
    {
      textBox.innerText += "\n With all three statues pleased, a hidden door to the north reveals itself";
      roomTenCons.push(C10N)
    }
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the statue`;
  }
});

let roomTenBunny = new SetPiece(10, 0, ["\n The Rabbit Statue towers over you, its wary eyes affixed to your current location.", "\n The Rabbit Statue glows with a soothing warmth. The statue's eyes continue to stare, but are no longer anxious."], "bunny", (item, textBox) => {
  if(item.name === "Bunnymask" && roomTenBunny.state === 0)
  {
    roomTenBunny.state = 1;
    textBox.innerText += "The statue seems to meld with the mask";
    roomTenBunny.describe(textBox);
    bunnymask.location = 88;
    if(roomTenFox.state === 1 && roomTenCat.state === 1)
    {
      textBox.innerText += "\n With all three statues pleased, a hidden door to the north reveals itself";
      roomTenCons.push(C10N)
    }
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the statue`;
  }
});

let roomElevenDarkness = new SetPiece(11, 0, ["\n ■■■■■■■■■■■■■■■■■■■■■■■■■■■ \n ■■■■■■■■■■■■■■■■■■■■■■■■ \n ■■■■■■■■■■■■■■■■■■■■■■■■■■ \n ■■■■■■■■■■■■■■■■■■■■■■■■ \n ■■■■■■■■■■■■■■■■■■■■■■■■", " \n You are in a room with dark pits inside that go far too deep to be able to tell where they lead. The only safe passage is to the south and to the east"], "darkness", (item, textBox) => {
  if (item.name === "Flashlight" && roomElevenDarkness.state === 0) {
    roomElevenDarkness.state = 1;
    textBox.innerText += "\n The flashlight shines through the oppressive black, revealing your surroundings.";
    roomElevenDarkness.describe(textBox);
  }
  
})

let roomTwelveTable = new SetPiece(12, 0, ["A fairly normal looking square oak table, save its location in this ominous void.", "Half of a table rests in the room, somehow upright", "A hole is within the room!"], "table", (item, textBox) => {
  if (item.name === "Saw" && roomTwelveTable.state === 0) {
    roomTwelveTable.state = 1;
    textBox.innerText += "\n You saw in half the table, and take half of it for yourself"
    tablehalf.location = 12;
    tablehalf.describe(textBox);
  }
  else if (item.name === "Half of a table" && roomTwelveTable.state === 1) {
    roomTwelveTable.state = 2;
    textBox.innerText += "\n You put the two halves back together, making it whole. You then jump in the hole to escape!"
    Henry.location = 10;
    textBox.innerText += "\n For your cleverness in solving this riddle, you have been awarded the fox mask"
    Henry.pickUp(foxmask, textBox);
    roomTen.describe(textBox, itemArray);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the mirror`;
  }
})

let roomTwelveMirror = new SetPiece(12, 0, ["\n A standard oval head height mirror, other than the invisible wall of nothing it hangs from.", "\n A shattered mirror is in the room."], "mirror", (item, textBox) => {
  if (item.name === "Hand" && roomTwelveMirror.state === 0) {
    roomTwelveMirror.state = 1;
    textBox.innerText += "\nAs you look in the mirror, you see what you saw. \nSeeing the saw, you reach inside and pull it out. \nThe mirror shatters and the shards fall to the floor of nothing beneath you."
    saw.location = 12;
    saw.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the mirror`;
  }
})

/*let roomThirteenChessboard = new SetPiece(0, ["\n The white pieces await your command", "\n The black king lies slain, and a door to the east has been opened"], "chessboard", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n What move would you like to make?";    
    const doorButton = document.createElement('input');
    

    doorButton.innerText = "Knocking on Heavens Door";
    africaButton.innerText = "Africa";
    thunderButton.innerText = "Thunderstruck";
    document.appendChild(doorButton);
    document.appendChild(africaButton);
    document.appendChild(thunderButton);
    doorButton.addEventListener("click", () => {
      roomFourJukebox.state = 1;
      roomFourJukebox.describe(textBox);
      roomFourCons.push(C4N);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })
    africaButton.addEventListener("click", () => {
      roomFourJukebox.state = 2;
      roomFourJukebox.describe(textBox);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })
    thunderButton.addEventListener("click", () => {
      roomFourJukebox.state = 3;
      roomFourJukebox.describe(textBox);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the bar`;
  }
});*/

let roomFourteenComputer = new SetPiece(14, 0, ["\n The desktop computer only displays a looping animation of a blazing inferno", "\n The computer's screen now displays a keyhole surrounded by grey metal.", "\n On the screen there is now only the text 'Do you remember what I told you before? Do the opposite'", "\n There is now displayed a picture of a catlike mask taking most of the screen's space.", "\n The computer has powered itself off and cooled to room temperature."], "Odd Computer", (item, textBox) => {
  if (item.name === "Fire extinguisher" && roomFourteenComputer.state === 0) {
    roomFourteenComputer.state = 1;
    textBox.innerText += "\n The fire engulfing the virtual world of the screen disspates from the extinguishers gas, leaving only the visage of a lock behind.";
  }
  else if (item.name === "Blue key" && roomFourteenComputer.state === 1) {
    roomFourteenComputer.state = 2;
    textBox.innerText += "\n The key slides into the slot, once turned and removed, the lock fades away to a black screen with a single sentence upon it. \n 'Do you remember what I told you before? Do the opposite'";
  }
  else if (item.name === "Flashdrive" && roomFourteenComputer.state === 2) {
    roomFourteenComputer.state = 3;
    textBox.innerText += "\n The text blips away in an instant, a digital cat coming into existence in the black void of the monitor's display.";
  }
  else if (item.name === "Hand" && roomFourteenComputer.state === 3) {
    roomFourteenComputer.state = 4;
    textBox.innerText += "\n As you reach into the strange computers screen, your hand begins to feel like ice- you pull it away with shock. \n As you do, a cat mask comes out of the display";
    catmask.location = 14;
  }
  else {
    textBox.innerText += `\n your ${item.name} does nothing to the strange computer`;
  }
})

let roomFifteenGunman = new SetPiece(15, 0, ["\n A man dressed in a security guard uniform stands with a gun drawn on you, ready to fire.", "\n The man lies dead on the floor, cut down in your act of defense."], "Gunman", (item, textBox) => {
  if (item.name === "Axe" && roomFifteenGunman.state === 0) {
    roomFifteenGunman.state = 1;
    textBox.innerText += "\n You charge him axe in hand, causing his first shot to miss and hit the doorframe behind you. \nYou close the distance and cut across his chest with the improvised weapon before he can fire a second time.";
    roomFifteenCons.push(C15N);
    textBox.innerText += "\n There is nothing standing in your way to prevent your escape"
  }
  else
  {
    textBox.innerText += `\n your ${item.name} won't save you here`;
  }
})


//Defining rooms
const roomOne = new Room(1, "\n You enter a dark and gloomy room that looks like a bunker. The only source of light is a flickering fluorescent lamp on the ceiling. The floor and walls are made of cold and rough concrete. \n", roomOneCons);
const roomTwo = new Room(2, "\n This room looks modern and bright, with rows of desks and computers lining the walls and windows. \n There is a path to the South, North, and a path to the West", roomTwoCons);
const roomThree = new Room(3, "\n You enter what looks like a hunters cabin, though one that couldn't of been occupied recently. \n You see a violent snowstorm raging outside the windows, which are boarded up with planks. You wonder how you got an office to a cabin in the middele of nowhere. \n You look around the room and see a fireplace, a sofa, a table and a closet. \n There is a path to the South", roomThreeCons);
const roomFour = new Room(4, "\n You enter a dusty old bar. \nYou see some flickering neon lights, a piano with a full tip jar, and aging 80s decor. \n You hear some music playing from a jukebox in the corner. \n You look around and see some stools, tables, chairs and a counter. \n There is a path to the East and a path to the West", roomFourCons);
const roomFive = new Room(5, "\n You walk into what looks like a childs room. \n There is a path to the North, East, and West", roomFiveCons);
const roomSix = new Room(6, "\n You walk through the door and enter a large spacious banquet hall, \n adorned with beautiful decorations and elegant furniture. The room is lit by chandleirs hagning from the ceiling, casting a warm and welcoming glow throughout the hall. \n The centerpiece of the room is a long and ornate dining table, set with a delectable feast that seems to always move just out of reach.\n There is a path to the South", roomSixCons);
const roomSeven = new Room(7, "\n As you enter the room you are transported to the heart of a massive forest. \n As you step inside, the room disolves around you and you find yourself standing in a clearing surrounded by towering trees and lush undergrowth. \n There is a path in all directions", roomSevenCons);
const roomEight = new Room(8, "\n You enter what appears to be a gas station that has seen better days as much of the merchandise is secured behind metal bars.\nThe atomosphere in the room is slightly ominous, as the bars seem to suggest a sense of danger or insecurity. \n There is a path in all directions", roomEightCons);
const roomNine = new Room(9, "\n You walk through the door and enter a school hallway that stretches out to an extraordinary legnth, with rows of lockers lining each side of the passageway. \n The sounds of teenagers conversing and laughing can be heard in the distance yet no one is present.\n There is a mural on the wall. It shows a strange grid you have not seen before. \n[o][o][o][o][o][x][o][o]\n[o][o][o][o][o][x][o][o]\n[x][o][o][o][x][x][x][x]\n[x][x][x][o][x][x][o][o]\n[o][o][x][o][x][x][x][o]\n[o][o][x][x][x][x][x][o]\n[o][o][o][o][o][o][x][o] \n\n There is a path to the North and to the South", roomNineCons);
const roomTen = new Room(10, "\n As you enter this room it opens up into an ancient temple with three large statues inside. The statues are a fox, a cat and a bunny. \n There is a path to the South and to the West", roomTenCons);
const roomEleven = new Room(11, "\n You enter a pitch black room.", roomElevenCons);
const roomTwelve = new Room(12, "\n As you pass across into the next room, you find yourself in a void with no way out. \n The only thing in the room are a table and mirror.", roomTwelveCons);
const roomThirteen = new Room(13, "\n Once you enter the next room you find yourself facing a huge chessboard that covers the entire floor. You see four pieces on the chessboard: a black king on the eighth rank and the fifth file \n A black queen on the first rank and the fourth file and a white knight on the sixth rank and fifth file. \n There is a rook on the seventh rank and eighth file but it is not on the board. The rook hangs from a rope above the board with a sign that says Move Me. \n You realize this is a chess puzzle and you have to find the only move that will checkmate the black king to open the door to the next room.  \n There is a path to the North and to the West", roomThirteenCons);
const roomFourteen = new Room(14, "\n This room is dimly lit with a single computer screen on a desk.\n There is a path to the South and a path to the North", roomFourteenCons);
const roomFifteen = new Room(15, "\n Tthe next room it seems to be a paradise with a lush garden. \nA wooden gate appears to be the only path forward but in front of it is a maniacal man in a weird uniform holding a gun. \n The man snarls at you to get back in your prison or he will blow your brains out. \n There is a path to the South and a path to the North", roomFifteenCons);
const roomSixteen = new Room(16, "\n You take the gate and walk forward, back to the normal world. \n\n\n\n You win!")
const roomSeventeen = new Room(17, "\n You find yourself still in the forest, upon a clearing with a large boulder in the center.\n Now much deeper into the forest, you feel concerned,\n as if going the wrong direction could leave you lost forever", roomSeventeenCons)
const roomEighteen = new Room(18, "\n You come upon a small pond deep within the woods, sourced from a stream to the North, dotted by lily pads and cattails.", roomEighteenCons)
const roomNineteen = new Room(19, "\n The forest continues, the stream flowing from West to South crossing your way.", roomNineteenCons)
const roomTwenty = new Room(20, "\n The stream's source is a small spring within a rocky outcropping between three large trees, the only natrual path to the West past the headwaters.", roomTwentyCons)
const roomTwentyOne = new Room(21, "\n The forest continues unabated, its rows of towering pines obscuring any attempts to view far into the distance.", roomTwentyOneCons)
const roomTwentyTwo = new Room(22, "\n After what felt like endless trees and shrubs, you happen upon a small wooden cabin within the heart of the forest, lit from within.", roomTwentyTwoCons)



//Pushing setpieces into their roomsw
roomOne.setpiece.push(roomOneChest);
roomOne.setpiece.push(roomOneDoor);
roomTwo.setpiece.push(roomTwoComputer);
roomThree.setpiece.push(roomThreeCloset);
roomFour.setpiece.push(roomFourBar);
roomFour.setpiece.push(roomFourJukebox);
roomFive.setpiece.push(roomFiveMess);
roomSix.setpiece.push(roomSixGlass);
roomEight.setpiece.push(roomEightBars);
roomNine.setpiece.push(roomNineFire);
roomTen.setpiece.push(roomTenBunny);
roomTen.setpiece.push(roomTenCat);
roomTen.setpiece.push(roomTenFox);
roomEleven.setpiece.push(roomElevenDarkness);
roomTwelve.setpiece.push(roomTwelveMirror);
roomTwelve.setpiece.push(roomTwelveTable);
roomFourteen.setpiece.push(roomFourteenComputer);
roomFifteen.setpiece.push(roomFifteenGunman);
//Pushing the rooms into the roomArray 
let setPieceArray = [roomOneChest, roomOneDoor, roomTwoComputer, roomThreeCloset, roomFourBar, roomFourJukebox, roomFiveMess, roomSixGlass, roomEightBars, roomNineFire, roomTenBunny, roomTenCat, roomTenFox, roomElevenDarkness, roomTwelveMirror, roomTwelveTable, roomFourteenComputer, roomFifteenGunman];

//pushing items into the itemarray
let itemArray = [hand, firstKey, flashdrive, axe, whiskey, bunnymask, bluekey, file, sunglasses, flashlight, fireextinguisher, foxmask, catmask, saw, tablehalf];

let inv = new Inventory([], [], [], [], []);
inv.tools.push(hand);
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv);
let roomArray = [Henry.inventory, roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight, roomNine, roomTen, roomEleven, roomTwelve, roomThirteen, roomFourteen, roomFifteen, roomSixteen, roomSeventeen, roomEighteen, roomNineteen, roomTwenty, roomTwentyOne, roomTwentyTwo];



window.addEventListener("load", main);

function main() {
  let textBox = document.getElementById("text-box");
  roomOne.describe(textBox, itemArray);
  //declaring individual elements
  const northButton = document.getElementById("1");
  const eastButton = document.getElementById("2");
  const southButton = document.getElementById("3");
  const westButton = document.getElementById("4");
  const interactButton = document.getElementById("interact");
  const confirmButton = document.getElementById("confirm");
  const inventoryButton = document.getElementById("inventory");
  const inspectButton = document.getElementById("inspect");

  northButton.addEventListener("click", () => {console.log("we moving now"); Henry.move(1, roomArray, textBox, itemArray);});
  eastButton.addEventListener("click", () => {Henry.move(2, roomArray, textBox, itemArray);});
  southButton.addEventListener("click", () => {Henry.move(3, roomArray, textBox, itemArray);});
  westButton.addEventListener("click", () => {Henry.move(4, roomArray, textBox, itemArray);});

  const itemInput = document.getElementById('item-select')
  const targetInput = document.getElementById('target-select');
  const inspectInput = document.getElementById("inspect-select");

  interactButton.addEventListener("click", () => {
    childRemover(itemInput);
    childRemover(targetInput);
    for(let i=0; i<Henry.inventory.tools.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.tools[i].name;
      itemInput.add(option);
    }
    for(let i=0; i<Henry.inventory.keys.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.keys[i].name;
      itemInput.add(option);
    }
    for(let i=0; i<Henry.inventory.objects.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.objects[i].name;
      itemInput.add(option);
    }
    for(let i=0; i<setPieceArray.length; i++) {
      if(setPieceArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = setPieceArray[i].name;
        targetInput.add(option);
      }
    }
    for(let i=0; i<itemArray.length; i++) {
      if(itemArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = itemArray[i].name;
        targetInput.add(option);
      }
    }
    itemInput.style.visibility = "visible";
    targetInput.style.visibility = "visible";

    confirmButton.addEventListener("click", function Greg() {
      const found = setPieceArray.find(element => element.name === targetInput.value);
      if(found instanceof SetPiece)
      {
        console.log(found instanceof SetPiece);
        Henry.interact(itemInput.value, found, textBox);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === targetInput.value);
        if(foundItem instanceof Item)
        {
          console.log(found instanceof SetPiece);
          textBox.innerText += `\n You pick up the ${foundItem.name}`;
          Henry.pickUp(foundItem, textBox);
        }
        else
        {
          console.log("Nope!");
        }
      }
      childRemover(itemInput);
      childRemover(targetInput);
      itemInput.style.visibility = "hidden";
      targetInput.style.visibility = "hidden";
      confirmButton.removeEventListener("click", Greg);
    });      
  });

  inspectButton.addEventListener("click", () => {
    childRemover(inspectInput);
    for(let i=0; i<Henry.inventory.tools.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.tools[i].name;
      inspectInput.add(option);
    }
    for(let i=0; i<Henry.inventory.keys.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.keys[i].name;
      inspectInput.add(option);
    }
    for(let i=0; i<Henry.inventory.objects.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.objects[i].name;
      inspectInput.add(option);
    }
    for(let i=0; i<setPieceArray.length; i++) {
      if(setPieceArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = setPieceArray[i].name;
        inspectInput.add(option);
      }
    }
    for(let i=0; i<itemArray.length; i++) {
      if(itemArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = itemArray[i].name;
        inspectInput.add(option);
      }
    }
    let option = document.createElement("option");
    option.innerText = "Room";
    inspectInput.add(option);

    inspectInput.style.visibility = "visible";
    confirmButton.addEventListener("click", function Ralph() {

      const found = setPieceArray.find(element => element.name === inspectInput.value);
      if(found instanceof SetPiece)
      {
        found.describe(textBox);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === inspectInput.value);
        if(foundItem instanceof Item)
        {
          foundItem.describe(textBox);
        }
        else
        {
          roomArray[Henry.location].describe(textBox);
        }
      }
      childRemover(inspectInput);
      inspectInput.style.visibility = "hidden";
      confirmButton.removeEventListener("click", Ralph)
    });
  });

  inventoryButton.addEventListener("click", () => {
    textBox.innerText += "\n You are currently in posession of: \n"
    for(let i=0; i<itemArray.length; i++)
    {
      if(itemArray[i].location === 0)
      {
        textBox.innerText += "\n " + itemArray[i].name;
      }
    }
  })

  function childRemover(list) {
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    return list;
  }
}

