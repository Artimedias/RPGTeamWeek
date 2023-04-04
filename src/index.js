
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
const C4E = new Connector(2, 3);
const C4W = new Connector(4, 5); 
const C5E = new Connector(2, 4); 
const C5W = new Connector(4, 7); 
const C5N = new Connector(1, 6); 
const C6E = new Connector(2, 8);
const C6S = new Connector(3, 5); 
const C7E = new Connector(2, 5);  
const C8E = new Connector(4, 3); 
const C8N = new Connector(1, 9); 
const C8W = new Connector(4, 6); 
const C8S = new Connector(3, 4); 
const C9N = new Connector(1, 10);
const C9S = new Connector(3, 8); 
const C10S = new Connector(3, 9); 
const C10W = new Connector(4, 11); 
const C10E = new Connector(2, 13); 
const C10N = new Connector(1, 15);
const C11E = new Connector(2, 10);
const C11S = new Connector(2, 10);
const C13W = new Connector(4, 14);
const C13E = new Connector(2, 10);
const C14W = new Connector(4, 13);
const C15S = new Connector(3,10);
const C15N = new Connector(1,16);






//Making arrays out of the connectors for each room
const roomOneCons = [];
const roomTwoCons = [C2S, C2W, C2N];
const roomThreeCons = [C3S];
const roomFourCons = [C4E, C4W];
const roomFiveCons = [C5W, C5N];
const roomSixCons = [C6S, C6E];
const roomSevenCons = [C7E];
const roomEightCons = [C8W, C8E, C8S, C8N];
const roomNineCons = [C9N, C9S];
const roomTenCons = [C10W, C10S, C10E];
const roomElevenCons = [C11E, C11S];
const roomTwelveCons = [];
const roomThirteenCons = [C13W, C13E];
const roomFourteenCons = [C14W];
const roomFifteenCons = [C15N, C15S];




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
let hand = new Item("Hand", ["How did you manage to drop your hand on the floor?", "This is your hand. It's very handy"], "tools", 0);
let firstKey = new Item("Key", ["There is a key on the ground", "This is a key. It is the first one you have found."], "keys", 88);
let flashdrive = new Item("Flashdrive", ["There is a flashdrive laying on a desk", "This a computer flash drive."], "objects", 88);
let axe = new Item("Axe", ["There is an axe leaning against a tree nearby.", "The axe is sharp and glistening"], "tools", 88 );
let whiskey = new Item("Whiskey", ["There is a botttle of whiskey on the counter in front of you.", "A bottle of whiskey that you are tempted to drink."], "objects", 88);
let bunnymask = new Item("Bunnymask", ["There is a bunny mask on the table", "The bunny mask is cute yet unsettling"], "objects", 88);
let bluekey = new Item("Bluekey", ["A shiny blue key lies under the huge mess", "The key glints a shiny blue off it's metallic surface."], "keys", 88);
let file = new Item("File", ["You see a file sitting on the floor of the cabin", "A file used to shave or remove metal."], "objects", 88);
let sunglasses = new Item("Sunglasses", ["A pair of sunglasses drop from above onto the table in front of you.",
"A very cool looking and stylish pair of sunglasses"], "objects", 88);
let flashlight = new Item("Flashlight", ["Behind the bars in the electronics case is a flashlight.", "The flashlight is new with what appears to be full batteries."], "tools", 88);
let fireextinguisher = new Item("Fireextinguisher", ["On the wall is a fire extinguisher encased in glass.",
"The extinguisher is heavy and cumbersome, obviously made to last."], "tools", 88);
let foxmask = new Item("Foxmask", ["There is now a fox mask in you inventory.", "The mask just like the bunny mask is adorable yet creepy."], "objects", 88);
let catmask = new Item("Catmask", ["You pull the cat mask directly out of the computer screen.", "The cat mask is beautiful and ornate."], "objects", 88);




//Defining setpieces
let roomOneChest = new SetPiece(0, ["There is an unlocked chest in the room", "There is an already opened chest in the room"], "chest", (item) => {
  if(item.name === "Hand")
  {
    firstKey.location = 1;
    console.log("The chest opens! There is a key inside!");
    roomOneChest.state = 1;
    firstKey.describe();
  }
  else
  {
    console.log(`your ${item} does nothing to the chest`);
  }
});

let roomOneDoor = new SetPiece(0, ["There is a door to the north, but it's locked", "There is an open door to the north"], "door", (item) => {
  if(item.name === "Key")
  {
    roomOneCons.push(C1N);
    console.log("The door creaks open, revealing a hallway to the north");
    
  }
  else
  {
    console.log(`your ${item} does nothing to the door`);
  }
});



//Defining rooms
const roomOne = new Room(1, "You enter a dark and gloomy room that looks like a bunker. The only source of light is a flickering fluorescent lamp on the ceiling. The floor and walls are made of cold and rough concrete. \n", roomOneCons);
const roomTwo = new Room(2, "You use the key on the door to the east and enter a large office floor. You are surprised by the contrast bewtween this room and the previous one. This room looks moderna and bright, with rows of desks and computers lining the walls and windows. \n You walk around the room and notice a flash drive lying on one of the desks. You see a computer that seems to be turned on. \n You have a choice: do you want to insert the flash drive into the computer or keep it for later? \n There is a path to the South and a path to the West", roomTwoCons);
const roomThree = new Room(3, "You look for another door and find one to the west. You open it and enter a small cabin. You are shocked by the sudden change of scenery. \n You see a violent snowstorm raging outside the windows, which are boarded up with planks. You wonder how you got an office to a cabin in the middele of nowhere. \n You look around the room and see a fireplace, a sofa, a table and a closet. On the table is a bunny mask that looks cute and creepy at the same time. \n You see a closet that has a rusty lock on it. You try and open it but it is stuck. You need something to break it open. \n Maybe there is something in the room that can help you? You look for a hammer or something else in the room and find one under the sofa. You use it to smash open the lock on the closet. \n There is a path to the East and a path to the North", roomThreeCons);
const roomFour = new Room(4, "You open the closet and see a dark passage inside. You walk through the passage and emerge in a dusty old bar. You are confused again by the sudden change of atmosphere. \n You see some flickering neon lights and aging 80s decor. You hear some music playing from a jukebox in the corner. \n You wonder what this place is and why it's connected to the cabin. You look around and see some stools, tables, chairs and a counter. On the counter, there is a bottle of whiskey that looks tempting. \n You see a sign that says, solve the riddel and find a way out. You see a door to the east that is locked. You need to solve the riddel to open it. \n There is a path to the South and a path to the North", roomFourCons);
const roomFive = new Room(5, "You walk through the door and enter a room that looks like an unclean child's room. You are disgusted by the sight of toys scattered everywhere and drawers leaning out of an organizer. \n You see labels on the drawers that say things like clothes, books, games, etc. You wonder why this room is connected to the bar. \n  There is a path to the South and a path to the North. \n The path to the East is locked. You need to find a key to open them. \n You have a choice do you want to use your hand on the mess or inspect the drawers?", roomFiveCons);
const roomSix = new Room(6, "You walk through the door and enter a large spacious banquet hall, adorned with beautiful decorations and elegant furniture. The room is lit by chandleirs hagning from the ceiling, casting a warm and welcoming glow throughout the hall. \n The centerpiece of the room is a long and ornate dining table, set with a delectable feast that seems to always move just out of reach. \n At the end of the table, there are three glasses arranged in a neat row. The first is filled with a deep red liquid. The second glass is labeled beer and is filled with a frothy and golden brew. The third glass is empty and waiting to be filled. \n There is a path to the South and a path to the North", roomSixCons);
const roomSeven = new Room(7, "As you enter the room you are transported to the heart of a massive forest. \n As you step inside, the room disolves around you and you find yourself standing in a clearing surrounded by towering trees and lush undergrowth. \n There is a parth to the East and to the South", roomSevenCons);
const roomEight = new Room(8, "You enter what appears to be a gas station that has seen better days as much of the merchandise is secured behind metal bars.The atomosphere in the room is slightly ominous, as the bars seem to suggest a sense of danger or insecurity. \n Upon closer inspection it becomes clear that the bars covering the electronics section are in a state of disrepair. \n There is a path to the East and to the West", roomEightCons);
const roomNine = new Room(9, "You walk through the door and enter a school hallway that stretches out to an extraordinary legnth, with rows of lockers lining each side of the passageway. The sounds of teenagers conversing and laughing can be heard in the distance yet no one is present. \n As you continue to explore the passageway you notice a discarded backpack. \n As you look around further you notice a fire extenguisher encased in glass. \n There is a path to the East and to the West", roomNineCons);
const roomTen = new Room(10, "As you enter this room it opens up into an ancient temple with three large statues inside. The statues are a fox, a cat and a bunny. \n There is a path to the South and to the West", roomTenCons);
const roomEleven = new Room(11, "Going through the door you enter a nightmare. You are trapped on a thin ledge that hangs over a bottomless abyss. \n The darkness is suffocating and oppressive and you can hear the wind howling and the rocks crumbling \n You have no idea where you are or how to escape. If you have a flashlight you might see something you wish you didn't. Without it you are at the mercy of whatever lurks in the shadows. \n There is a path to the East and to the West", roomElevenCons);
const roomTwelve = new Room(12, "As you pentrate the next doorway you realize there is no way out. \n The only thing in the room are a table and mirror. The mirror is no ordinary mirror but a puzzle. The table is not an ordinary table but a pun. \n There is a path to the East and to the West", roomTwelveCons);
const roomThirteen = new Room(13, "Once you enter the next room you find yourself facing a huge chessboard that covers the entire floor. You see four pieces on the chessboard: a black king on the eighth rank and the fifth file \n A black queen on the first rank and the fourth file and a white knight on the sixth rank and fifth file. \n There is a rook on the seventh rank and eighth file but it is not on the board. The rook hangs from a rope above the board with a sign that says Move Me. \n You realize this is a chess puzzle and you have to find the only move that will checkmate the black king to open the door to the next room.  \n There is a path to the North and to the West", roomThirteenCons);
const roomFourteen = new Room(14, "This room is dimly lit with a single computer screen on a desk. The screen displays a cryptic message. \n Do You Remember What You What You Were Told? Do the opposite.  \n There is a path to the South and a path to the North", roomFourteenCons);
const roomFifteen = new Room(15, "As you enter the next room it seems to be a deceptive paradise with a lush garden. A wooden gate appears to be the only path forward but in front of it is a maniacal man in a weird uniform holding a gun. \n The man snarls at you to get back in your prison or he will blow your brains out. \n There is a path to the South and a path to the North", roomFifteenCons);
/*const roomSixteen = new Room(16, "You are in a dark room with a torch burning on the wall dimly. \n There is a door to the north and south. \n There is a path to the South and a path to the North", roomSixteenCons);
const roomSeventeen = new Room(17, "You are in a room with a frog on the floor staring at you. \n There is a door to the south and to the west.", roomSeventeenCons);
const roomEighteen = new Room(18, "This \n north east whatever lmao ", roomEighteenCons)*/



//Pushing setpieces into their rooms
roomOne.setpiece.push(roomOneChest);
roomOne.setpiece.push(roomOneDoor);
//Pushing the rooms into the roomArray 
let setPieceArray = [roomOneChest, roomOneDoor];

//pushing items into the itemarray
let itemArray = [hand, firstKey, flashdrive, axe, whiskey, bunnymask, bluekey, file, sunglasses, flashlight, fireextinguisher, foxmask, catmask];

let inv = new Inventory([], [], [], [], []);
inv.tools.push(hand);
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv);
let roomArray = [Henry.inventory, roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight, roomNine, roomTen, roomEleven, roomTwelve, roomThirteen, roomFourteen, roomFifteen];



window.addEventListener("load", main);

function main() {

  roomOne.describe();
  //declaring individual elements
  const northButton = document.getElementById("1");
  const eastButton = document.getElementById("2");
  const southButton = document.getElementById("3");
  const westButton = document.getElementById("4");
  const interactButton = document.getElementById("interact");
  const confirmButton = document.getElementById("confirm");

  northButton.addEventListener("click", () => {Henry.move(1, roomArray);});
  eastButton.addEventListener("click", () => {Henry.move(2, roomArray);});
  southButton.addEventListener("click", () => {Henry.move(3, roomArray);});
  westButton.addEventListener("click", () => {Henry.move(4, roomArray);});


  interactButton.addEventListener("click", () => {
    const itemInput = document.createElement('input');
    const targetInput = document.createElement('input');
    itemInput.type = 'text';
    targetInput.type = 'text';
    document.body.appendChild(itemInput);
    document.body.appendChild(targetInput);


    confirmButton.addEventListener("click", () => {

      const found = setPieceArray.find(element => element.name === targetInput.value);
      if(found instanceof SetPiece)
      {
        console.log(found instanceof SetPiece);
        //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
        Henry.interact(itemInput.value, found);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === targetInput.value);
        console.log(foundItem);
        if(foundItem instanceof Item)
        {
          console.log(found instanceof SetPiece);
          //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
          Henry.pickUp(foundItem);
        }
        else
        {
          console.log("Nope!");
        }
      }
    });
      
  });
}

